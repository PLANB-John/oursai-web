import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  // 1. 네트워크 구성원 데이터 (중앙 정렬을 위해 좌표 재조정)
  const users = [
    { id: 1, name: '서윤', icon: '🐰', x: 200, y: 50 },  // 상단 중앙
    { id: 2, name: '수현', icon: '🐑', x: 320, y: 150 }, // 우측 상단
    { id: 3, name: '지민', icon: '🐷', x: 270, y: 300 }, // 우측 하단
    { id: 4, name: '해늘', icon: '🐮', x: 130, y: 300 }, // 좌측 하단
    { id: 5, name: '민준', icon: '🐵', x: 80, y: 150 },  // 좌측 상단
  ];

  // 2. 인연 연결 데이터
  const connections = [
    { from: 1, to: 2, label: '천생연분', color: '#A855F7' },
    { from: 2, to: 3, label: '그럭저럭', color: '#FACC15' },
    { from: 3, to: 4, label: '척척학력', color: '#4ADE80' },
    { from: 4, to: 5, label: '평생인연', color: '#60A5FA' },
    { from: 5, to: 1, label: '척척학력', color: '#4ADE80' },
    { from: 5, to: 2, label: '그럭저럭', color: '#FACC15' },
    { from: 2, to: 4, label: '삐걱삐걱', color: '#F87171' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>우리 사이 (oursai.kr) | 우리 사이 운명일까?</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 1. 상단 도입부 (수정됨: 색상 및 애니메이션) --- */}
        <header className="pt-20 pb-8 text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-2">
              {/* 왼쪽 별 애니메이션 */}
              <motion.span 
                className="text-[#FDA7DF] text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >✦</motion.span>
              
              {/* 타이틀 색상 그라데이션 적용 */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D980FA] to-[#FDA7DF] text-[32px] font-black tracking-tight drop-shadow-sm">
                우리 사이
              </span>
              
              {/* 오른쪽 별 애니메이션 (딜레이 추가) */}
              <motion.span 
                className="text-[#FDA7DF] text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >✦</motion.span>
            </div>
            <a href="/intro" className="text-[13px] text-slate-300 font-medium border-b border-slate-100 pb-0.5">
              서비스 소개 →
            </a>
          </motion.div>
          <h1 className="text-[22px] font-black text-[#5758BB] tracking-tight pt-2">
            우리 사이 운명일까?
          </h1>
        </header>

        {/* --- 2. 핵심 애니메이션: 인연 네트워크 (수정됨: 중앙 정렬 보정) --- */}
        <div className="relative w-full h-[400px] flex justify-center items-center my-4">
          {/* SVG 뷰박스 및 크기 조정으로 중앙 배치 유도 */}
          <svg className="absolute w-[400px] h-[400px]" viewBox="0 0 400 400" style={{ left: '50%', transform: 'translateX(-50%)' }}>
            {connections.map((conn, i) => {
              const fromUser = users.find(u => u.id === conn.from);
              const toUser = users.find(u => u.id === conn.to);
              return (
                <g key={i}>
                  <motion.line
                    x1={fromUser.x} y1={fromUser.y} x2={toUser.x} y2={toUser.y}
                    stroke={conn.color} strokeWidth="2.5" strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.rect
                    x={(fromUser.x + toUser.x) / 2 - 25} y={(fromUser.y + toUser.y) / 2 - 8}
                    width="50" height="16" rx="8" fill="white" className="shadow-sm"
                  />
                  <text
                    x={(fromUser.x + toUser.x) / 2} y={(fromUser.y + toUser.y) / 2 + 4}
                    fill={conn.color} fontSize="9" fontWeight="bold" textAnchor="middle"
                  >
                    {conn.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* 아이콘들 중앙 정렬 보정 */}
          <div className="relative w-[400px] h-[400px]">
            {users.map((user) => (
              <motion.div
                key={user.id}
                style={{ left: user.x - 35, top: user.y - 35 }} // 좌표 기준점 중앙으로 설정
                className="absolute w-[70px] h-[70px] flex flex-col items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: user.id * 0.4 }}
              >
                <div className="w-14 h-14 bg-white rounded-[20px] shadow-xl border border-slate-50 flex items-center justify-center text-3xl relative z-10">
                  {user.icon}
                </div>
                <span className="text-[11px] font-bold text-slate-400 mt-2 bg-white px-2 py-0.5 rounded-full shadow-sm border border-slate-50 relative z-10">
                  {user.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 3. 실시간 통계 --- */}
        <section className="px-8 py-4 grid grid-cols-2 gap-4">
          <div className="bg-slate-50/50 p-6 rounded-[32px] border border-slate-100/50 text-center space-y-1">
            <p className="text-[22px] font-black text-[#8e44ad]">58,644</p>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">만들어진 모임</p>
          </div>
          <div className="bg-slate-50/50 p-6 rounded-[32px] border border-slate-100/50 text-center space-y-1">
            <p className="text-[22px] font-black text-[#8e44ad]">283,980</p>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">이어진 인연</p>
          </div>
        </section>

        {/* --- 4. 메인 액션 버튼 --- */}
        <main className="px-8 py-10 space-y-4">
          <button className="w-full py-6 bg-[#9b59b6] text-white rounded-[24px] font-black text-[18px] shadow-lg shadow-purple-100 hover:brightness-110 active:scale-95 transition-all">
            모임 궁합 생성
          </button>
          <button className="w-full py-6 bg-white text-[#9b59b6] rounded-[24px] font-black text-[18px] border-2 border-[#9b59b6] hover:bg-purple-50 active:scale-95 transition-all">
            나와 궁합 생성
          </button>
        </main>

        {/* --- 5. 사주 알아보기 --- */}
        <section className="px-8 py-12 space-y-6">
          <div className="flex justify-between items-end px-2">
            <h2 className="text-lg font-black text-slate-800">사주 알아보기</h2>
            <a href="/guide" className="text-[11px] text-slate-400 font-bold">전체 보기 →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { t: '사주 초보 가이드', d: '사주가 무엇인지 쉽게...', link: '/guide/beginner' },
              { t: '사주 궁합 보는 법', d: '서로의 합과 충을...', link: '/guide/matching' },
              { t: 'MBTI vs 사주', d: '성격 분석 도구의 차이...', link: '/guide/mbti' },
              { t: '띠별 성격과 궁합', d: '12지신 동물의 특징...', link: '/guide/zodiac' }
            ].map((card, i) => (
              <a key={i} href={card.link} className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <p className="text-[13px] font-bold text-slate-800 mb-1 group-hover:text-purple-500">{card.t}</p>
                <p className="text-[10px] text-slate-400 leading-4">{card.d}</p>
              </a>
            ))}
          </div>
        </section>

        {/* --- 6. 서비스 소개 --- */}
        <section className="px-8 py-16 space-y-8">
          <div className="space-y-4 px-2">
            <h2 className="text-xl font-black text-slate-800">우리 사이란?</h2>
            <p className="text-[14px] text-slate-500 leading-8">
              우리 사이는 사주 일주를 기반으로 한 그룹 궁합 분석 서비스입니다. 전통적인 사주 이론을 현대적으로 재해석하여 누구나 쉽게 이해할 수 있는 방식으로 궁합 결과를 제공합니다.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[40px] space-y-4 border border-slate-100">
            {['최대 12명까지 그룹 궁합 분석', '완전 무료, 회원가입 불필요', '링크 공유로 간편한 참여'].map((txt, i) => (
              <p key={i} className="text-[13px] font-bold text-slate-700 flex items-center gap-3">
                <span className="text-purple-500">✓</span> {txt}
              </p>
            ))}
          </div>
        </section>

        {/* --- 7. 최종 푸터 --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-purple-400">의견 보내기</a>
          </div>
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
