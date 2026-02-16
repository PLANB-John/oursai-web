import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('궁합');

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>대학동기들 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-32">
        
        {/* --- 1. 상단 헤더 --- */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[13px] text-slate-400 font-bold flex items-center gap-1">
            ← 우리 사이
          </button>
          <div className="text-slate-300 cursor-pointer">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center pt-8">
          <div className="text-center space-y-1 mb-8">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              대학동기들 <span className="text-slate-200 text-[18px]">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold">1명 참여 중</p>
          </div>

          <div className="flex gap-2 mb-12 px-6">
            <button className="px-6 py-2.5 bg-[#9b59b6] text-white rounded-full text-[13px] font-black shadow-lg shadow-purple-100 flex items-center gap-1.5 active:scale-95 transition-all">
              <span>🔗</span> 공유하기
            </button>
            <button className="px-6 py-2.5 bg-white text-slate-400 border border-slate-100 rounded-full text-[13px] font-black hover:bg-slate-50 transition-all">
              내 사주 보기
            </button>
            <button onClick={() => router.push('/create-group')} className="px-6 py-2.5 bg-white text-slate-400 border border-slate-100 rounded-full text-[13px] font-black hover:bg-slate-50 transition-all">
              새로 만들기
            </button>
          </div>

          <div className="w-full flex border-b border-slate-50 mb-10 px-2">
            <button 
              onClick={() => setActiveTab('궁합')}
              className={`flex-1 text-center pb-4 text-[15px] font-black transition-all ${activeTab === '궁합' ? 'border-b-2 border-slate-800 text-slate-800' : 'text-slate-300'}`}
            >
              궁합
            </button>
            <button 
              onClick={() => setActiveTab('일진')}
              className={`flex-1 text-center pb-4 text-[15px] font-black transition-all flex justify-center items-center gap-1 ${activeTab === '일진' ? 'border-b-2 border-slate-800 text-slate-800' : 'text-slate-300'}`}
            >
              오늘의 일진 <span className="text-[9px] bg-purple-50 text-purple-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">BETA</span>
            </button>
          </div>

          {/* --- 2. 캐릭터 애니메이션 (글로우 효과 추가) --- */}
          <div className="relative w-full h-[300px] flex justify-center items-center">
            {/* 배경 글로우 - 레퍼런스의 몽글몽글한 느낌 재현 */}
            <div className="absolute w-40 h-40 bg-purple-100 rounded-full blur-[60px] opacity-40"></div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 relative z-10"
            >
              <div className="w-24 h-24 bg-white rounded-[32px] shadow-2xl flex items-center justify-center text-5xl border border-slate-50">
                🐵
              </div>
              <span className="bg-white px-4 py-1.5 rounded-full shadow-md border border-slate-50 text-[13px] font-black text-slate-700">
                김기리
              </span>
            </motion.div>
          </div>

          {/* --- 3. 멤버 상세 분석 카드 --- */}
          <section className="w-full px-6 mt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50/50 rounded-[40px] p-8 border border-slate-100/50 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🐵</div>
                <div>
                  <p className="text-[16px] font-black text-slate-800 leading-tight">김기리</p>
                  <p className="text-[12px] text-slate-400 font-bold uppercase tracking-tighter pt-0.5">
                    경신 - <span className="text-[#9b59b6]">금(金)의 기운</span>
                  </p>
                </div>
              </div>
              <p className="text-[14px] text-slate-500 leading-8 font-medium break-keep">
                날카로운 지혜가 돋보이며 상황 판단이 빠르고 결단력이 뛰어나 다양한 문제를 해결하는 데 능숙해. 새로운 아이디어로 주변을 놀라게 하는 창의적인 면모와 유연함도 갖춘 매력적인 타입이야.
              </p>
            </motion.div>
          </section>

          <div className="mt-12 text-center space-y-3">
            <p className="text-[13px] font-bold text-slate-300">링크를 공유해서 친구를 초대하세요</p>
            <button className="text-[14px] font-black text-[#9b59b6] flex items-center justify-center gap-1 mx-auto bg-purple-50 px-4 py-2 rounded-full">
              <span>🔗</span> 공유하기
            </button>
          </div>
        </main>

        {/* --- 4. 하단 플로팅 버튼 --- */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-50">
          <button className="w-full py-6 bg-white border-2 border-[#9b59b6] text-[#9b59b6] rounded-[28px] font-black text-[18px] shadow-2xl flex items-center justify-center gap-2 hover:bg-purple-50 active:scale-95 transition-all">
            <span>✨</span> 나도 참여하기
          </button>
        </div>

        {/* --- 5. 최종 푸터 (이용약관 및 방침 필수 포함) --- */}
        <footer className="px-8 py-20 bg-white text-center space-y-10 border-t border-slate-50 mt-20">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
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
