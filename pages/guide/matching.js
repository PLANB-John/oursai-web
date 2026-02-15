import React from 'react';
import Head from 'next/head';

export default function MatchingGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>사주 궁합 보는 법 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 궁합이란? (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">사주 궁합 보는 법</h1>
            <div className="space-y-4">
              <p className="font-bold text-slate-800 text-lg flex items-center gap-2">❤️ 궁합(宮合)이란?</p>
              <p className="text-[14px] text-slate-600 leading-7">궁합은 전통적으로 두 사람의 사주를 비교하여 관계의 조화를 보는 것이에요. 우리 사이에서는 일주를 기반으로 간소화된 궁합 분석을 제공합니다.</p>
              <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 text-[13px] text-orange-700 leading-6">
                <strong>참고:</strong> 궁합 결과는 지표와 참고용으로 제공됩니다. 실제 관계에서 가장 중요한 건 서로를 이해하려는 마음이에요.
              </div>
            </div>
          </section>

          {/* 2. 천간 관계 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">⚓ 천간 관계: 정신적 교감</h2>
            <p className="text-[14px] text-slate-600 leading-7">천간은 사주의 첫 번째 글자로, 두 사람의 <strong>생각과 가치관</strong>이 얼마나 통하는지를 보여줘요. 마치 대화를 나눌 때 서로의 말이 잘 통하는지, 같은 곳을 바라보는지를 나타내는 거예요.</p>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li className="flex gap-2"><span>•</span> <strong>정신합:</strong> 생각과 가치관이 자연스럽게 통하는 관계예요.</li>
              <li className="flex gap-2"><span>•</span> <strong>정신충:</strong> 가치관이 다르거나 대립하는 관계예요. 서로 다르게 해석하거나 의견이 자주 엇갈릴 수 있어요.</li>
              <li className="flex gap-2"><span>•</span> <strong>상생/상극:</strong> 한쪽이 다른 쪽을 도와주거나(상생), 서로 견제하는(상극) 관계예요.</li>
            </ul>
          </section>

          {/* 3. 지지 관계 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">🎎 지지 관계: 일상 케미</h2>
            <p className="text-[14px] text-slate-600 leading-7">지지는 일주중 두 번째 글자로, <strong>일상에서의 케미</strong>를 나타내요. 함께 있을 때 느끼는 편안함, 생활 패턴이 잘 맞는지를 보여주는 가장 중요한 요소예요.</p>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li className="flex gap-2"><span>•</span> <strong>육합/삼합:</strong> 행동 패턴이 잘 맞고 함께 있으면 즐거운 관계예요. 자연스럽게 흐름이 좋아요.</li>
              <li className="flex gap-2"><span>•</span> <strong>충:</strong> 사소한 습관이나 생활 방식에서 충돌하는 관계예요. 신경이 쓰이고 티격태격할 수 있어요.</li>
              <li className="flex gap-2"><span>•</span> <strong>원진:</strong> 이유 없이 예민해지거나 마음이 힘든 관계예요. 타이밍이 잘 안 맞는 느낌이 들 수 있어요.</li>
            </ul>
          </section>

          {/* 4. 보완성 (이음 텍스트 반영) */}
          <section className="space-y-4">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">📈 보완성: 서로 채워주는 기운</h2>
            <p className="text-[14px] text-slate-600 leading-7">상대방의 지지가 내 원소에게 힘이 되는 오행인지를 봐요. 서로에게 부족한 기운을 채워줄 수 있는지를 나타내요.</p>
            <div className="bg-green-50 p-5 rounded-2xl border border-green-100 text-[13px] text-green-700 leading-6 italic text-center">
              "목이 물을 만나 자라나듯, 나에게 힘을 주는 기운이 상대에게 있는지를 확인하는 관계예요."
            </div>
          </section>

          {/* 5. 궁합 등급 (이음 디자인 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">⭐️ 궁합 등급</h2>
            <p className="text-[13px] text-slate-500">우리 사이는 수만 건의 사주 궁합 데이터를 5단계 등급으로 궁합을 표현해요.</p>
            <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-slate-100 text-slate-600 font-bold">
                  <tr>
                    <th className="px-6 py-4">등급</th>
                    <th className="px-6 py-4">의미</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="px-6 py-4 font-bold text-blue-500 italic">천생연분</td><td className="px-6 py-4">최고의 조합</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-green-500 italic">찰떡궁합</td><td className="px-6 py-4">좋은 조화</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-yellow-500 italic">보통인연</td><td className="px-6 py-4">무난한 조화</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-orange-500 italic">티격태격</td><td className="px-6 py-4">안 맞는 조합</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-red-500 italic">주의필요</td><td className="px-6 py-4">최악의 조화</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 text-center">* 결과에 너무 집착하지 마세요! 관계의 기류를 이해하는 지표일 뿐입니다.</p>
          </section>

          {/* 6. 궁합이 안 좋으면? (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">💔 궁합이 안 좋으면?</h2>
            <div className="space-y-4 text-[14px] text-slate-600 leading-7">
              <p>궁합 점수가 낮다고 해서 관계가 끝나는 뜻은 아니에요. 서로의 기운이 부딪치거나 긴장이 있다는 뜻입니다.</p>
              <p>실제 관계에서 가장 중요한 건 <strong>서로를 이해하려는 노력</strong>이에요. 우리 사이는 차이를 긍정적으로 활용하기 위한 참고용 지표로 활용해 주세요.</p>
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
