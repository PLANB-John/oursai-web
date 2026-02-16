import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false); // 1. 공유 메뉴 상태

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>대학동기들 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold flex items-center gap-1">
            <span className="text-lg">‹</span> 우리 사이
          </button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mt-4 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              대학동기들 <span className="text-slate-200 text-lg">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">1명 참여 중</p>
          </div>

          {/* --- 수정사항 1 & 3: 공유하기 팝오버 및 이동 버튼 --- */}
          <div className="flex gap-2 mb-10 px-6 relative">
            <div className="relative">
              <button 
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="px-5 py-2.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center gap-1.5 active:scale-95 transition-all"
              >
                <span className="text-[14px]">🔗</span> 공유하기
              </button>
              
              {/* 공유하기 상세 메뉴 (group.js_01 참고) */}
              <AnimatePresence>
                {isShareOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-12 left-0 w-[180px] bg-white rounded-2xl shadow-2xl border border-slate-50 z-[60] overflow-hidden p-2"
                  >
                    <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                      <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">📋</div>
                      <span className="text-[13px] font-bold text-slate-600">링크 복사</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-400">🔗</div>
                      <span className="text-[13px] font-bold text-slate-600">링크 공유</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => router.push('/join')} className="px-5 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black hover:bg-slate-50 transition-all flex items-center gap-1">
              <span>👤+</span> 나도 참여
            </button>
            
            {/* 수정사항 3: 새 모임 만들기 버튼 연결 */}
            <button onClick={() => router.push('/create-group')} className="px-5 py-2.5 bg-[#f3f0ff] text-[#6c5ce7] border border-transparent rounded-xl text-[13px] font-black hover:bg-[#ebe5ff] transition-all">
              + 새 모임 만들기
            </button>
          </div>

          {/* --- 수정사항 4: 오늘의 일진 삭제, 궁합 탭 유지 --- */}
          <div className="w-full flex border-b border-slate-50 mb-8">
            <div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">
              궁합
            </div>
          </div>

          {/* 캐릭터 섹션 */}
          <div className="relative w-full h-[280px] flex justify-center items-center">
            <div className="absolute w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-24 h-24 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center text-5xl border border-white">🐵</div>
              <span className="bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-50 text-[13px] font-black text-slate-700">김기리</span>
            </motion.div>
          </div>

          {/* 상세 분석 카드 */}
          <section className="w-full px-6 mt-4">
            <div className="bg-[#fcfcfd] rounded-[35px] p-8 border border-slate-100/80 shadow-sm mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🐵</div>
                <div>
                  <p className="text-[17px] font-black text-slate-800">김기리</p>
                  <p className="text-[12px] text-slate-400 font-bold uppercase pt-1">경신 - <span className="text-[#9b59b6]">금(金)의 기운</span></p>
                </div>
              </div>
              <p className="text-[14px] text-slate-500 leading-8 font-medium break-keep">
                날카로운 지혜가 돋보이며 상황 판단이 빠르고 결단력이 뛰어나 다양한 문제를 해결하는 데 능숙해. 새로운 아이디어로 주변을 놀라게 하는 창의적인 면모와 유연함도 갖춘 매력적인 타입이야.
              </p>
            </div>

            {/* 링크 공유 섹션 (group.js_03 참고) */}
            <div className="text-center space-y-4 mb-10">
              <p className="text-[13px] font-bold text-slate-300">링크를 공유해서 친구를 초대하세요</p>
              <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-8 py-3 bg-[#6c5ce7] text-white rounded-full text-[14px] font-black shadow-lg shadow-purple-100 flex items-center gap-2 mx-auto active:scale-95 transition-all">
                <span>🔗</span> 공유하기
              </button>
            </div>
          </section>
        </main>

        {/* --- 수정사항 5: 하단 부분 (group.js_03 참고) --- */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/guide" className="hover:text-purple-400">사주 가이드</a>
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

        {/* --- 수정사항 5: 하단 고정 플로팅 바 (group.js_03 참고) --- */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-50">
          <div className="bg-white/80 backdrop-blur-md border border-slate-100/50 p-4 rounded-[32px] shadow-2xl flex items-center justify-between">
            <p className="text-[13px] font-bold text-slate-600 flex items-center gap-1 ml-2">
              <span className="text-orange-400">✨</span> 1명과의 궁합이 궁금하다면?
            </p>
            <button onClick={() => router.push('/join')} className="bg-[#6c5ce7] text-white px-6 py-3 rounded-2xl font-black text-[14px] shadow-lg shadow-purple-100 active:scale-95 transition-all flex items-center gap-2">
              <span>👤+</span> 나도 참여하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
