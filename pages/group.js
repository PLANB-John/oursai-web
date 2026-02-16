import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('궁합');

  // 레퍼런스 데이터 구조 재현
  const groupInfo = {
    name: "대학동기들",
    count: 1,
    leader: {
      name: "김기리",
      emoji: "🐵",
      ilju: "경신",
      element: "금(金)의 기운",
      desc: "날카로운 지혜가 돋보이며 상황 판단이 빠르고 결단력이 뛰어나 다양한 문제를 해결하는 데 능숙해. 새로운 아이디어로 주변을 놀라게 하는 창의적인 면모와 유연함도 갖춘 매력적인 타입이야."
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>{groupInfo.name} | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        {/* --- 1. 상단 네비게이션 (레퍼런스 위치/폰트 완벽 재현) --- */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold flex items-center gap-1">
            <span className="text-lg">‹</span> 우리 사이
          </button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          {/* 그룹 타이틀 섹션 */}
          <div className="text-center mt-4 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              {groupInfo.name} <span className="text-slate-200 text-lg">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{groupInfo.count}명 참여 중</p>
          </div>

          {/* 상단 액션 버튼 (레퍼런스 특유의 둥근 형태와 그림자) */}
          <div className="flex gap-2.5 mb-10 px-6">
            <button className="px-5 py-2.5 bg-[#9b59b6] text-white rounded-full text-[13px] font-black shadow-lg shadow-purple-100 flex items-center gap-1.5 active:scale-95 transition-all">
              <span className="text-[14px]">🔗</span> 공유하기
            </button>
            <button className="px-5 py-2.5 bg-white text-slate-400 border border-slate-100 rounded-full text-[13px] font-black hover:bg-slate-50 transition-all">
              내 사주 보기
            </button>
            <button onClick={() => router.push('/create-group')} className="px-5 py-2.5 bg-white text-slate-400 border border-slate-100 rounded-full text-[13px] font-black hover:bg-slate-50 transition-all">
              새로 만들기
            </button>
          </div>

          {/* 탭 메뉴 (BETA 배지 스타일 정밀 조정) */}
          <div className="w-full flex border-b border-slate-50 mb-8">
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
              오늘의 일진 <span className="text-[9px] bg-[#f3f0ff] text-[#9b59b6] px-1.5 py-0.5 rounded-[4px] font-bold tracking-tighter">BETA</span>
            </button>
          </div>

          {/* --- 2. 캐릭터 중앙 섹션 (그림자 및 부유 애니메이션 강화) --- */}
          <div className="relative w-full h-[280px] flex justify-center items-center">
            {/* 캐릭터 배경 글로우 효과 */}
            <div className="absolute w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
            
            <motion.div 
              animate={{ y: [0, -12, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 relative z-10"
            >
              <div className="w-24 h-24 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center text-5xl border border-white">
                {groupInfo.leader.emoji}
              </div>
              <span className="bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-50 text-[13px] font-black text-slate-700">
                {groupInfo.leader.name}
              </span>
            </motion.div>
          </div>

          {/* --- 3. 멤버 상세 분석 카드 (오행 텍스트 반영) --- */}
          <section className="w-full px-6 mt-4">
            <div className="bg-[#fcfcfd] rounded-[35px] p-8 border border-slate-100/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-50">
                  {groupInfo.leader.emoji}
                </div>
                <div>
                  <p className="text-[17px] font-black text-slate-800 leading-tight">{groupInfo.leader.name}</p>
                  <p className="text-[12px] text-slate-400 font-bold pt-1">
                    {groupInfo.leader.ilju} - <span className="text-[#9b59b6]">{groupInfo.leader.element}</span>
                  </p>
                </div>
              </div>
              <p className="text-[15px] text-slate-500 leading-8 font-medium break-keep">
                {groupInfo.leader.desc}
              </p>
            </div>

            {/* 링크 공유 유도 섹션 (레퍼런스 100% 반영) */}
            <div className="mt-12 mb-8 text-center space-y-4">
              <p className="text-[13px] font-bold text-slate-300 tracking-tight">링크를 공유해서 친구를 초대하세요</p>
              <button className="text-[14px] font-black text-[#9b59b6] flex items-center justify-center gap-1.5 mx-auto bg-[#f8f0ff] px-6 py-2.5 rounded-full hover:bg-[#f3e8ff] transition-colors">
                <span className="text-sm">🔗</span> 공유하기
              </button>
            </div>
          </section>
        </main>

        {/* --- 4. 하단 고정 플로팅 버튼 (스파클 아이콘 추가) --- */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-50">
          <button className="w-full py-5.5 bg-white border-2 border-[#9b59b6] text-[#9b59b6] rounded-[28px] font-black text-[18px] shadow-[0_15px_30px_rgba(155,89,182,0.2)] flex items-center justify-center gap-2 hover:bg-purple-50 active:scale-95 transition-all">
            <span className="text-xl">✨</span> 나도 참여하기
          </button>
        </div>

        {/* --- 5. 최종 푸터 (레퍼런스 링크 구성 반영) --- */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
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
      </div>
    </div>
  );
}
