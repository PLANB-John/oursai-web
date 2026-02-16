import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedMemberId, setSelectedMemberId] = useState(null); // 클릭된 멤버 ID
  
  // 1. 멤버 데이터 관리 (초기 멤버 + 참여 로직 시뮬레이션) [cite: 2026-02-16]
  const [members, setMembers] = useState([
    { id: 0, name: '동기A', emoji: '🐔', ilju: '신유', element: '금(金)', desc: '꼼꼼한 전략가 기질이 강해 상황 파악이 빠릅니다.', color: '#3b82f6' },
  ]);

  // 참여 정보 수신 및 다인원 레이아웃 테스트용 더미 추가 [cite: 2026-02-16]
  useEffect(() => {
    if (router.isReady && router.query.joined === 'true' && members.length === 1) {
      setMembers([
        { id: 0, name: '동기A', emoji: '🐔', ilju: '신유', element: '금(金)', desc: '꼼꼼한 전략가 기질이 강해 상황 파악이 빠릅니다.', color: '#3b82f6' },
        { id: 1, name: '동기B', emoji: '🐵', ilju: '경신', element: '금(金)', desc: '날카로운 지혜가 돋보이며 결단력이 뛰어납니다.', color: '#ef4444' },
        { id: 2, name: '동기C', emoji: '🐹', ilju: '병인', element: '화(火)', desc: '다정하고 인정이 섬세해 분위기를 잘 파악합니다.', color: '#f59e0b' }
      ]);
    }
  }, [router.isReady, router.query]);

  const hasJoined = members.length >= 2;

  // 2. 다각형 좌표 계산 로직 (최대 12명)
  const getCoordinates = (index, total) => {
    const radius = total > 4 ? 110 : 90; // 인원이 많아지면 반지름 확대
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // 상단부터 배치
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>대학동기들 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold flex items-center gap-1">
            <span className="text-lg">‹</span> 우리 사이
          </button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mt-4 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              대학 동기들 <span className="text-slate-200 text-lg">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{members.length}명 참여 중</p>
          </div>

          {/* 상단 버튼 그룹 */}
          <div className="flex gap-2 mb-10 px-6">
            <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-5 py-2.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center gap-1.5 active:scale-95 transition-all">
              <span>🔗</span> 공유하기
            </button>
            <button onClick={() => router.push('/join')} className="px-5 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black hover:bg-slate-50 transition-all">👤+ 나도 참여</button>
            <button onClick={() => router.push('/create-group')} className="px-5 py-2.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black hover:bg-[#ebe5ff] transition-all">+ 새 모임 만들기</button>
          </div>

          <div className="w-full flex border-b border-slate-50 mb-10"><div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">궁합</div></div>

          {/* --- 3. 다인원 네트워크 다이어그램 섹션 --- */}
          <div className="w-full px-8 flex flex-col items-center">
            <div className="w-full mb-10">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[17px] font-black text-slate-800">궁합 지수 <span className="text-[#6c5ce7]">53</span></span>
                <span className="text-[11px] font-bold text-orange-400 bg-orange-50 px-3 py-1 rounded-full">우리는 여기!</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <motion.div initial={{ width: 0 }} animate={{ width: '53%' }} className="h-full bg-gradient-to-r from-yellow-400 to-[#6c5ce7]" />
              </div>
            </div>

            <div className="relative w-full aspect-square max-w-[320px] flex justify-center items-center">
              {/* 관계 선 SVG (수정_04.mp4 상호작용 반영) */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <defs>
                  <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {members.length > 1 && members.map((m, i) => 
                  members.slice(i + 1).map((m2, j) => {
                    const from = getCoordinates(i, members.length);
                    const to = getCoordinates(members.indexOf(m2), members.length);
                    const isSelected = selectedMemberId === m.id || selectedMemberId === m2.id;
                    return (
                      <motion.line 
                        key={`${i}-${j}`}
                        x1={`calc(50% + ${from.x}px)`} y1={`calc(50% + ${from.y}px)`}
                        x2={`calc(50% + ${to.x}px)`} y2={`calc(50% + ${to.y}px)`}
                        stroke={isSelected ? "#6c5ce7" : "#f1f5f9"}
                        strokeWidth={isSelected ? 4 : 2}
                        animate={{ opacity: isSelected ? 1 : 0.4 }}
                      />
                    );
                  })
                )}
              </svg>

              {/* 멤버 배치 */}
              {members.map((m, i) => {
                const pos = getCoordinates(i, members.length);
                const isSelected = selectedMemberId === m.id;
                return (
                  <motion.div
                    key={m.id}
                    onClick={() => setSelectedMemberId(isSelected ? null : m.id)}
                    style={{ x: pos.x, y: pos.y }}
                    className={`absolute w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all z-20 ${isSelected ? 'border-[#6c5ce7] scale-110' : 'border-purple-50'}`}
                  >
                    <span className="text-3xl sm:text-4xl">{m.emoji}</span>
                    <span className="text-[10px] sm:text-[11px] font-black text-slate-500 mt-0.5">{m.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* 범례 */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-12 py-6 border-t border-slate-50 w-full">
              {['천생연분', '척척학력', '그럭저럭', '삐걱삐걱', '폭발직전'].map((l, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-green-400' : i === 2 ? 'bg-yellow-400' : i === 3 ? 'bg-orange-400' : 'bg-red-500'}`} />
                  {l}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-300 font-bold mt-2">↑ 선을 클릭하면 궁합 관계를 확인할 수 있어요</p>
          </div>

          {/* --- 4. 오행 기운 분석 섹션 --- */}
          <section className="w-full px-6 mt-16 space-y-8">
            <div className="bg-[#fcfcfd] rounded-[35px] p-8 border border-slate-100 shadow-sm">
              <div className="grid grid-cols-5 gap-4 mb-8">
                {['🌳 목', '🔥 화', '⛰️ 토', '⚙️ 금', '💧 수'].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className={`text-xl opacity-40 ${i === 3 ? 'opacity-100 scale-110' : ''}`}>{item.split(' ')[0]}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, star) => (
                        <div key={star} className={`w-1 h-1 rounded-full ${star < (i === 3 ? 5 : i === 1 ? 3 : 1) ? 'bg-orange-400' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-400">{item.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-slate-500 leading-7 font-medium break-keep">
                금 기운이 <span className="text-[#6c5ce7] font-black">압도적</span>이라 판단이 빠르고 기운이 곧아서 결단 내리는 데 강해. 유연하게 방향 드는 건 익힐 수 있어. 브레인스토밍이랑 실행 시간을 따로 잡아보자.
              </p>
            </div>

            {/* 멤버 리포트 카드 */}
            {members.map((m) => (
              <div key={m.id} className={`bg-white rounded-[35px] p-8 border shadow-sm transition-all ${selectedMemberId === m.id ? 'border-[#6c5ce7] ring-4 ring-purple-50' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100">{m.emoji}</div>
                  <div>
                    <p className="text-[17px] font-black text-slate-800">{m.name}</p>
                    <p className="text-[12px] text-slate-400 font-bold uppercase">{m.ilju} - <span className="text-[#6c5ce7]">{m.element}의 기운</span></p>
                  </div>
                </div>
                <p className="text-[14px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
              </div>
            ))}
          </section>

          {/* --- 5. 가이드 아코디언 (4개 유지) --- */}
          <section className="w-full px-6 pt-20 space-y-6 mb-20">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2 px-2">
              <span className="text-[#6c5ce7]">🔮</span> 일주로 보는 궁합이란?
            </h2>
            <div className="space-y-3">
              {[
                { q: "일주가 뭐예요?", a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요." },
                { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 해, 일주는 태어난 날 기준입니다. 띠가 사회적인 겉모습이라면 일주는 본질적인 성향을 나타냅니다." },
                { q: "왜 일주로 궁합을 봐요?", a: "일주는 개인의 기질을 가장 정확하게 담고 있어, 관계의 화학 반응을 깊이 있게 분석할 수 있습니다. [cite: 2026-02-16]" },
                { q: "이음에서 알 수 있는 것", a: "멤버 간의 1:1 케미 등급과 전체 모임의 조화도를 시각적인 네트워크로 확인할 수 있습니다. [cite: 2026-02-16]" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left">
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openAccordion === idx && <div className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">{item.a}</div>}
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* --- 6. 표준 푸터 (5종 링크) --- */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/intro">서비스 소개</a><span>|</span><a href="/faq">자주 묻는 질문</a><span>|</span><a href="/feedback">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-8">
            <a href="/terms">이용약관</a><span>|</span><a href="/privacy">개인정보처리방침</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>

        {/* 하단 고정 플로팅 바 */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-50">
          <div className="bg-white/80 backdrop-blur-md border border-slate-100/50 p-4 rounded-[32px] shadow-2xl flex items-center justify-between">
            <p className="text-[13px] font-bold text-slate-600 ml-2">✨ 1명과의 궁합이 궁금하다면?</p>
            <button onClick={() => router.push('/join')} className="bg-[#6c5ce7] text-white px-6 py-3 rounded-2xl font-black text-[14px] shadow-lg active:scale-95 transition-all">나도 참여하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
