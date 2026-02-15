import React from 'react';
import Head from 'next/head';

export default function IljuGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>일주란 무엇인가 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부: 일주란? */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">일주란 무엇인가</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">일주(日柱)란?</p>
              <p>일주(日柱)는 태어난 날의 기운을 나타내는 사주의 핵심 요소입니다. 사주팔자 8글자 중에서도 ‘나 자신’을 가장 잘 표현하는 부분으로, 명학의 세계에선 ‘나’의 본질, 성격의 기본값으로 여겨집니다.</p>
              <p>수많은 관계 속에서도 변하지 않는 나의 고유한 에너지가 바로 일주에 담겨 있습니다. 내가 어떤 가치관을 가졌는지, 어떤 방식으로 세상과 소통하는지를 이해하는 첫 단추는 내 안의 본질인 일주를 아는 것에서 시작됩니다.</p>
            </div>
          </section>

          {/* 2. 사주의 구조 설명 */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">사주(四柱)란?</h2>
            <p className="text-[14px] text-slate-600 leading-7">사주는 사람이 태어난 연, 월, 일, 시라는 네 개의 기둥(四柱)을 뜻합니다. 각 기둥에는 하늘과 땅의 기운이 담긴 두 글자가 있어 총 여덟 글자가 됩니다.</p>
            <ul className="text-[13px] text-slate-500 space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <li className="flex gap-2"><span>·</span> 연주(年柱): 태어난 해 - 조상, 국가, 나의 사회적 배경</li>
              <li className="flex gap-2"><span>·</span> 월주(月柱): 태어난 달 - 부모, 형제, 사회적 환경</li>
              <li className="flex gap-2 font-bold text-purple-600"><span>·</span> 일주(日柱): 태어난 날 - 나 자신, 배우자, 가치관</li>
              <li className="flex gap-2"><span>·</span> 시주(時柱): 태어난 시간 - 자식, 미래, 개인적 비밀</li>
            </ul>
          </section>

          {/* 3. 일주의 구조 */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">일주의 구조: 천간 + 지지</h2>
            <p className="text-[14px] text-slate-600 leading-7">일주는 천간(天)과 지지(地)의 두 글자로 이루어집니다.</p>
            <div className="bg-slate-50 p-7 rounded-[32px] border border-slate-100 space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-slate-800 text-[15px]">일간(日干) — 정신적 나</p>
                <p className="text-[13px] text-slate-500 leading-6">나의 생각, 기질, 근본적인 정체성을 나타냅니다.</p>
              </div>
              <div className="h-[1px] bg-slate-200"></div>
              <div className="space-y-2">
                <p className="font-bold text-slate-800 text-[15px]">일지(日支) — 환경적 나</p>
                <p className="text-[13px] text-slate-500 leading-6">나의 행동 방식, 생활 태도, 배우자궁을 의미합니다.</p>
              </div>
            </div>
          </section>

          {/* 4. 띠와 일주의 차이 (핵심 비교) */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">띠와 일주의 차이</h2>
            <p className="text-[14px] text-slate-600 leading-7">많은 분들이 사주를 '띠'로만 기억하지만, 현대 명리학에선 일주가 더 중요합니다.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 text-sm mb-2">띠(연주)</p>
                <p className="text-[12px] text-slate-400 leading-5">내가 태어난 해의 거시적인 환경이자 세대의 공통적 기질</p>
              </div>
              <div className="bg-purple-50 p-5 rounded-3xl border border-purple-100">
                <p className="font-bold text-purple-600 text-sm mb-2">일주(본질)</p>
                <p className="text-[12px] text-purple-400 leading-5">나 개인의 구체적인 성향이자 본질적인 내면 아이덴티티</p>
              </div>
            </div>
          </section>

          {/* 5. 일주로 알 수 있는 것 */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">일주로 알 수 있는 것</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">🌳 성향의 본질</p>
                <p className="text-[12px] text-green-600/80 leading-5">내가 어떤 에너지를 가지고 태어났으며, 무엇을 중요하게 여기는지 알려줍니다.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100">
                <p className="font-bold text-yellow-700 text-sm mb-1">🏠 행동의 방식</p>
                <p className="text-[12px] text-yellow-600/80 leading-5">실제 생활에서 내가 어떤 방식으로 문제를 해결하고 행동하는지 보여줍니다.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <p className="font-bold text-blue-700 text-sm mb-1">🔗 인연의 성격</p>
                <p className="text-[12px] text-blue-600/80 leading-5">다른 사람과의 관계에서 내가 어떤 반응을 보이고, 누구와 조화를 이루는지 분석합니다.</p>
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
