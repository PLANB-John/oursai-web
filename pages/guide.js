import React from 'react';
import Head from 'next/head';

const guideItems = [
  { title: "사주 초보 완전 가이드", desc: "사주가 처음이라면 여기서 시작하세요", icon: "🔰" },
  { title: "일주란 무엇인가", desc: "태어난 날이 알려주는 나의 본질", icon: "📅" },
  { title: "오행 이해하기", desc: "목, 화, 토, 금, 수 다섯 가지 기운", icon: "🌱" },
  { title: "음양 이해하기", desc: "만물을 이루는 두 가지 기운", icon: "🌗" },
  { title: "천간과 지지", desc: "사주를 이루는 두 축의 비밀", icon: "📜" },
  { title: "오행 성격 유형", desc: "오행으로 알아보는 나의 성격", icon: "🧠" },
  { title: "사주 궁합 보는 법", desc: "두 사람의 기운이 만나면?", icon: "🔗" },
  { title: "연애·결혼 궁합", desc: "사주로 보는 로맨틱 케미", icon: "💖" },
  { title: "친구·직장 궁합", desc: "모임과 팀의 케미를 분석하면?", icon: "👥" },
  { title: "띠별 성격과 궁합", desc: "12지신 동물들의 특징과 관계", icon: "🐯" },
  { title: "60갑자 일주표", desc: "60가지 일주 한눈에 보기", icon: "🔢" },
  { title: "사주 용어 사전", desc: "핵심 용어를 한곳에서 확인", icon: "📖" },
  { title: "부모·자녀 궁합", desc: "오행으로 보는 가족 관계의 비밀", icon: "🏠" },
  { title: "MBTI vs 사주", desc: "나를 더 잘 아는 건 어느 쪽?", icon: "🧪" },
  { title: "사주로 보는 직업 적성", desc: "오행에 맞는 직장 찾기", icon: "💼" }
];

export default function Guide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans">
      <Head>
        <title>사주 가이드 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/intro" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
          <a href="/" className="text-xs text-slate-400 font-bold hover:text-purple-400 transition-colors">홈으로</a>
        </div>

        <main className="px-6 py-10">
          {/* 헤더 섹션 */}
          <section className="mb-10">
            <h1 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">사주 가이드</h1>
            <p className="text-[13px] text-slate-500 leading-6">
              사주는 태어난 연월일시를 천간과 지지로 표현한 동양의 전통 학문입니다. 
              복잡해 보이지만 핵심 개념만 알면 누구나 쉽게 이해할 수 있습니다. 
              이곳에서 제공하는 가이드로 사주의 세계를 쉽고 재미있게 탐험해보세요.
            </p>
          </section>

          {/* 가이드 카드 리스트 (2열 그리드) */}
          <section className="grid grid-cols-2 gap-4">
            {guideItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-5 rounded-[30px] border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">{item.title}</h3>
                <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* 하단 버튼 영역 */}
          <section className="mt-12 space-y-3">
            <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl text-[13px] font-bold border border-slate-100 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              모임 궁합 확인해보기 →
            </button>
            <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl text-[13px] font-bold border border-slate-100 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              나와 궁합 확인해보기 →
            </button>
          </section>
        </main>

        {/* 푸터 영역 */}
        <footer className="px-6 py-10 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-4 text-[11px] text-slate-300 font-bold mb-6">
            <a href="/intro">서비스 소개</a>
            <span>|</span>
            <a href="/faq">자주 묻는 질문</a>
            <span>|</span>
            <a href="/feedback">의견 보내기</a>
          </div>
          <p className="text-[10px] text-slate-200 font-medium">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
