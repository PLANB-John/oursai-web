import React from 'react';
import Head from 'next/head';

export default function FiveElementsGuide() {
  const elements = [
    { n: '목(木)', t: '성장과 시작', d: '나무의 기운으로 위로 뻗어 나가는 추진력과 새로움을 상징합니다.', c: 'bg-green-50 border-green-100 text-green-700', icon: '🌱' },
    { n: '화(火)', t: '열정과 표현', d: '불의 기운으로 화려하게 피어나고 자신을 드러내는 에너지를 상징합니다.', c: 'bg-red-50 border-red-100 text-red-700', icon: '🔥' },
    { n: '토(土)', t: '신뢰와 중재', d: '흙의 기운으로 만물을 포용하고 서로 다른 기운을 연결하는 중심을 상징합니다.', c: 'bg-yellow-50 border-yellow-100 text-yellow-700', icon: '⛰️' },
    { n: '금(金)', t: '결단과 원칙', d: '바위나 금속의 기운으로 단단한 결실을 맺고 옳고 그름을 가리는 힘을 상징합니다.', c: 'bg-slate-100 border-slate-200 text-slate-700', icon: '💎' },
    { n: '수(水)', t: '지혜와 유연', d: '물의 기운으로 깊은 생각과 어디든 스며드는 유연함, 응축된 에너지를 상징합니다.', c: 'bg-blue-50 border-blue-100 text-blue-700', icon: '💧' }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>오행 이해하기 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 타이틀 섹션 */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">오행 이해하기</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">세상을 이루는 다섯 가지 기운</p>
              <p>오행(五行)이란 만물을 구성하고 순환시키는 다섯 가지 핵심 에너지를 말합니다. 목, 화, 토, 금, 수라는 자연의 상징을 빌려 우리 성격과 운의 흐름을 설명하는 도구입니다.</p>
              <p>우리의 사주 안에는 이 다섯 가지 기운이 저마다 다른 비율로 담겨 있습니다. 어떤 기운이 강하고 부족한지에 따라 나만의 독특한 색깔이 결정됩니다.</p>
            </div>
          </section>

          {/* 2. 오행 상세 리스트 (이음 내용 100% 반영) */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">오행별 특징</h2>
            <div className="space-y-4">
              {elements.map((el, i) => (
                <div key={i} className={`${el.c} p-6 rounded-[32px] border space-y-2`}>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[16px]">{el.n} — {el.t}</p>
                    <span className="text-xl">{el.icon}</span>
                  </div>
                  <p className="text-[13px] opacity-80 leading-6">{el.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 상생과 상극 (이미지 설명 반영) */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">기운의 순환: 상생과 상극</h2>
            <p className="text-[14px] text-slate-600 leading-7">오행은 멈춰있지 않고 서로 영향을 주고받습니다.</p>
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 text-[14px] mb-2">🤝 상생(相生): 돕는 관계</p>
                <p className="text-[12px] text-slate-500 leading-5">나무가 불을 지피고(목생화), 불이 재가 되어 흙을 만들 듯 서로를 북돋아 주는 흐름입니다.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 text-[14px] mb-2">⚔️ 상극(相剋): 제어하는 관계</p>
                <p className="text-[12px] text-slate-500 leading-5">물이 불을 끄고(수극화), 나무가 흙의 영양분을 흡수하듯 서로를 견제하며 균형을 맞추는 흐름입니다.</p>
              </div>
            </div>
          </section>

          {/* --- 우리 사이 고유 하단 섹션 (일관성 유지) --- */}
          <section className="pt-10 space-y-4">
            <button className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-bold text-[15px] border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
              모임 궁합 확인해보기 →
            </button>
            <button className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-bold text-[15px] border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
              나와 궁합 확인해보기 →
            </button>
          </section>
        </main>

        {/* --- 우리 사이 고유 푸터 (일관성 유지) --- */}
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
          <p className="text-[11px] text-slate-200 font-medium">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
