import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [members, setMembers] = useState([]);
  const [groupName, setGroupName] = useState('');

  // 1. 관계 데이터 및 점수 정의
  const relTypes = {
    soulmate: { label: '천생연분', color: '#3b82f6', score: 98 },
    good: { label: '척척학력', color: '#22c55e', score: 82 },
    soso: { label: '그럭저럭', color: '#eab308', score: 65 },
    clash: { label: '삐걱삐걱', color: '#f97316', score: 42 },
    worst: { label: '최악조합', color: '#ef4444', score: 24 }
  };

  // 2. 동적 일주 분석 풀 (참여자 데이터에 맞게 자동 할당)
  const analysisPool = [
    { ilju: '경신', element: '금(金)', desc: '날카로운 지혜가 돋보이며 상황 판단이 빠르고 결단력이 뛰어납니다. 새로운 아이디어로 주변을 놀라게 하는 창의적인 면모를 갖춘 매력적인 타입이에요.' },
    { ilju: '병인', element: '화(火)', desc: '열정적이고 에너지가 넘치며 추진력이 강합니다. 주변 사람들에게 밝은 기운을 전달하며 리더십을 발휘하여 모임의 분위기를 주도하는 스타일입니다.' },
    { ilju: '갑자', element: '수(水)', desc: '지혜롭고 유연하며 새로운 환경에 적응하는 능력이 탁월합니다. 본질을 꿰뚫어 보는 통찰력이 있어 전략적인 판단과 문제 해결에 능숙합니다.' },
    { ilju: '무진', element: '토(土)', desc: '듬직하고 신뢰감을 주는 타입으로, 주변을 포용하는 능력이 뛰어납니다. 꾸준함과 성실함으로 목표를 달성하는 끈기가 돋보이는 든든한 존재입니다.' },
    { ilju: '을해', element: '목(木)', desc: '부드러우면서도 외유내강의 기질이 있습니다. 타인과의 조화로운 관계를 중시하며 예술적인 감각이나 섬세한 표현력이 뛰어난 매력적인 타입입니다.' }
  ];

  useEffect(() => {
    if (!router.isReady) return;
    const savedName = localStorage.getItem('currentGroupName') || '우리 모임';
    setGroupName(savedName);

    const savedMembers = JSON.parse(localStorage.getItem('groupMembers') || '[]');
    const enhanced = savedMembers.map((m, idx) => ({
      ...m,
      ...analysisPool[idx % analysisPool.length]
    }));

    if (enhanced.length === 0) {
      const leaderName = localStorage.getItem('currentUserName') || '방장';
      const initialLeader = [{ id: 0, name: leaderName, emoji: '👦', ...analysisPool[0] }];
      localStorage.setItem('groupMembers', JSON.stringify(initialLeader));
      setMembers(initialLeader);
    } else {
      setMembers(enhanced);
    }
  }, [router.isReady]);

  // 관계 및 점수 산출 로직 [cite: 2026-02-17]
  const getRelation = (idx1, idx2) => {
    const diff = Math.abs(idx1 - idx2);
    const types = Object.values(relTypes);
    return types[diff % types.length];
  };

  const calculateTotalScore = () => {
    if (members.length < 2) return 100;
    let total = 0, count = 0;
    for (let i = 0; i < members.length; i++) {
      for (let j = i + 1; j < members.length; j++) {
        total += getRelation(i, j).score;
        count++;
      }
    }
    return Math.floor(total / count);
  };

  const dynamicScore = calculateTotalScore();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
    setIsShareOpen(false);
  };

  const getCoordinates = (index, total) => {
    if (total === 1) return { x: 0, y: 0 };
    const radius = total > 5 ? 125 : 105;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>{groupName} | 우리 사이</title></Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 flex items-center justify-between border-b border-slate-50">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold flex items-center gap-1">
            <span className="text-lg">‹</span> 우리 사이
          </button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mt-8 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              {groupName} <span className="text-slate-200 text-lg">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{members.length}명 참여 중</p>
          </div>

          {/* --- 1. 수정사항: 모바일 버튼 레이아웃 최적화 --- */}
          <div className="w-full px-6 mb-10">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <button 
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="w-full h-full py-3.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <span>🔗</span> 공유하기
                </button>
                <AnimatePresence>
                  {isShareOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-14 left-0 w-[180px] bg-white rounded-2xl shadow-2xl border border-slate-50 z-[60] p-2">
                      <button onClick={handleCopyLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left font-bold text-slate-600 text-[13px]">📋 링크 복사</button>
                      <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left font-bold text-slate-600 text-[13px]">🔗 링크 공유</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button onClick={() => router.push('/join')} className="w-full py-3.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-1">
                <span>👤+</span> 나도 참여
              </button>
              {/* 가로 전체를 차지하도록 col-span-2 적용 */}
              <button onClick={() => { localStorage.clear(); router.push('/create-group'); }} className="col-span-2 py-3.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black hover:bg-[#ebe5ff] transition-all flex items-center justify-center gap-1">
                + 새 모임 만들기
              </button>
            </div>
          </div>

          <div className="w-full flex border-b border-slate-50 mb-10"><div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">궁합</div></div>

          {/* 궁합 지수 게이지 */}
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

          {/* 다각형 네트워크 맵 */}
          <div className="w-full px-8 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[320px] flex justify-center items-center">
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                {members.length > 1 && members.map((m, i) => 
                  members.slice(i + 1).map((m2, j) => {
                    const from = getCoordinates(i, members.length);
                    const to = getCoordinates(members.indexOf(m2), members.length);
                    const rel = getRelation(i, members.indexOf(m2));
                    const isSelected = selectedMemberId === m.id || selectedMemberId === m2.id;
                    return (
                      <React.Fragment key={`${i}-${j}`}>
                        <line x1={`calc(50% + ${from.x}px)`} y1={`calc(50% + ${from.y}px)`} x2={`calc(50% + ${to.x}px)`} y2={`calc(50% + ${to.y}px)`} stroke={isSelected ? rel.color : "#f1f5f9"} strokeWidth={isSelected ? 4 : 2} opacity={isSelected ? 1 : 0.3} className="transition-all duration-300" />
                        {isSelected && (
                          <foreignObject x={`calc(50% + ${(from.x + to.x) / 2 - 30}px)`} y={`calc(50% + ${(from.y + to.y) / 2 - 12}px)`} width="60" height="24">
                            <div className="flex items-center justify-center"><span style={{ backgroundColor: rel.color }} className="text-[9px] font-black text-white px-2 py-0.5 rounded-full shadow-md">{rel.label}</span></div>
                          </foreignObject>
                        )}
                      </React.Fragment>
                    );
                  })
                )}
              </svg>
              {members.map((m, i) => {
                const pos = getCoordinates(i, members.length);
                const isSelected = selectedMemberId === m.id;
                return (
                  <motion.div key={m.id} onClick={() => setSelectedMemberId(isSelected ? null : m.id)} style={{ x: pos.x, y: pos.y }} className={`absolute w-16 h-16 bg-white rounded-full shadow-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all z-20 ${isSelected ? 'border-[#6c5ce7] scale-110 shadow-purple-100' : 'border-purple-50'}`}>
                    <span className="text-3xl">{m.emoji}</span>
                    <span className="text-[10px] font-black text-slate-500 mt-1">{m.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 상세 분석 리포트 카드 */}
          <section className="w-full px-6 mt-16 space-y-6">
            {members.map((m) => (
              <div key={m.id} className={`bg-[#fcfcfd] rounded-[35px] p-8 border shadow-sm transition-all duration-500 ${selectedMemberId === m.id ? 'border-[#6c5ce7] ring-4 ring-purple-50' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-50">{m.emoji}</div>
                  <div><p className="text-[17px] font-black text-slate-800">{m.name}</p><p className="text-[12px] text-slate-400 font-bold uppercase pt-1">{m.ilju} - <span className="text-[#6c5ce7]">{m.element}의 기운</span></p></div>
                </div>
                <p className="text-[15px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
              </div>
            ))}

            {/* --- 일주 아코디언 가이드 (내용 유지) --- */}
            <div className="pt-20 space-y-6 mb-20">
              <h2 className="text-[18px] font-black text-slate-800 px-2"><span className="text-[#6c5ce7]">🔮</span> 일주로 보는 궁합이란?</h2>
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

        {/* --- 하단 표준 푸터 (5종 링크) 완벽 구현 --- */}
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
