import React from 'react';
import Head from 'next/head';

export default function FamilyGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>부모·자녀 궁합 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부: 부모-자녀 궁합이란? (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">오행으로 보는 부모·자녀 궁합</h1>
            <div className="space-y-4">
              <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">👨‍👩‍👧‍👦 부모-자녀 궁합이란?</h2>
              <p className="text-[14px] text-slate-600 leading-7">부모와 자녀는 가장 가깝고도 복잡한 인연의 고리입니다. 사주 궁합을 통해 자녀의 타고난 기질과 부모의 양육 스타일이 어떻게 조화를 이루는지 이해하면 더욱 행복한 가정을 만들 수 있습니다.</p>
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 text-[13px] text-emerald-700 leading-6">
                <strong>핵심:</strong> 자녀를 부모의 틀에 맞추기보다, 자녀가 가진 고유한 오행의 기운을 꽃피울 수 있도록 돕는 가이드로 활용해 보세요.
              </div>
            </div>
          </section>

          {/* 2. 오행별 자녀 기질 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">🌱 자녀의 오행별 기질</h2>
            <div className="space-y-4">
              {[
                { t: "목(木) 기질의 자녀", c: "bg-green-50 border-green-100", tc: "text-green-700", d: "호기심이 많고 창의적이며 독립심이 강합니다. 스스로 결정하고 실행할 때 가장 빛납니다." },
                { t: "화(火) 기질의 자녀", c: "bg-red-50 border-red-100", tc: "text-red-700", d: "솔직하고 열정적이며 자신을 드러내길 좋아합니다. 칭찬과 인정을 통해 큰 동기부여를 얻습니다." },
                { t: "토(土) 기질의 자녀", c: "bg-yellow-50 border-yellow-100", tc: "text-yellow-700", d: "믿음직하고 포용력이 있으며 친구들과의 관계를 소중히 합니다. 환경 변화에 신중한 편입니다." },
                { t: "금(金) 기질의 자녀", c: "bg-slate-50 border-slate-200", tc: "text-slate-700", d: "규칙과 질서를 중시하며 정의감이 강합니다. 논리적이고 한 번 결심한 일은 끝까지 해냅니다." },
                { t: "수(水) 기질의 자녀", c: "bg-blue-50 border-blue-100", tc: "text-blue-700", d: "지혜롭고 유연하며 관찰력이 뛰어납니다. 조용히 생각에 잠기는 시간이 필요하고 공감 능력이 좋습니다." }
              ].map((item, i) => (
                <div key={i} className={`${item.c} p-6 rounded-[32px] border space-y-2`}>
                  <p className={`font-bold ${item.tc} text-[15px]`}>{item.t}</p>
                  <p className="text-[13px] opacity-80 leading-6">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 부모-자녀 상생 관계 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">🤝 기운을 북돋는 상생 육아</h2>
            <div className="space-y-4 text-[14px] text-slate-600 leading-7">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">지원의 관계 (부모가 자녀를 생함)</p>
                <p className="text-[13px] text-slate-500 leading-6">부모의 에너지가 자녀에게 자연스럽게 전달되어 자녀가 심리적 안정감을 느끼고 자신의 역량을 마음껏 펼칠 수 있는 구조입니다.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">존중의 관계 (서로의 기운이 조화됨)</p>
                <p className="text-[13px] text-slate-500 leading-6">부모와 자녀가 서로의 스타일을 인정하며 소통이 원활한 관계입니다. 친구 같은 부모-자녀 사이가 되기 쉽습니다.</p>
              </div>
            </div>
          </section>

          {/* 4. 부모를 위한 조언 (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">💡 부모님을 위한 명리 가이드</h2>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p>궁합이 '상극'이라고 해서 나쁜 인연은 아닙니다. 오히려 서로를 긴장시켜 성장하게 만드는 자극제가 되기도 합니다.</p>
              <p>중요한 것은 <strong>'다름'을 '틀림'으로 보지 않는 것</strong>입니다. 아이의 사주에 부족한 기운이 있다면 부모가 대화나 환경을 통해 그 기운을 채워주는 보완자 역할을 해주세요.</p>
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
