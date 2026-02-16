import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  
  // 1. 초기 상태: 로컬 저장소에서 멤버를 불러옴 [cite: 2026-02-16]
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // 최초 로드 시 방장 데이터가 없으면 생성
    const saved = JSON.parse(localStorage.getItem('groupMembers') || '[]');
    if (saved.length === 0) {
      const leader = { id: 0, name: '방장', emoji: '🐔', ilju: '신유', element: '금(金)', desc: '모임을 처음 생성한 방장님입니다.', color: '#3b82f6' };
      localStorage.setItem('groupMembers', JSON.stringify([leader]));
      setMembers([leader]);
    } else {
      setMembers(saved);
    }
  }, [router.isReady]);

  // 2. 다각형 좌표 계산 (최대 12명 대응)
  const getCoordinates = (index, total) => {
    if (total === 1) return { x: 0, y: 0 };
    if (total === 2) return { x: 0, y: index === 0 ? -80 : 80 };
    const radius = total > 5 ? 120 : 100;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>우리 사이 (oursai.kr)</title></Head>
      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold">‹ 우리 사이</button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mt-4 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight">대학 동기들 ⚙️</h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{members.length}명 참여 중</p>
          </div>

          <div className="flex gap-2 mb-10 px-6">
            <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-5 py-2.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg">🔗 공유하기</button>
            <button onClick={() => router.push('/join')} className="px-5 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black">👤+ 나도 참여</button>
            <button onClick={() => { localStorage.removeItem('groupMembers'); router.push('/create-group'); }} className="px-5 py-2.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black">+ 새 모임 만들기</button>
          </div>

          {/* 네트워크 맵 */}
          <div className="w-full px-8 flex flex-col items-center">
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-12 shadow-inner">
              <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(members.length * 15, 100)}%` }} className="h-full bg-gradient-to-r from-yellow-400 to-[#6c5ce7]" />
            </div>

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

          {/* 오행 분석 및 리포트 */}
          <section className="w-full px-6 mt-16 space-y-6">
            <div className="bg-[#fcfcfd] rounded-[35px] p-8 border border-slate-100 shadow-sm">
              <p className="text-[14px] text-slate-500 leading-7 font-medium">참여자가 늘어날수록 모임의 오행 에너지가 더욱 정밀하게 분석됩니다.</p>
            </div>

            {members.map((m) => (
              <div key={m.id} className={`bg-white rounded-[35px] p-8 border shadow-sm ${selectedMemberId === m.id ? 'border-[#6c5ce7]' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100">{m.emoji}</div>
                  <div><p className="text-[17px] font-black text-slate-800">{m.name}</p> <p className="text-[12px] text-slate-400 font-bold">{m.ilju} - {m.element}</p></div>
                </div>
                <p className="text-[14px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
              </div>
            ))}

            {/* 하단 아코디언 가이드 4종 */}
            <div className="pt-20 space-y-6 mb-20">
              <h2 className="text-[18px] font-black text-slate-800 px-2">🔮 일주로 보는 궁합이란?</h2>
              {[ { q: "일주가 뭐예요?", a: "일주는 태어난 날의 기운입니다." }, { q: "띠랑 뭐가 달라요?", a: "띠는 해, 일주는 날 기준입니다." }, { q: "왜 일주로 궁합을 봐요?", a: "본질적인 성향을 나타내기 때문입니다." }, { q: "우리 사이에서 알 수 있는 것", a: "멤버 간의 1:1 케미 등급과 관계 네트워크를 볼 수 있습니다." } ].map((item, idx) => (
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

        {/* 5종 푸터 링크 */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/intro">서비스 소개</a><span>|</span><a href="/faq">자주 묻는 질문</a><span>|</span><a href="/feedback">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-8">
            <a href="/terms">이용약관</a><span>|</span><a href="/privacy">개인정보처리방침</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr</p>
        </footer>
      </div>
    </div>
  );
}
