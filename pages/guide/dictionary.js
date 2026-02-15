import React from 'react';
import Head from 'next/head';

export default function DictionaryGuide() {
  const sections = [
    {
      title: "기초 용어",
      items: [
        { term: "명리학", desc: "사람이 태어난 연월일시의 간지를 분석하여 삶의 길흉화복을 판단하는 학문입니다." },
        { term: "사주(四柱)", desc: "태어난 연, 월, 일, 시의 네 가지 기둥을 의미합니다." },
        { term: "팔자(八字)", desc: "사주 네 기둥에 담긴 여덟 글자를 의미합니다." },
        { term: "만세력", desc: "생년월일시를 사주팔자로 변환하기 위해 사용하는 역법 체계입니다." }
      ],
      color: "bg-slate-50 border-slate-100"
    },
    {
      title: "간지와 일주",
      items: [
        { term: "천간(天干)", desc: "사주 기둥의 윗글자로 마음, 정신, 생각의 지향점을 나타냅니다. (갑, 을, 병, 정...)" },
        { term: "지지(地支)", desc: "사주 기둥의 아랫글자로 현실적인 행동, 생활 방식을 나타냅니다. (자, 축, 인, 묘...)" },
        { term: "일주(日柱)", desc: "태어난 날의 기둥으로 '나 자신'의 본질을 상징하는 가장 중요한 지표입니다." },
        { term: "일간(日干)", desc: "일주의 윗글자로 사주 전체의 주인공인 '나'를 의미합니다." }
      ],
      color: "bg-purple-50 border-purple-100"
    },
    {
      title: "오행과 관계",
      items: [
        { term: "오행(五行)", desc: "만물을 구성하는 다섯 기운(목, 화, 토, 금, 수)을 말합니다." },
        { term: "상생(相生)", desc: "어느 한 기운이 다른 기운을 돕거나 생해주는 긍정적인 관계입니다." },
        { term: "상극(相剋)", desc: "어느 한 기운이 다른 기운을 제어하거나 억제하는 관계입니다." },
        { term: "합(合)", desc: "서로 다른 기운이 만나 조화를 이루거나 새로운 기운으로 변하는 현상입니다." },
        { term: "충(沖)", desc: "서로 반대되는 기운이 만나 부딪치고 변화가 일어나는 현상입니다." }
      ],
      color: "bg-blue-50 border-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>사주 용어 사전 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">사주 용어 사전</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">어렵게 느껴지는 사주 용어, 한눈에 정리</p>
              <p>사주 명리학에는 낯선 한자와 전문 용어가 많습니다. 하지만 기초적인 용어의 의미만 알아도 내 사주와 궁합 결과를 훨씬 더 깊이 있게 이해할 수 있습니다.</p>
              <p>자주 사용되는 핵심 용어들을 카테고리별로 정리해 두었으니 궁금할 때마다 찾아보세요.</p>
            </div>
          </section>

          {/* 2. 카테고리별 용어 정리 (이음 디자인 재현) */}
          <section className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i} className={`${sec.color} p-7 rounded-[40px] border space-y-6 shadow-sm`}>
                <h2 className="font-black text-[18px] text-slate-800 border-b border-black/5 pb-3">{sec.title}</h2>
                <div className="space-y-6">
                  {sec.items.map((item, j) => (
                    <div key={j} className="space-y-1">
                      <p className="font-bold text-slate-800 text-[15px]">{item.term}</p>
                      <p className="text-[13px] text-slate-500 leading-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
