import React from 'react';
import Head from 'next/head';

export default function GanjiGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>천간과 지지 이해하기 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 천간(天干)이란? */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">천간과 지지 이해하기</h1>
            <div className="space-y-4">
              <h2 className="text-[18px] font-bold text-slate-800">천간(天干)이란?</h2>
              <p className="text-[14px] text-slate-600 leading-7">천간은 하늘의 기운을 나타내는 10가지 요소입니다. 사주 기둥의 윗부분을 차지하며 마음의 소리, 정신적인 지향점을 의미합니다.</p>
              <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
                <div className="grid grid-cols-5 gap-2 text-center text-[13px] font-bold text-slate-500">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-green-600">갑</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-green-600">을</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-red-600">병</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-red-600">정</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-yellow-600">무</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-yellow-600">기</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-slate-600">경</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-slate-600">신</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-blue-600">임</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-blue-600">계</div>
                </div>
              </div>
              <p className="text-[12px] text-slate-400 leading-6 italic text-center">천간은 오행과 연결되어 목(갑·을), 화(병·정), 토(무·기), 금(경·신), 수(임·계)로 분류됩니다.</p>
            </div>
          </section>

          {/* 2. 지지(地支)란? */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800">지지(地支)란?</h2>
            <p className="text-[14px] text-slate-600 leading-7">지지는 땅의 기운을 나타내며 12가지 동물의 상징으로 표현됩니다. 사주 기둥의 아랫부분을 차지하며 현실적인 행동, 생활 습관, 신체적 특징을 의미합니다.</p>
            <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[13px] text-slate-500 font-medium">
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>자(子)</span> <span>쥐</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>오(午)</span> <span>말</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>축(丑)</span> <span>소</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>미(未)</span> <span>양</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>인(寅)</span> <span>범</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>신(申)</span> <span>원숭이</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>묘(卯)</span> <span>토끼</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>유(酉)</span> <span>닭</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>진(辰)</span> <span>용</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>술(戌)</span> <span>개</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>사(巳)</span> <span>뱀</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-1"><span>해(亥)</span> <span>돼지</span></div>
              </div>
            </div>
          </section>

          {/* 3. 천간과 지지의 관계: 합과 충 */}
          <section className="space-y-8">
            <h2 className="text-[18px] font-black text-slate-800">천간과 지지의 관계: 합(合)과 충(沖)</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-7 rounded-[32px] border border-yellow-100">
                <p className="font-bold text-yellow-700 text-[15px] mb-3">🤝 합(合) — 끌림과 변화</p>
                <p className="text-[13px] text-yellow-600 leading-6">서로 다른 기운이 만나 하나로 뭉치거나 새로운 기운으로 변하는 것을 뜻합니다. 조화와 결합을 의미하며 긍정적인 끌림의 지표가 됩니다.</p>
              </div>
              <div className="bg-red-50 p-7 rounded-[32px] border border-red-100">
                <p className="font-bold text-red-700 text-[15px] mb-3">⚔️ 충(沖) — 충돌과 변화</p>
                <p className="text-[13px] text-red-600 leading-6">서로 마주 보는 기운이 부딪치는 것을 뜻합니다. 에너지가 분산되거나 큰 변화를 일으키는 계기가 되며 역동적인 관계를 상징합니다.</p>
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
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
