import React from 'react';
import Head from 'next/head';

export default function EeumStyleMain() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10">
      <Head>
        <title>우리사이 (oursai.kr) | 사주로 잇다</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] font-sans">
        
{/* --- 상단 헤더 섹션 (폰트 굵기 수정 및 카피 문구 추가) --- */}
        <header className="px-6 py-12 text-center">
          <div className="flex flex-col items-center gap-4">
            {/* 메인 로고 영역 */}
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center gap-3">
              <span className="text-purple-400 animate-pulse text-2xl mb-1">✦</span>
              우리 사이
              <span className="text-pink-400 animate-pulse text-2xl mb-1">✦</span>
            </h1>
            
            {/* 서비스 소개: 폰트 굵기를 font-medium으로 얇게 조정 */}
            <a 
              href="/intro" 
              className="text-[12px] text-slate-400 font-medium flex items-center gap-1 hover:text-purple-400 transition-colors"
            >
              서비스 소개 <span className="text-[10px] opacity-60">→</span>
            </a>

            {/* 카피 문구: '이음' 스타일의 슬로건 추가 */}
            <p className="text-slate-500 font-bold text-lg tracking-tight mt-2">
              우리 사이 운명일까?
            </p>
          </div>
        </header>
              
        {/* --- 중앙 인연 네트워크 (이음 핵심 비주얼) --- */}
        <section className="px-6 relative py-10">
          <div className="aspect-square bg-slate-50 rounded-[40px] border border-slate-100 relative flex items-center justify-center overflow-hidden shadow-inner">
            {/* 인연 연결선 (SVG) */}
            <svg className="absolute inset-0 w-full h-full p-10" viewBox="0 0 100 100">
              <line x1="50" y1="20" x2="20" y2="50" stroke="#E2E8F0" strokeWidth="0.5" />
              <line x1="50" y1="20" x2="80" y2="50" stroke="#E2E8F0" strokeWidth="0.5" />
              <line x1="20" y1="50" x2="35" y2="85" stroke="#E2E8F0" strokeWidth="0.5" />
              <line x1="80" y1="50" x2="65" y2="85" stroke="#E2E8F0" strokeWidth="0.5" />
              <line x1="35" y1="85" x2="65" y2="85" stroke="#E2E8F0" strokeWidth="0.5" />
            </svg>
            
            {/* 아바타 노드들 (예시) */}
            <div className="absolute top-[10%] left-[42%] flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-md border-2 border-purple-100 flex items-center justify-center text-2xl">🐰</div>
              <span className="text-[10px] font-bold mt-1">서윤</span>
            </div>
            <div className="absolute top-[45%] left-[8%] flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-md border-2 border-yellow-100 flex items-center justify-center text-2xl">🐯</div>
              <span className="text-[10px] font-bold mt-1">민준</span>
            </div>
            <div className="absolute top-[45%] right-[8%] flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-md border-2 border-pink-100 flex items-center justify-center text-2xl">🦁</div>
              <span className="text-[10px] font-bold mt-1">수현</span>
            </div>

            {/* 중간 뱃지 (이음 스타일) */}
            <div className="absolute top-[40%] left-[30%] bg-purple-500 text-white text-[9px] px-2 py-1 rounded-full font-bold shadow-lg">찰떡궁합</div>
            <div className="absolute bottom-[25%] left-[45%] bg-yellow-400 text-white text-[9px] px-2 py-1 rounded-full font-bold shadow-lg">찌릿찌릿</div>
          </div>
          <p className="text-center text-[10px] text-slate-300 mt-4 font-medium">✨ 이동을 눌러보세요</p>
        </section>

        {/* --- 통계 섹션 --- */}
        <section className="px-6 flex gap-4 mb-10">
          <div className="flex-1 bg-slate-50 p-4 rounded-3xl text-center border border-slate-100/50">
            <p className="text-[20px] font-black text-slate-700">51,480</p>
            <p className="text-[10px] text-slate-400 font-bold">만들어진 모임</p>
          </div>
          <div className="flex-1 bg-slate-50 p-4 rounded-3xl text-center border border-slate-100/50">
            <p className="text-[20px] font-black text-slate-700">234,799</p>
            <p className="text-[10px] text-slate-400 font-bold">이어진 인연</p>
          </div>
        </section>

        {/* --- 핵심 액션 버튼 (CTA) --- */}
        <section className="px-6 space-y-4 mb-12">
          <button className="w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-[25px] text-lg font-black shadow-xl shadow-purple-100 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span>🔮</span> 모임 궁합 생성
          </button>
          <button className="w-full py-5 bg-white border-2 border-purple-100 text-purple-500 rounded-[25px] text-lg font-black shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
            <span>💜</span> 나와 궁합 생성
          </button>
        </section>

        {/* --- 사주 가이드 카드 --- */}
        <section className="px-6 pb-20">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">사주 알아보기</h3>
            <span className="text-xs text-slate-400 font-bold">전체 보기 →</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-[30px] border border-slate-100">
              <div className="text-2xl mb-3">📚</div>
              <p className="font-bold text-sm text-slate-800 mb-1 leading-tight">사주 초보 완전 가이드</p>
              <p className="text-[10px] text-slate-400 leading-relaxed">입문자를 위한 기초 지식</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-[30px] border border-slate-100">
              <div className="text-2xl mb-3">🗺️</div>
              <p className="font-bold text-sm text-slate-800 mb-1 leading-tight">사주 궁합 보는 법</p>
              <p className="text-[10px] text-slate-400 leading-relaxed">관계의 비밀을 푸는 열쇠</p>
            </div>
          </div>
        </section>

        {/* --- 하단 정보 및 푸터 --- */}
        <footer className="px-6 py-12 bg-slate-50 border-t border-slate-100 text-center">
          <div className="flex justify-center gap-6 text-[11px] text-slate-400 font-bold mb-6">
            <a href="/terms">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
          </div>
          <p className="text-[10px] text-slate-300 font-medium">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
