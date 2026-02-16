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
  const [groupName, setGroupName] = useState(''); // 1. 동적 모임 이름 상태 [cite: 2026-02-17]

  // 데이터 로드 로직: 저장소에서 입력된 정보를 불러옴 [cite: 2026-02-16, 2026-02-17]
  useEffect(() => {
    if (!router.isReady) return;

    // 수정사항 1: localStorage에서 모임 이름 로드 (없으면 '우리 모임') [cite: 2026-02-17]
    const savedGroupName = localStorage.getItem('currentGroupName') || '우리 모임';
    setGroupName(savedGroupName);

    const savedMembers = JSON.parse(localStorage.getItem('groupMembers') || '[]');
    
    // 수정사항 2: 데이터가 없으면 입력한 방장 이름으로 초기화 [cite: 2026-02-17]
    if (savedMembers.length === 0) {
      const savedLeaderName = localStorage.getItem('currentUserName') || '방장'; 
      const initialLeader = [{ 
        id: 0, 
        name: savedLeaderName, 
        emoji: '🐔', 
        ilju: '신유', 
        element: '금(金)', 
        desc: '모임의 중심을 잡아주는 리더입니다. 상황 판단이 빠르고 결단력이 뛰어납니다.', 
        color: '#3b82f6' 
      }];
      localStorage.setItem('groupMembers', JSON.stringify(initialLeader));
      setMembers(initialLeader);
    } else {
      setMembers(savedMembers);
    }
  }, [router.isReady]);

  // 에러 방지용 변수 정의
  const hasJoined = members.length >= 2;

  // 다각형 좌표 계산 로직 (최대 12명 대응)
  const getCoordinates = (index, total) => {
    if (total === 1) return { x: 0, y: 0 };
    if (total === 2) return { x: 0, y: index === 0 ? -90 : 90 };
    const radius = total > 5 ? 120 : 100;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
  };

  // 공유 기능 (링크 복사 / 공유)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
    setIsShareOpen(false);
  };

  const handleShareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: '우리 사이', url: window.location.href });
      } catch (err) { console.log('공유 취소'); }
    } else { handleCopyLink(); }
    setIsShareOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>{groupName} | 우리 사이 (oursai.kr)</title></Head>

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
            {/* 수정사항 1: 연동된 모임 이름 표시 [cite: 2026-02-17] */}
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              {groupName} <span className="text-slate-200 text-lg">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{members.length}명 참여 중</p>
          </div>

          {/* 주요 버튼 그룹 */}
          <div className="flex gap-2 mb-10 px-6 relative">
            <div className="relative">
              <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-5 py-2.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center gap-1.5 active:scale-95 transition-all">
                <span>🔗</span> 공유하기
              </button>
              <AnimatePresence>
                {isShareOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-12 left-0 w-[180px] bg-white rounded-2xl shadow-2xl border border-slate-50 z-[60] p-2">
                    <button onClick={handleCopyLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left font-bold text-slate-600 text-[13px]">
                      📋 링크 복사
                    </button>
                    <button onClick={handleShareLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left font-bold text-slate-600 text-[13px]">
                      🔗 링크 공유
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => router.push('/join')} className="px-5 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black hover:bg-slate-50 transition-all">👤+ 나도 참여</button>
            <button onClick={() => { localStorage.clear(); router.push('/create-group'); }} className="px-5 py-2.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black hover:bg-[#ebe5ff] transition-all">+ 새 모임 만들기</button>
          </div>

          <div className="w-full flex border-b border-slate-50 mb-10">
            <div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">궁합</div>
          </div>

          {/* 다인원 네트워크 맵 */}
          <div className="w-full px-8 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[320px] flex justify-center items-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {members.length > 1 && members.map((m, i) => 
                  members.slice(i + 1).map((m2, j) => {
                    const from = getCoordinates(i, members.length);
                    const to = getCoordinates(members.indexOf(m2), members.length);
                    const isSelected = selectedMemberId === m.id || selectedMemberId === m2.id;
                    return (
                      <line key={`${i}-${j}`} x1={`calc(50% + ${from.x}px)`} y1={`calc(50% + ${from.y}px)`} x2={`calc(50% + ${to.x}px)`} y2={`calc(50% + ${to.y}px)`} stroke={isSelected ? "#6c5ce7" : "#f1f5f9"} strokeWidth={isSelected ? 4 : 2} opacity={isSelected ? 1 : 0.4} />
                    );
                  })
                )}
              </svg>

              {members.map((m, i) => {
                const pos = getCoordinates(i, members.length);
                const isSelected = selectedMemberId === m.id;
                return (
                  <motion.div key={m.id} onClick={() => setSelectedMemberId(isSelected ? null : m.id)} style={{ x: pos.x, y: pos.y }} className={`absolute w-16 h-16 bg-white rounded-full shadow-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all z-20 ${isSelected ? 'border-[#6c5ce7] scale-110' : 'border-purple-50'}`}>
                    <span className="text-3xl">{m.emoji}</span>
                    <span className="text-[10px] font-black text-slate-500">{m.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 상세 리포트 카드 (방장 이름 연동 확인) */}
          <section className="w-full px-6 mt-16 space-y-6">
            {members.map((m) => (
              <div key={m.id} className={`bg-[#fcfcfd] rounded-[35px] p-8 border shadow-sm ${selectedMemberId === m.id ? 'border-[#6c5ce7]' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-50">{m.emoji}</div>
                  <div>
                    <p className="text-[17px] font-black text-slate-800">{m.name}</p>
                    <p className="text-[12px] text-slate-400 font-bold uppercase pt-1">{m.ilju} - <span className="text-[#6c5ce7]">{m.element}의 기운</span></p>
                  </div>
                </div>
                <p className="text-[14px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
              </div>
            ))}

            {/* --- 수정사항 3: 일주 아코디언 가이드 (상세 내용 강화) --- */}
            <div className="pt-20 space-y-6">
              <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2 px-2">
                <span className="text-[#6c5ce7]">🔮</span> 일주로 보는 궁합이란?
              </h2>
              {[
                { 
                  q: "일주가 뭐예요?", 
                  a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요. 사주명리학에서 일주는 '나 자신'을 가장 잘 표현하는 부분으로, 성격, 기질, 내면의 스타일을 담고 있어요." 
                },
                { 
                  q: "띠랑 뭐가 달라요?", 
                  a: "띠는 태어난 해(년)를 기준으로 하지만, 일주는 태어난 날을 기준으로 합니다. 띠가 사회적인 겉모습이라면, 일주는 나 자신의 본질적인 기운과 속마음을 보기에 더 적합합니다." 
                },
                { 
                  q: "왜 일주로 궁합을 봐요?", 
                  a: "일주는 개인의 기질과 내면 에너지를 가장 정확하게 담고 있어, 서로 다른 두 사람이 만났을 때 생기는 화학 반응을 깊이 있게 분석할 수 있습니다. [cite: 2026-02-16]" 
                },
                { 
                  q: "우리 사이에서 알 수 있는 것", 
                  a: "멤버 간의 1:1 케미 등급과 관계의 특징, 그리고 전체 모임의 조화도를 시각적인 네트워크 그래프로 확인할 수 있습니다. [cite: 2026-02-16]" 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left">
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* --- 수정사항 4: 하단 표준 푸터 (5종 링크 완벽 복구) --- */}
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
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
