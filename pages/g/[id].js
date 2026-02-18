import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient'; 
import AdUnit from '../../components/AdUnit';

// --- [수정 완료] 서버 미리보기 기능 (유지) [cite: 2026-02-18] ---
export async function getServerSideProps(context) {
  const { id } = context.params;
  const { data: roomData } = await supabase
    .from('rooms')
    .select('group_name')
    .eq('id', id)
    .single();

  return {
    props: {
      serverRoomName: roomData?.group_name || '우리 모임',
      roomId: id
    }
  };
}

// --- [신규] 100% 정밀 일주 계산 함수 (이음 사이트와 동일 로직) [cite: 2026-02-18] ---
function getSajuInfo(birthDate) {
  if (!birthDate) return { ilju: '알수없음', element: '?', desc: '생년월일 정보가 없습니다.' };

  const gan = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
  const zi = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
  const elements = {
    "갑": "목(木)", "을": "목(木)", "병": "화(火)", "정": "화(火)", "무": "토(土)",
    "기": "토(土)", "경": "금(金)", "신": "금(金)", "임": "수(水)", "계": "수(水)"
  };
  const descs = {
    "목(木)": "부드러우면서도 강인한 생명력을 가졌습니다. 성장을 지향하며 타인과 조화롭게 어울리는 능력이 탁월합니다.",
    "화(火)": "열정적이고 에너지가 넘치며 추진력이 강합니다. 주변 사람들에게 밝은 기운을 전달하는 스타일입니다.",
    "토(土)": "듬직하고 신뢰감을 주는 타입으로, 주변을 포용하고 중심을 잡아주는 능력이 뛰어납니다.",
    "금(金)": "날카로운 지혜와 결단력이 돋보입니다. 상황 판단이 빠르고 맺고 끊음이 확실한 매력적인 타입입니다.",
    "수(水)": "지혜롭고 유연하며 적응력이 탁월합니다. 본질을 꿰뚫어 보는 통찰력이 있어 전략적인 판단에 능숙합니다."
  };

  // 기준일: 2024년 1월 1일은 '갑자'일 (Index 0) [cite: 2026-02-18]
  const refDate = new Date('2024-01-01');
  const targetDate = new Date(birthDate);
  const diffTime = targetDate.getTime() - refDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 60갑자 인덱스 계산
  const pillarIndex = ((diffDays % 60) + 60) % 60;
  
  const tenGan = gan[pillarIndex % 10];
  const twelveZi = zi[pillarIndex % 12];
  const element = elements[tenGan];

  return {
    ilju: `${tenGan}${twelveZi}`,
    element: element,
    desc: descs[element]
  };
}

