import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  // 1. 네트워크 캐릭터 데이터 (영상 기반)
  const users = [
    { id: 1, name: '서윤', icon: '🐰', x: 200, y: 50 },
    { id: 2, name: '수현', icon: '🐑', x: 320, y: 150 },
    { id: 3, name: '지민', icon: '🐷', x: 260, y: 300 },
    { id: 4, name: '해늘', icon: '🐮', x: 120, y: 300 },
    { id: 5, name: '민준', icon: '🐵', x: 80, y: 150 },
  ];

  // 2. 연결선 데이터 및 라벨 (영상 기반)
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
    <div className="min-h-screen bg-slate-50 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>우리 사이 (oursai.kr) | 우리 사이, 사주로 잇다</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 1. 상단 도입부 --- */}
        <header className="pt-16 pb-8 text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-purple-500 text-3xl font-black tracking-tighter">✦ 우리 사이</span>
            <a href="/intro" className="text-[11px] text-slate-300 font-bold border-b border-slate-100 pb-0.5">
              서비스 소개 →
            </a>
          </motion.div>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">우리 사이, 사주로 잇다</h1>
        </header>

        {/* --- 2. 핵심 애니메이션: 인연 네트워크 --- */}
        <div className="relative w-full h-[400px] flex justify-center items-center overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 400 400">
            {connections.map((conn, i) => {
              const fromUser = users.find(u => u.id === conn.from);
              const toUser = users.find(u => u.id === conn.to);
              return (
                <g key={i}>
                  <motion.line
                    x1={fromUser.x} y1={fromUser.y} x2={toUser.x} y2={toUser.y}
                    stroke={conn.color} strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.text
                    x={(fromUser.x + toUser.x) / 2} y={(fromUser.y + toUser.y) / 2}
                    fill={conn.color} fontSize="10" fontWeight="bold" textAnchor="middle" dy="-5"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="bg-white"
                  >
                    {conn.label}
                  </motion.text>
                </g>
              );
            })}
          </svg>

          {users.map((user) => (
            <motion.div
              key={user.id}
              style={{ left: user.x - 35, top: user.y - 35 }}
              className="absolute w-[70px] h-[70px] flex flex-col items-center justify-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: user.id * 0.5 }}
            >
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center text-2xl relative overflow-hidden">
                {user.icon}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>
              </div>
              <span className="text-[11px] font-bold text-slate-400 mt-2 bg-white px-2 rounded-full shadow-sm">
                {user.name}
              </span>
            </motion.div>
          ))}
          <p className="absolute bottom-4 text-[10px] text-slate-300 font-bold">✨ 인연을 느껴보세요</p>
        </div>

        {/* --- 3. 실시간 통계 --- */}
        <section className="px-8 py-6 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center space-y-1">
            <p className="text-[20px] font-black text-purple-600">58,644</p>
            <p className="text-[11px] text-slate-400 font-bold">만들어진 모임</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center space-y-1">
            <p className="text-[20px] font-black text-purple-600">283,980</p>
            <p className="text-[11px] text-slate-400 font-bold">이어진 인연</p>
          </div>
        </section>

        {/* --- 4. 메인 액션 버튼 --- */}
        <main className="px-8 py-10 space-y-6">
          <div className="flex justify-center gap-2 mb-4">
            {['궁합은?', '누가 제일?', '오늘 운세는?'].map((tab, i) => (
              <span key={i} className="px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-400">
                {tab}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <button className="w-full py-6 bg-purple-600 text-white rounded-[24px] font-black text-[17px] shadow-xl shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
              모임 궁합 생성
            </button>
            <button className="w-full py-6 bg-white text-purple-600 rounded-[24px] font-black text-[17px] border-2 border-purple-600 hover:bg-purple-50 transition-all active:scale-95">
              나와 궁합 생성
            </button>
          </div>
        </main>

        {/* --- 5. 사주 알아보기 (가이드 섹션) --- */}
        <section className="px-8 py-12 space-y-6 bg-slate-50/50">
          <div className="flex justify-between items-end">
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
              <a key={i} href={card.link} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <p className="text-[13px] font-bold text-slate-800 mb-1">{card.t}</p>
                <p className="text-[10px] text-slate-400 leading-4">{card.d}</p>
              </a>
            ))}
          </div>
        </section>

        {/* --- 6. 서비스 소개 텍스트 --- */}
        <section className="px-8 py-16 space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-800">우리 사이란?</h2>
            <p className="text-[13px] text-slate-500 leading-7">
              우리 사이는 사주 일주를 기반으로 한 그룹 궁합 분석 서비스입니다. 친구, 동료, 가족 등 모든 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인할 수 있습니다. 전통적인 사주 이론을 현대적으로 재해석하여, 누구나 쉽게 이해할 수 있는 방식으로 궁합 결과를 제공합니다.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[40px] space-y-4">
            {[
              '최대 12명까지 그룹 궁합 분석',
              '완전 무료, 회원가입 불필요',
              '링크 공유로 간편한 참여'
            ].map((txt, i) => (
              <p key={i} className="text-[13px] font-bold text-slate-700 flex items-center gap-3">
                <span className="text-purple-500">✓</span> {txt}
              </p>
            ))}
          </div>
        </section>

        {/* --- 7. 우리 사이 고유 푸터 (일관성 유지) --- */}
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
