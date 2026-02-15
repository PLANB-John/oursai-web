import React from 'react';
import Head from 'next/head';

export default function TeamGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>친구·직장 궁합 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부: 친구·직장 궁합이란? (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">사주로 보는 친구·직장 궁합</h1>
            <div className="space-y-4">
              <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">🤝 친구·직장 궁합이란?</h2>
              <p className="text-[14px] text-slate-600 leading-7">사회적 관계는 개인의 삶에 큰 영향을 미칩니다. 친구나 동료와의 사주 궁합을 통해 서로의 소통 방식과 협업 스타일을 파악하면 훨씬 건강한 관계를 맺을 수 있습니다.</p>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-[13px] text-blue-700 leading-6">
                <strong>포인트:</strong> 사회적 궁합은 감정적인 끌림보다 실질적인 소통과 역할 분담의 조화에 집중하여 분석합니다.
              </div>
            </div>
          </section>

          {/* 2. 소통의 유형 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">⚡ 일주로 보는 관계의 색깔</h2>
            <div className="space-y-4">
              {[
                { t: "환상적 파트너", c: "bg-green-50 border-green-100", tc: "text-green-700", d: "서로의 부족함을 채워주고 시너지가 폭발하는 관계입니다. 업무 효율이 가장 좋습니다." },
                { t: "열정적 경쟁자", c: "bg-red-50 border-red-100", tc: "text-red-700", d: "서로 자극을 주며 함께 성장하는 관계입니다. 때로는 경쟁심이 긍정적인 동기가 됩니다." },
                { t: "안정적 지원군", c: "bg-yellow-50 border-yellow-100", tc: "text-yellow-700", d: "한쪽이 믿음직하게 받쳐주고 다른 쪽이 자유롭게 활동할 수 있게 돕는 관계입니다." },
                { t: "냉철한 전략가들", c: "bg-slate-50 border-slate-200", tc: "text-slate-700", d: "감정보다 이성이 앞서며 논리적으로 문제를 해결해나가는 비즈니스 파트너 관계입니다." }
              ].map((item, i) => (
                <div key={i} className={`${item.c} p-6 rounded-[32px] border space-y-2`}>
                  <p className={`font-bold ${item.tc} text-[15px]`}>{item.t}</p>
                  <p className="text-[13px] opacity-80 leading-6">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 업무적 시너지 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">💼 비즈니스 케미: 합과 충의 활용</h2>
            <p className="text-[14px] text-slate-600 leading-7">직장 내에서의 합(合)은 원활한 협업을, 충(沖)은 새로운 아이디어와 변화를 의미할 수 있어요.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 text-sm mb-2">원활한 소통</p>
                <p className="text-[11px] text-slate-400 leading-5">회의나 협업 시 의견 조율이 빠르고 팀워크가 잘 형성됩니다.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 text-sm mb-2">역동적 변화</p>
                <p className="text-[11px] text-slate-400 leading-5">서로 다른 시각으로 문제를 바라보며 혁신적인 결과물을 만듭니다.</p>
              </div>
            </div>
          </section>

          {/* 4. 관계를 위한 팁 (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">💡 건강한 관계를 위한 팁</h2>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <div className="space-y-2">
                <p className="font-bold text-slate-800">서로의 강점 인정하기</p>
                <p>상대방의 일주가 가진 고유한 능력을 인정하고 내 부족한 점을 맡기는 신뢰가 필요합니다.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-slate-800">소통의 언어 맞추기</p>
                <p>오행의 성향에 따라 직설적인 소통이 편한 사람과 완곡한 표현이 필요한 사람을 구분해 배려해 보세요.</p>
              </div>
            </div>
          </section>

          {/* --- 우리 사이 고유 하단 섹션 (일관성 유지) --- */}
          <section className="pt-10 space-y-4 text-center">
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