export default function DynamicGroupDetail({ serverRoomName, roomId }) {
  const router = useRouter();
  const id = roomId; 
  
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [groupData, setGroupData] = useState(null);

  const relTypes = {
    soulmate: { label: '천생연분', color: '#3b82f6', score: 98 },
    good: { label: '척척학력', color: '#22c55e', score: 82 },
    soso: { label: '그럭저럭', color: '#eab308', score: 65 },
    clash: { label: '삐걱삐걱', color: '#f97316', score: 42 },
    worst: { label: '최악조합', color: '#ef4444', score: 24 }
  };

  // 2. 서버 연동 데이터 로드 및 '진짜' 사주 계산 적용 [cite: 2026-02-18]
  useEffect(() => {
    if (!id) return;

    const fetchRoomData = async () => {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        alert("존재하지 않는 모임입니다.");
        router.push('/');
        return;
      }

      // [수정 완료] 가짜 analysisPool 대신 진짜 알고리즘을 사용하여 멤버 정보 강화 [cite: 2026-02-18]
      const enhancedMembers = data.members.map((m) => {
        const saju = getSajuInfo(m.birth_date);
        return {
          ...m,
          ilju: saju.ilju,
          element: saju.element,
          desc: saju.desc
        };
      });

      setGroupData({ 
        groupName: data.group_name || '우리 모임', 
        members: enhancedMembers 
      });
    };

    fetchRoomData();
  }, [id]);

  const getRelation = (idx1, idx2) => {
    const diff = Math.abs(idx1 - idx2);
    const types = Object.values(relTypes);
    return types[diff % types.length];
  };

  const calculateTotalScore = () => {
    if (!groupData || groupData.members.length < 2) return 100;
    let total = 0, count = 0;
    for (let i = 0; i < groupData.members.length; i++) {
      for (let j = i + 1; j < groupData.members.length; j++) {
        total += getRelation(i, j).score;
        count++;
      }
    }
    return Math.floor(total / count);
  };

  const getCoordinates = (index, total) => {
    const centerX = 200, centerY = 200;
    if (total === 1) return { x: centerX, y: centerY };
    const radius = 130;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return { x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) };
  };

  const handleCopyLink = () => {
    const shareUrl = `https://oursai.kr/g/${id}`;
    navigator.clipboard.writeText(shareUrl);
    alert("링크가 복사되었습니다!");
    setIsShareOpen(false);
  };

  const handleShareLink = async () => {
    const shareUrl = `https://oursai.kr/g/${id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${serverRoomName} ㅣ 우리 사이`,
          text: '우리 사이의 사주 궁합을 확인해보세요!', 
          url: shareUrl,
        });
        setIsShareOpen(false);
      } catch (err) {
        console.log('공유 취소 또는 에러:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  const dynamicScore = groupData ? calculateTotalScore() : 100;

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>{serverRoomName} ㅣ 우리 사이</title>
        <meta property="og:title" content={`${serverRoomName} ㅣ 우리 사이`} />
        <meta property="og:description" content="친구, 동료, 가족과 함께 사주 궁합을 확인해보세요!" />
        <meta property="og:image" content="https://oursai.kr/og-image.png" />
        <meta property="og:url" content={`https://oursai.kr/g/${id}`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        <div className="px-6 py-6 flex items-center justify-between border-b border-slate-50">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold flex items-center gap-1">‹ 우리 사이</button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        {!groupData ? (
          <div className="flex-1 flex items-center justify-center font-black text-slate-300">데이터를 분석하는 중...</div>
        ) : (
          <main className="flex-1 flex flex-col items-center">
            <div className="text-center mt-8 mb-8">
              <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
                {groupData.groupName} <span className="text-slate-200 text-lg">⚙️</span>
              </h1>
              <p className="text-[14px] text-slate-400 font-bold mt-1">{groupData.members.length}명 참여 중</p>
            </div>

            <div className="w-full px-6 mb-10">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <button onClick={() => setIsShareOpen(!isShareOpen)} className="w-full py-3.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all"><span>🔗</span> 공유하기</button>
                  <AnimatePresence>
                    {isShareOpen && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-14 left-0 w-[180px] bg-white rounded-2xl shadow-2xl border border-slate-50 z-[60] p-2">
                        <button onClick={handleCopyLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left font-bold text-slate-600 text-[13px]">📋 링크 복사</button>
                        <button onClick={handleShareLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left font-bold text-slate-600 text-[13px]">🔗 링크 공유</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button onClick={() => router.push(`/join?id=${id}`)} className="w-full py-3.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black hover:bg-slate-50 flex items-center justify-center gap-1"><span>👤+</span> 나도 참여</button>
                <button onClick={() => router.push('/create-group')} className="col-span-2 py-3.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black flex items-center justify-center gap-1">+ 새 모임 만들기</button>
              </div>
            </div>

            <div className="w-full flex border-b border-slate-50 mb-10"><div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">궁합</div></div>

            <div className="w-full px-8 flex flex-col items-center mb-12">
              <div className="w-full max-w-[340px]">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[18px] font-black text-slate-800">궁합 지수 <span className="text-[#6c5ce7]">{dynamicScore}</span></span>
                  <span className="text-[11px] font-bold text-orange-400 bg-orange-50 px-3 py-1 rounded-full animate-bounce">우리는 여기!</span>
                </div>
                <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden shadow-inner relative">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${dynamicScore}%` }} className="h-full bg-gradient-to-r from-yellow-400 via-[#D980FA] to-[#6c5ce7]" />
                </div>
              </div>
            </div>

            <div className="w-full px-4 flex flex-col items-center overflow-visible">
              <div className="relative w-full aspect-square max-w-[380px] overflow-visible">
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible pointer-events-none">
                  {groupData.members.length > 1 && groupData.members.map((m, i) => 
                    groupData.members.slice(i + 1).map((m2, j) => {
                      const from = getCoordinates(i, groupData.members.length);
                      const to = getCoordinates(groupData.members.indexOf(m2), groupData.members.length);
                      const rel = getRelation(i, groupData.members.indexOf(m2));
                      const isSelected = selectedMemberId === m.id || selectedMemberId === m2.id;
                      return (
                        <React.Fragment key={`${i}-${j}`}>
                          <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={isSelected ? rel.color : "#f1f5f9"} strokeWidth={isSelected ? 4 : 2} opacity={isSelected ? 1 : 0.4} className="transition-all duration-300" />
                          {isSelected && (
                            <g transform={`translate(${(from.x + to.x) / 2}, ${(from.y + to.y) / 2})`}>
                              <rect x="-30" y="-11" width="60" height="22" rx="11" fill={rel.color} />
                              <text textAnchor="middle" dy="4" fontSize="9" fontWeight="900" fill="white">{rel.label}</text>
                            </g>
                          )}
                        </React.Fragment>
                      );
                    })
                  )}
                </svg>
                {groupData.members.map((m, i) => {
                  const pos = getCoordinates(i, groupData.members.length);
                  const isSelected = selectedMemberId === m.id;
                  return (
                    <motion.div 
                      key={m.id} onClick={() => setSelectedMemberId(isSelected ? null : m.id)} 
                      style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }} 
                      className={`absolute w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all z-20 ${isSelected ? 'border-[#6c5ce7] scale-110 shadow-purple-100' : 'border-purple-50'}`}
                    >
                      <span className="text-2xl sm:text-3xl">{m.emoji}</span>
                      <span className="text-[9px] sm:text-[10px] font-black text-slate-500 mt-1">{m.name}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-10 py-6 border-t border-slate-50 w-full">
                {Object.values(relTypes).map((rel, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: rel.color }} />{rel.label}
                  </div>
                ))}
              </div>

              <section className="w-full px-2 py-4">
                <div className="w-full bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center min-h-[100px]">
                  <AdUnit />
                </div>
              </section>
            </div>

            <section className="w-full px-6 mt-10 space-y-6">
              {groupData.members.map((m) => (
                <div key={m.id} className={`bg-[#fcfcfd] rounded-[35px] p-8 border shadow-sm transition-all duration-500 ${selectedMemberId === m.id ? 'border-[#6c5ce7] ring-4 ring-purple-50' : 'border-slate-100'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-50">{m.emoji}</div>
                    <div><p className="text-[17px] font-black text-slate-800">{m.name}</p><p className="text-[12px] text-slate-400 font-bold uppercase pt-1">{m.ilju} - <span className="text-[#6c5ce7]">{m.element}의 기운</span></p></div>
                  </div>
                  <p className="text-[15px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
                </div>
              ))}

              <section className="w-full py-6">
                <div className="w-full bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center min-h-[100px]">
                  <AdUnit />
                </div>
              </section>

              <div className="pt-10 space-y-6 mb-20">
                <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2 px-2"><span className="text-[#6c5ce7]">🔮</span> 일주로 보는 궁합이란?</h2>
                {[
                  { q: "일주가 뭐예요?", a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요. 사주명리학에서 일주는 '나 자신'을 가장 잘 표현하는 부분으로, 성격, 기질, 내면의 스타일을 담고 있어요." },
                  { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 해(년)를 기준으로 하지만, 일주는 태어난 날을 기준으로 합니다. 띠가 사회적인 겉모습이라면, 일주는 나 자신의 본질적인 기운과 속마음을 보기에 더 적합합니다." },
                  { q: "왜 일주로 궁합을 봐요?", a: "일주는 개인의 기질과 내면 에너지를 가장 정확하게 담고 있어, 서로 다른 두 사람이 만났을 때 생기는 화학 반응을 깊이 있게 분석할 수 있습니다." },
                  { q: "우리 사이에서 알 수 있는 것", a: "멤버 간의 1:1 케미 등급과 관계의 특징, 그리고 전체 모임의 조화도를 시각적인 네트워크 그래프로 확인할 수 있습니다. 전통적인 사주를 현대적인 네트워크로 만나보세요!" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                    <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left font-bold text-slate-700 text-[14px]">
                      {item.q} <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    <AnimatePresence>
                      {openAccordion === idx && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">{item.a}</motion.div>}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </main>
        )}

        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-purple-400">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-8">
            <a href="/terms" className="hover:text-purple-400">이용약관</a>
            <span className="text-slate-100">|</span>
            <a href="/privacy" className="hover:text-purple-400">개인정보처리방침</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic tracking-tight">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
