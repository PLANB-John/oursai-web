import React from 'react';
import Head from 'next/head';

export default function BeginnerGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>사주 초보 완전 가이드 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-4 py-4 border-b border-slate-50 flex items-center">
          <a href="/guide" className="p-2 text-slate-400 hover:text-purple-400 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </a>
        </div>

        <main className="px-6 py-8">
          {/* 타이틀 섹션 */}
          <section className="mb-12">
            <h1 className="text-2xl font-black mb-6 tracking-tight">사주 초보 완전 가이드</h1>
            <div className="space-y-6 text-[15px] leading-7 text-slate-600">
              <p className="font-bold text-slate-800 text-lg">사주, 어렵지 않아요</p>
              <p>'사주'라는 단어만 들으면 복잡하고 어려울 것 같지만, 사실 핵심 개념은 생각보다 단순합니다. 사주는 태어난 시간에 담긴 기운을 조합해 개인의 성향과 삶의 방향성을 파악하는 지혜로운 체계입니다.</p>
              <p>이 가이드를 끝까지 읽으시면 사주의 기본 구조, 일주, 오행, 궁합의 핵심을 모두 이해하실 수 있습니다. 천천히 따라와 보세요.</p>
            </div>
          </section>

          {/* 사주의 기본 구조 */}
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-6">사주(四柱)의 기본 구조</h2>
            <p className="text-[14px] text-slate-600 leading-7 mb-8">사주는 네 개의 기둥(연, 월, 일, 시)을 말합니다. 각 기둥은 하늘의 기운인 천간(天干)과 땅의 기운인 지지(地支)라는 두 글자로 구성됩니다. 총 8글자가 되어 '사주팔자(四柱八字)'라고 부릅니다.</p>
            
            <div className="grid grid-cols-4 gap-2 mb-4 text-center">
              {[
                { label: '연주(뿌리)', t: '천간', b: '지지', desc: '태어난 해' },
                { label: '월주(가지)', t: '천간', b: '지지', desc: '태어난 달' },
                { label: '일주(몸통)', t: '천간', b: '지지', desc: '태어난 날', active: true },
                { label: '시주(열매)', t: '천간', b: '지지', desc: '태어난 시간' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[10px] text-slate-400 font-bold mb-1">{item.label}</span>
                  <div className={`py-3 rounded-lg border font-bold text-sm ${item.active ? 'bg-blue-500 border-blue-500 text-white' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>{item.t}</div>
                  <div className={`py-3 rounded-lg border font-bold text-sm ${item.active ? 'bg-blue-500 border-blue-500 text-white' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>{item.b}</div>
                  <span className="text-[10px] text-slate-400 mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 핵심은 일주 */}
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-4">핵심은 일주(日柱)</h2>
            <p className="text-[14px] text-slate-600 leading-7 mb-6">사주에서 가장 중요한 기둥은 바로 <strong>일주(日柱)</strong>입니다. 일주의 천간을 '일간(日干)'이라 하며, 이것이 바로 <strong>'나 자신'</strong>을 의미합니다.</p>
            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 text-yellow-800 text-[14px] leading-7">
              <p>여덟 자의 이름표 가운데 주인공은 바로 나(일간)입니다. 생년월일만 알면 일주를 통해 내 성향의 핵심적 특징과 다른 사람과의 관계를 충분히 파악할 수 있습니다.</p>
            </div>
          </section>

          {/* 천간과 지지 */}
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-6">천간과 지지, 한눈에 이해하기</h2>
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold mb-2 flex items-center gap-2">천간(天干) — 하늘의 기운</p>
                <p className="text-[13px] text-slate-500 leading-6">정신적 성향, 가치관, 사고방식을 나타냅니다. 10가지의 하늘 기운이 순환합니다.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold mb-2 flex items-center gap-2">지지(地支) — 땅의 기운</p>
                <p className="text-[13px] text-slate-500 leading-6">행동 패턴, 습관, 생활 방식을 나타냅니다. 12가지 동물의 상징이 담겨 있습니다.</p>
              </div>
            </div>
          </section>

          {/* 오행 설명 */}
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-6">오행(五行)의 5가지 기운</h2>
            <div className="grid grid-cols-5 gap-2 text-center">
              {[
                { n: '목(木)', c: 'bg-green-100 text-green-700' },
                { n: '화(火)', c: 'bg-red-100 text-red-700' },
                { n: '토(土)', c: 'bg-yellow-100 text-yellow-700' },
                { n: '금(金)', c: 'bg-slate-200 text-slate-700' },
                { n: '수(水)', c: 'bg-blue-100 text-blue-700' }
              ].map((o, idx) => (
                <div key={idx} className={`${o.c} py-4 rounded-xl font-bold text-xs shadow-sm`}>{o.n}</div>
              ))}
            </div>
            <p className="text-[13px] text-slate-500 mt-6 leading-6 text-center italic">오행은 서로 돕거나(상생) 제어하며(상극) 균형을 이룹니다.</p>
          </section>

          {/* 더 알아보기 (카드 섹션) */}
          <section className="mb-16 pt-10 border-t border-slate-100">
            <h3 className="font-bold text-slate-400 text-xs mb-6 uppercase tracking-widest">더 알아보기</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: '일주란 무엇인가', l: '/guide/ilju' },
                { t: '오행 이해하기', l: '/guide/five-elements' },
                { t: '천간과 지지 알아보기', l: '/guide/ganji' },
                { t: '궁합의 원리', l: '/guide/matching' }
              ].map((card, i) => (
                <a key={i} href={card.l} className="p-4 bg-white border border-slate-100 rounded-2xl text-[13px] font-bold text-slate-600 shadow-sm hover:border-purple-200 transition-colors">
                  {card.t} →
                </a>
              ))}
            </div>
          </section>

          {/* 참여 유도 섹션 */}
          <section className="bg-slate-900 rounded-[40px] p-8 text-center text-white mb-10">
            <h3 className="text-xl font-bold mb-2">사주의 세계가 궁금하신가요?</h3>
            <p className="text-[13px] text-slate-400 mb-8 leading-6">생년월일만 입력하면 나의 일주와<br/>궁합을 바로 확인할 수 있습니다.</p>
            <div className="space-y-3">
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm shadow-lg">모임 궁합 확인해보기</button>
              <button className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold text-sm border border-slate-700">나와 궁합 확인해보기</button>
            </div>
          </section>
        </main>

        <footer className="px-6 py-12 text-center border-t border-slate-50">
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold mb-6 tracking-tight">
            <a href="/guide">가이드 목록</a>
            <span className="text-slate-100">|</span>
            <a href="/faq">자주 묻는 질문</a>
          </div>
          <p className="text-[10px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
