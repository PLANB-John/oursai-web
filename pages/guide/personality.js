import React from 'react';
import Head from 'next/head';

export default function PersonalityGuide() {
  const types = [
    {
      title: "목(木)의 성격",
      tags: ["성장", "시작", "추진력"],
      strength: "새로운 일을 기획하고 시작하는 에너지가 뛰어납니다. 앞을 향해 나아가는 추진력과 생명력이 넘치는 타입입니다.",
      weakness: "때로 지나치게 직선적이라 주변과 마찰이 생길 수 있으며, 마무리가 다소 부족할 수 있습니다.",
      keywords: ["기획자", "리더", "탐험가", "독립심"],
      color: "bg-green-50 border-green-100 text-green-700",
      tagColor: "bg-green-100 text-green-600"
    },
    {
      title: "화(火)의 성격",
      tags: ["열정", "표현", "화려함"],
      strength: "자신을 표현하는 능력이 탁월하며 솔직하고 열정적입니다. 사람들의 시선을 끄는 화려함과 에너지가 있습니다.",
      weakness: "감정 변화가 빠르고 인내심이 부족할 수 있습니다. 금방 타오르고 금방 식는 경향을 주의해야 합니다.",
      keywords: ["예술가", "연설가", "분위기 메이커", "솔직함"],
      color: "bg-red-50 border-red-100 text-red-700",
      tagColor: "bg-red-100 text-red-600"
    },
    {
      title: "토(土)의 성격",
      tags: ["신뢰", "포용", "중재"],
      strength: "묵직한 안정감과 포용력을 가졌습니다. 사람과 사람 사이를 연결하고 중재하는 능력이 뛰어나 믿음을 줍니다.",
      weakness: "고집이 세고 변화에 둔감할 수 있습니다. 생각이 너무 많아 결정을 내리는 데 시간이 오래 걸리기도 합니다.",
      keywords: ["중재자", "관리자", "상담가", "안정감"],
      color: "bg-yellow-50 border-yellow-100 text-yellow-700",
      tagColor: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "금(金)의 성격",
      tags: ["결단", "원칙", "의리"],
      strength: "옳고 그름이 명확하며 한번 정한 원칙은 반드시 지킵니다. 의리가 강하고 냉철한 판단력을 가진 타입입니다.",
      weakness: "지나치게 결백하거나 비판적일 수 있습니다. 융통성이 부족하여 차갑다는 인상을 주기도 합니다.",
      keywords: ["전략가", "비평가", "원칙주의자", "강인함"],
      color: "bg-slate-100 border-slate-200 text-slate-700",
      tagColor: "bg-slate-200 text-slate-600"
    },
    {
      title: "수(水)의 성격",
      tags: ["지혜", "유연", "침착"],
      strength: "생각이 깊고 지혜로우며 상황에 맞춰 변신하는 유연함이 좋습니다. 침착하게 상황을 관조하는 능력이 있습니다.",
      weakness: "속마음을 잘 드러내지 않아 비밀이 많아 보일 수 있습니다. 때로 지나치게 비관적이거나 우울해지기도 합니다.",
      keywords: ["학자", "전략가", "중재자", "유연함"],
      color: "bg-blue-50 border-blue-100 text-blue-700",
      tagColor: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>오행 성격 유형 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 타이틀 섹션 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">오행으로 보는 나의 성격 유형</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">오행 성격 유형(性格)이란?</p>
              <p>사주를 구성하는 5가지 기운(목, 화, 토, 금, 수)은 각각 고유한 성격적 특징을 가지고 있습니다. 내 일주가 어떤 기운에 속하는지에 따라 나의 근본적인 성향이 결정됩니다.</p>
              <p>나의 강점은 살리고 약점은 보완하는 지혜, 오행 성격 유형을 통해 나 자신을 더 깊이 이해해 보세요.</p>
            </div>
          </section>

          {/* 2. 오행별 상세 성격 (이음 디자인 재현) */}
          <section className="space-y-10">
            {types.map((type, i) => (
              <div key={i} className={`${type.color} p-8 rounded-[40px] border space-y-6 shadow-sm`}>
                <div className="space-y-3">
                  <h3 className="font-black text-xl">{type.title}</h3>
                  <div className="flex gap-2">
                    {type.tags.map((tag, j) => (
                      <span key={j} className={`${type.tagColor} px-3 py-1 rounded-full text-[11px] font-bold`}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] font-bold opacity-60 mb-1">강점</p>
                    <p className="text-[14px] leading-6 font-medium">{type.strength}</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold opacity-60 mb-1">약점</p>
                    <p className="text-[14px] leading-6 font-medium">{type.weakness}</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {type.keywords.map((word, k) => (
                        <span key={k} className="text-[12px] bg-white/50 px-3 py-1 rounded-lg border border-black/5 font-bold">#{word}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
