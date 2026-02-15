import React from 'react';
import Head from 'next/head';

export default function CareerGuide() {
  const careers = [
    {
      title: "목(木) — 성장과 기획의 에너지",
      style: "새로운 프로젝트를 기획하고 교육하며, 무언가를 길러내고 창조하는 일에 능숙합니다.",
      jobs: ["교육자", "건축/설계", "기획자", "출판/언론", "원예/조경", "의류 디자인"],
      advice: "독립심이 강하므로 자기 주도적으로 일할 수 있는 환경에서 능력을 발휘합니다.",
      color: "bg-green-50 border-green-100 text-green-700"
    },
    {
      title: "화(火) — 열정과 표현의 에너지",
      style: "자신을 드러내고 빛내는 일, 화려한 전문 서비스나 예술적인 감각을 발휘하는 일에 최적화되어 있습니다.",
      jobs: ["방송/연예", "예술가", "마케팅/PR", "IT/기술", "디자인", "서비스업"],
      advice: "사람들의 시선이 닿는 곳에서 열정을 쏟을 때 가장 큰 보람을 느낍니다.",
      color: "bg-red-50 border-red-100 text-red-700"
    },
    {
      title: "토(土) — 신뢰와 중재의 에너지",
      style: "안정적이고 묵직하며, 사람과 사람 또는 자산을 연결하고 관리하는 일에 뛰어난 재능이 있습니다.",
      jobs: ["부동산", "금융/보험", "중재인", "종교/철학", "관리자", "농업/축산"],
      advice: "신뢰와 신용을 바탕으로 한 긴 호흡의 업무에서 독보적인 결과를 냅니다.",
      color: "bg-yellow-50 border-yellow-100 text-yellow-700"
    },
    {
      title: "금(金) — 결단과 원칙의 에너지",
      style: "옳고 그름을 가리고 원칙을 지키며, 단단하게 결실을 맺고 통제하는 일에 강점을 보입니다.",
      jobs: ["군인/경찰", "법률가", "금융/회계", "의료/생명공학", "제조/기계", "엔지니어"],
      advice: "냉철한 판단력과 결단력이 필요한 전문직에서 두각을 나타냅니다.",
      color: "bg-slate-50 border-slate-200 text-slate-700"
    },
    {
      title: "수(水) — 지혜와 유연의 에너지",
      style: "생각이 깊고 유연하며, 유통하거나 지식을 전달하고 보이지 않는 곳에서 흐름을 만드는 일에 능합니다.",
      jobs: ["학자/연구원", "무역/유통", "전략가", "상담사", "예술/문학", "음식/음료업"],
      advice: "침착함과 유연한 사고가 필요한 업무에서 지혜로운 해결사 역할을 합니다.",
      color: "bg-blue-50 border-blue-100 text-blue-700"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>사주로 보는 직업 적성 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">오행으로 찾는 나의 직업 적성</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">나의 에너지는 어디에 어울릴까?</p>
              <p>직업은 우리가 에너지를 발산하는 가장 중요한 통로입니다. 사주의 오행 기운은 내가 어떤 방식의 업무를 선호하고, 어떤 환경에서 성과를 내는지 알려주는 훌륭한 나침반이 됩니다.</p>
              <p>나를 설레게 하는 일, 내가 잘할 수 있는 일의 힌트를 오행 적성 가이드에서 찾아보세요.</p>
            </div>
          </section>

          {/* 2. 오행별 상세 적성 (카드 디자인) */}
          <section className="space-y-10">
            {careers.map((career, i) => (
              <div key={i} className={`${career.color} p-8 rounded-[40px] border space-y-6 shadow-sm`}>
                <h3 className="font-black text-xl">{career.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] font-bold opacity-60 mb-2 underline decoration-black/10">업무 스타일</p>
                    <p className="text-[14px] leading-7 font-medium">{career.style}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 py-2">
                    {career.jobs.map((job, j) => (
                      <span key={j} className="bg-white/60 px-3 py-1.5 rounded-xl text-[12px] font-bold border border-black/5">{job}</span>
                    ))}
                  </div>
                  <div className="bg-white/40 p-4 rounded-2xl">
                    <p className="text-[12px] font-bold opacity-60 mb-1">성공을 위한 조언</p>
                    <p className="text-[13px] leading-6 italic">{career.advice}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* 3. 마무리 조언 (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2">🎯 적성보다 중요한 것</h2>
            <div className="space-y-4 text-[14px] text-slate-600 leading-7">
              <p>오행은 직업을 결정하는 유일한 기준은 아닙니다. 내가 가진 기운을 어떻게 활용하고, 어떤 가치를 실현하고 싶은지가 더 중요할 수 있습니다.</p>
              <p>우리 사이의 가이드는 당신이 가진 무한한 가능성 중 하나를 제안할 뿐입니다. 당신의 열정이 머무는 곳이 바로 최고의 직장입니다.</p>
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
