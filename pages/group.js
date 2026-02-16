import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  
  // 참여자 데이터 상태 [cite: 2026-02-16]
  const [members, setMembers] = useState([
    { id: 'leader', name: '김기수', emoji: '🐔', ilju: '신유', element: '금(金)의 기운', desc: '꼼꼼한 전략가 기질이 강해! 상황을 빠르게 파악해.' }
  ]);

  // URL 파라미터가 있으면 새 멤버 추가 [cite: 2026-02-16]
  useEffect(() => {
    if (router.query.joined === 'true' && members.length === 1) {
      setMembers([...members, {
        id: 'new',
        name: router.query.newUserName || '참여자',
        emoji: '🐹',
        ilju: '병인',
        element: '화(火)의 기운',
        desc: '다정하고 인정이 섬세한 면이 있어 서로의 분위기를 잘 파악해.'
      }]);
    }
  }, [router.query]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>대학동기들 | 우리 사이</title></Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative sm:rounded-[40px] pb-40">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold">‹ 우리 사이</button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mt-4 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">대학동기들 ⚙️</h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{members.length}명 참여 중</p>
          </div>

          {/* 버튼 그룹 */}
          <div className="flex gap-2 mb-10 px-6 relative">
            <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-5 py-2.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center gap-1.5 active:scale-95 transition-all">
              <span>🔗</span> 공유하기
            </button>
            <button onClick={() => router.push('/create-group')} className="px-5 py-2.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black hover:bg-[#ebe5ff] transition-all">+ 새 모임 만들기</button>
          </div>

          <div className="w-full flex border-b border-slate-50 mb-10"><div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">궁합</div></div>

          {/* --- 궁합 지수 및 연결망 (2인 이상일 때 노출) --- */}
          {members.length >= 2 ? (
            <div className="w-full px-8 flex flex-col items-center">
              <div className="w-full mb-14">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[17px] font-black text-slate-800">궁합 지수 <span className="text-[#6c5ce7]">59</span></span>
                  <span className="text-[11px] font-bold text-orange-400 bg-orange-50 px-3 py-1 rounded-full">우리는 여기!</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '59%' }} className="h-full bg-gradient-to-r from-yellow-400 to-[#6c5ce7]" />
                </div>
              </div>

              <div className="relative flex flex-col items-center gap-16 py-4">
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl border-2 border-blue-50">{members[0].emoji}</div>
                  <span className="text-[13px] font-black text-slate-600">{members[0].name}</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-[140%] bg-yellow-400 flex items-center justify-center">
                  <div className="bg-yellow-400 text-white text-[11px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">그럭저럭</div>
                </div>
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl border-2 border-purple-50">{members[1].emoji}</div>
                  <span className="text-[13px] font-black text-slate-600">{members[1].name}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[280px] flex justify-center items-center">
              <div className="absolute w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-24 h-24 bg-white rounded-[32px] shadow-xl flex items-center justify-center text-5xl border border-white">🐔</div>
                <span className="bg-white px-4 py-1.5 rounded-full shadow-sm text-[13px] font-black text-slate-700">김기수</span>
              </motion.div>
            </div>
          )}

          {/* 상세 리포트 카드 */}
          <section className="w-full px-6 mt-16 space-y-6">
            {members.map((m, idx) => (
              <div key={idx} className="bg-[#fcfcfd] rounded-[35px] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-50">{m.emoji}</div>
                  <div>
                    <p className="text-[17px] font-black text-slate-800">{m.name}</p>
                    <p className="text-[12px] text-slate-400 font-bold uppercase pt-1">{m.ilju} - <span className="text-[#6c5ce7]">{m.element}</span></p>
                  </div>
                </div>
                <p className="text-[15px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
              </div>
            ))}
          </section>

          {/* 가이드 아코디언 (복구 완료) */}
          <section className="w-full px-6 pt-20 space-y-6 mb-20">
            <h2 className="text-[18px] font-black text-slate-800 px-2">🔮 일주로 보는 궁합이란?</h2>
            <div className="space-y-3">
              {[ { q: "일주가 뭐예요?", a: "일주는 태어난 '날'의 기운입니다." }, { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 해, 일주는 태어난 날 기준입니다." } ].map((item, idx) => (
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

        {/* 푸터 및 플로팅 바 (고정) */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/guide">사주 가이드</a><span>|</span><a href="/faq">자주 묻는 질문</a><span>|</span><a href="/feedback">의견 보내기</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>

        {!hasJoined && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-50">
            <div className="bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-[32px] shadow-2xl flex items-center justify-between">
              <p className="text-[13px] font-bold text-slate-600 ml-2">✨ 1명과의 궁합이 궁금하다면?</p>
              <button onClick={() => router.push('/join')} className="bg-[#6c5ce7] text-white px-6 py-3 rounded-2xl font-black text-[14px] shadow-lg active:scale-95 transition-all">나도 참여하기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
