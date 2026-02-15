import React from 'react';
import Head from 'next/head';

export default function RomanceGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>연애·결혼 궁합 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부: 연애·결혼 궁합이란? (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">시주로 보는 연애·결혼 궁합</h1>
            <div className="space-y-4">
              <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">💕 연애·결혼 궁합이란?</h2>
              <p className="text-[14px] text-slate-600 leading-7">연애와 결혼은 서로의 에너지가 가장 긴밀하게 섞이는 과정이에요. 사주 궁합은 단순히 좋다, 나쁘다를 넘어 서로의 기질이 어떻게 반응하고 보완되는지를 보여줍니다.</p>
              <div className="bg-pink-50 p-5 rounded-2xl border border-pink-100 text-[13px] text-pink-700 leading-6">
                <strong>참고:</strong> 사랑의 형태는 다양합니다. 궁합은 서로를 더 깊이 이해하기 위한 가이드로 활용해 주세요.
              </div>
            </div>
          </section>

          {/* 2. 천간합(정신적 사랑) (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">✨ 천간합: 마음이 이끌리는 궁합</h2>
            <p className="text-[14px] text-slate-600 leading-7">천간의 합은 첫눈에 반하거나 대화가 잘 통하는 <strong>정신적 교감</strong>을 나타내요. 가치관이 비슷하거나 서로의 이상향이 일치할 때 강하게 나타납니다.</p>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li className="flex gap-2"><span>•</span> <strong>다정다감한 인연:</strong> 서로에게 따뜻함을 느끼고 배려하는 예쁜 마음이 생기는 궁합이에요.</li>
              <li className="flex gap-2"><span>•</span> <strong>열정적인 인연:</strong> 에너지가 강하게 충돌하며 불꽃 튀는 사랑을 할 수 있는 궁합이에요.</li>
              <li className="flex gap-2"><span>•</span> <strong>안정적인 인연:</strong> 자극적이진 않지만 시간이 갈수록 신뢰가 쌓이는 편안한 궁합이에요.</li>
            </ul>
          </section>

          {/* 3. 지지합(현실적 생활) (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">🏠 지지합: 함께 살기 편안한 궁합</h2>
            <p className="text-[14px] text-slate-600 leading-7">지지의 조화는 <strong>현실적인 생활 방식</strong>과 스킨십, 일상의 리듬을 나타내요. 결혼 생활에서 가장 중요한 역할을 하는 실생활 케미 지표입니다.</p>
            <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-slate-800 text-[15px]">육합/삼합 — 찰떡 케미</p>
                <p className="text-[13px] text-slate-500 leading-6">생활 패턴이 비슷하고 함께 있으면 시간 가는 줄 모르는 편안한 관계입니다.</p>
              </div>
              <div className="h-[1px] bg-slate-200"></div>
              <div className="space-y-2">
                <p className="font-bold text-slate-800 text-[15px]">충/원진 — 주의가 필요한 케미</p>
                <p className="text-[13px] text-slate-500 leading-6">사소한 습관 차이로 예민해질 수 있는 관계입니다. 서로의 경계를 존중하는 노력이 필요합니다.</p>
              </div>
            </div>
          </section>

          {/* 4. 음양의 조화 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">음양의 조화와 균형</h2>
            <p className="text-[14px] text-slate-600 leading-7">남녀의 사주 구성이 음과 양의 적절한 균형을 이룰 때 관계가 더욱 안정적입니다.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                <p className="font-bold text-orange-700 text-sm mb-2">양의 에너지</p>
                <p className="text-[11px] text-orange-600 leading-5">적극적이고 발산하는 기운으로 관계의 활력을 불어넣습니다.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <p className="font-bold text-blue-700 text-sm mb-2">음의 에너지</p>
                <p className="text-[11px] text-blue-600 leading-5">수용적이고 차분한 기운으로 관계를 깊고 단단하게 유지합니다.</p>
              </div>
            </div>
          </section>

          {/* 5. 궁합보다 중요한 것 (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">⚖️ 궁합보다 중요한 것</h2>
            <div className="space-y-4 text-[14px] text-slate-600 leading-7">
              <p>사주 궁합은 두 사람의 기운이 만났을 때 생기는 '경향성'일 뿐이에요. 낮은 궁합 점수가 이별을 의미하지 않으며, 높은 점수가 행복을 보장하지도 않습니다.</p>
              <p>결국 관계를 지속시키는 것은 <strong>서로를 이해하고 소통하려는 의지</strong>입니다. 우리 사이의 가이드를 통해 상대방의 성향을 파악하고, 서로에게 맞는 사랑의 언어를 찾아보세요.</p>
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
