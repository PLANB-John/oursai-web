import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>대학동기들 | 우리 사이</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* 상단 헤더 */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[13px] text-slate-400 font-bold">← 우리 사이</button>
          <div className="text-slate-300">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center pt-8">
          <div className="text-center space-y-1 mb-8">
            <h1 className="text-[28px] font-black text-slate-800 flex items-center justify-center gap-1">
              대학동기들 <span className="text-slate-200">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold">1명 참여 중</p>
          </div>

          <div className="flex gap-2 mb-12">
            <button className="px-6 py-2.5 bg-[#9b59b6] text-white rounded-full text-[13px] font-black shadow-lg flex items-center gap-1.5">🔗 공유하기</button>
            <button className="px-6 py-2.5 bg-white text-slate-400 border border-slate-100 rounded-full text-[13px] font-black">내 사주 보기</button>
          </div>

          {/* 탭 메뉴 */}
          <div className="w-full flex border-b border-slate-50 mb-10">
            <div className="flex-1 text-center pb-4 border-b-2 border-slate-800 text-[15px] font-black">궁합</div>
            <div className="flex-1 text-center pb-4 text-slate-300 text-[15px] font-bold text-center">오늘의 일진 <span className="text-[10px] bg-purple-50 text-purple-400 px-1.5 py-0.5 rounded ml-1">BETA</span></div>
          </div>

          {/* 캐릭터 애니메이션 */}
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-white rounded-[32px] shadow-2xl flex items-center justify-center text-5xl border border-slate-50">🐵</div>
              <span className="bg-white px-4 py-1.5 rounded-full shadow-md text-[13px] font-black text-slate-700">김기리</span>
            </motion.div>
          </div>

          {/* 상세 설명 카드 */}
          <section className="w-full px-6 mt-6">
            <div className="bg-slate-50/50 rounded-[40px] p-8 border border-slate-100/50">
              <p className="text-[14px] text-slate-500 leading-7 font-medium">
                날카로운 지혜가 돋보이며 상황 판단이 빠르고 결단력이 뛰어나 다양한 문제를 해결하는 데 능숙해. 새로운 아이디어로 주변을 놀라게 하는 창의적인 면모와 유연함도 갖춘 매력적인 타입이야.
              </p>
            </div>
          </section>
        </main>

        {/* 하단 플로팅 버튼 */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6">
          <button className="w-full py-6 bg-white border-2 border-purple-500 text-purple-500 rounded-[28px] font-black text-[18px] shadow-xl flex items-center justify-center gap-2">
            <span>✨</span> 나도 참여하기
          </button>
        </div>
      </div>
    </div>
  );
}
