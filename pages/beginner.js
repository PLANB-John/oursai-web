import React from 'react';
import Head from 'next/head';

export default function BeginnerGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans">
      <Head>
        <title>사주 초보 완전 가이드 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-10 space-y-12">
          {/* 헤더 섹션 */}
          <section>
            <h1 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">사주 초보 완전 가이드</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg">사주, 어렵지 않아요</p>
              <p>'사주'라는 단어만 들으면 복잡하고 어려울 것 같지만, 사실 핵심 개념은 생각보다 단순합니다. 사주는 태어난 시간의 담긴 기운을 조합해 개인의 성격과 삶의 방향성을 파악하는 지혜로운 체계입니다.</p>
              <p>이 가이드를 끝까지 읽으시면 사주의 기본 구조, 일주, 오행, 궁합의 핵심을 모두 이해하실 수 있습니다. 천천히 따라와 보세요.</p>
            </div>
          </section>

          {/* 사주의 기본 구조 (표) */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">사주(四柱)의 기본 구조</h2>
            <p className="text-[14px] text-slate-600 leading-7">사주는 네 개의 기둥(연, 월, 일, 시)을 말합니다. 각 기둥은 하늘의 기운인 '천간'과 땅의 기운인 '지지'로 구성되어 총 8개의 글자가 됩니다.</p>
            
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: '연주(뿌리)', part: '천간', sub: '지지', desc: '태어난 해' },
                { label: '월주(가지)', part: '천간', sub: '지지', desc: '태어난 달' },
                { label: '일주(몸통)', part: '천간', sub: '지지', desc: '태어난 날', highlight: true },
                { label: '시주(열매)', part: '천간', sub: '지지', desc: '태어난 시간' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-[10px] text-slate-400 font-bold">{item.label}</div>
                  <div className={`p-3 rounded-xl border ${item.highlight ? 'bg-purple-50 border-purple-200 text-purple-600' : 'bg-slate-50 border-slate-100'} font-bold text-sm`}>천간</div>
                  <div className={`p-3 rounded-xl border ${item.highlight ? 'bg-purple-50 border-purple-200 text-purple-600' : 'bg-slate-50 border-slate-100'} font-bold text-sm`}>지지</div>
                  <div className="text-[10px] text-slate-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 핵심은 일주(日柱) */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">핵심은 일주(日柱)</h2>
            <p className="text-[14px] text-slate-600 leading-7">사주에서 가장 중요한 기둥은 바로 <strong>일주(日柱)</strong>입니다. 일주의 천간은 '나 자신'을 의미하며, 이를 중심으로 주변 기운과의 조화를 분석합니다.</p>
            <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 text-purple-700 text-[13px] leading-6 font-medium">
              "생년월일만 입력하면 나의 일주를 기반으로 성격과 인연을 분석할 수 있습니다. 일주는 '나'라는 우주의 중심점입니다."
            </div>
          </section>

          {/* 천간과 지지, 오행 설명 */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">천간과 지지, 오행의 조화</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl shrink-0">☁️</div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-800">천간(天干) - 하늘의 기운</p>
                  <p className="text-[12px] text-slate-500 leading-5">정신적인 성향, 가치관, 사고방식을 나타냅니다. (갑, 을, 병, 정... 등 10가지)</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-xl shrink-0">🌳</div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-800">지지(地支) - 땅의 기운</p>
                  <p className="text-[12px] text-slate-500 leading-5">행동 패턴, 습관, 생활 방식을 나타냅니다. (자, 축, 인, 묘... 등 12가지)</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center text-xl shrink-0">☯️</div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-800">오행(五行) - 에너지의 균형</p>
                  <p className="text-[12px] text-slate-500 leading-5">목(나무), 화(불), 토(흙), 금(쇠), 수(물)의 다섯 가지 기운이 서로 살리고 돕는 원리입니다.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 하단 질문 영역 */}
          <section className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold text-slate-800">자주 묻는 질문</h3>
            <div className="space-y-6">
              {[
                { q: "사주를 보려면 태어난 시간도 알아야 하나요?", a: "일주를 분석하는 데는 생년월일만으로도 가능하지만, 정확한 시주(시간)까지 알면 훨씬 정밀한 분석이 가능합니다." },
                { q: "궁합이 안 좋으면 어떡하죠?", a: "궁합은 '운명'이라기보다 '날씨'와 같습니다. 비가 오면 우산을 쓰듯, 서로의 차이를 알고 배려하는 가이드로 활용하세요." }
              ].map((faq, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="font-bold text-sm text-purple-500 italic">Q. {faq.q}</p>
                  <p className="text-[12px] text-slate-500 leading-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* 푸터 영역 */}
        <footer className="px-6 py-12 bg-white text-center space-y-6 border-t border-slate-50">
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold">
            <a href="/guide">가이드 목록</a>
            <span className="text-slate-100">|</span>
            <a href="/faq">자주 묻는 질문</a>
          </div>
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold border-t border-slate-50 pt-6">
            <a href="/terms" className="hover:text-slate-400">이용약관</a>
            <span className="text-slate-100">|</span>
            <a href="/privacy" className="hover:text-slate-400">개인정보처리방침</a>
          </div>
          <p className="text-[10px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
