import React from 'react';
import Head from 'next/head';

export default function ZodiacGuide() {
  const zodiacData = [
    { name: "쥐띠", year: "자(子)", desc: "근면하고 검소하며 기회 포착 능력이 뛰어납니다. 사교적이지만 경계심도 강한 편입니다.", best: "용띠, 원숭이띠", worst: "말띠", color: "bg-slate-50 border-slate-200" },
    { name: "소띠", year: "축(丑)", desc: "성실하고 인내심이 강하며 끈기가 있습니다. 보수적이지만 한번 정한 일은 끝까지 해냅니다.", best: "쥐띠, 뱀띠, 닭띠", worst: "양띠", color: "bg-yellow-50 border-yellow-100" },
    { name: "호랑이띠", year: "인(寅)", desc: "용맹하고 열정적이며 리더십이 강합니다. 독립심이 크지만 때로 독단적일 수 있습니다.", best: "말띠, 개띠", worst: "원숭이띠", color: "bg-orange-50 border-orange-100" },
    { name: "토끼띠", year: "묘(卯)", desc: "온순하고 영리하며 예술적 감각이 뛰어납니다. 신중하지만 때로 소심해 보일 수 있습니다.", best: "양띠, 돼지띠, 개띠", worst: "닭띠", color: "bg-green-50 border-green-100" },
    { name: "용띠", year: "진(辰)", desc: "포부가 크고 에너지가 넘치며 추진력이 좋습니다. 개성이 강해 어디서나 눈에 띕니다.", best: "쥐띠, 원숭이띠, 닭띠", worst: "개띠", color: "bg-blue-50 border-blue-100" },
    { name: "뱀띠", year: "사(巳)", desc: "지혜롭고 품위가 있으며 통찰력이 뛰어납니다. 냉철해 보이지만 내면은 정이 많습니다.", best: "소띠, 닭띠", worst: "돼지띠", color: "bg-emerald-50 border-emerald-100" },
    { name: "말띠", year: "오(午)", desc: "활발하고 독립심이 강하며 성격이 시원시원합니다. 자유를 사랑하고 사교적입니다.", best: "호랑이띠, 개띠, 양띠", worst: "쥐띠", color: "bg-red-50 border-red-100" },
    { name: "양띠", year: "미(未)", desc: "온화하고 인정이 많으며 평화를 사랑합니다. 이해심이 넓지만 때로 우유부단할 수 있습니다.", best: "토끼띠, 돼지띠, 말띠", worst: "소띠", color: "bg-stone-50 border-stone-100" },
    { name: "원숭이띠", year: "신(申)", desc: "재주가 많고 영리하며 임기응변에 능합니다. 유머 감각이 있고 사교성이 매우 좋습니다.", best: "쥐띠, 용띠", worst: "호랑이띠", color: "bg-amber-50 border-amber-100" },
    { name: "닭띠", year: "유(酉)", desc: "결단력이 있고 지능적이며 선견지명이 있습니다. 꼼꼼하고 부지런하며 의리가 강합니다.", best: "소띠, 뱀띠, 용띠", worst: "토끼띠", color: "bg-zinc-50 border-zinc-200" },
    { name: "개띠", year: "술(戌)", desc: "정직하고 신뢰가 깊으며 책임감이 강합니다. 의리가 넘치고 헌신적인 성향이 큽니다.", best: "호랑이띠, 말띠, 토끼띠", worst: "용띠", color: "bg-neutral-50 border-neutral-200" },
    { name: "돼지띠", year: "해(亥)", desc: "우직하고 정직하며 예의가 바릅니다. 이해심이 많고 낙천적인 성격의 소유자입니다.", best: "토끼띠, 양띠", worst: "뱀띠", color: "bg-pink-50 border-pink-100" }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>띠별 성격과 궁합 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-6 py-12 space-y-16">
          {/* 1. 도입부: 띠별 궁합이란? (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight px-2">12지신 띠별 성격과 궁합</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7 px-2">
              <p className="font-bold text-slate-800 text-lg italic">12지신(十二支神) 이야기</p>
              <p>우리는 태어난 해에 따라 저마다의 '띠'를 가지고 있습니다. 12가지 동물의 상징하는 띠는 개인의 기본 기질과 다른 사람과의 거시적인 조화를 파악하는 오랜 지혜입니다.</p>
              <p>현대 사주에서 '일주'가 본질이라면, '띠'는 내가 속한 사회적 토양을 의미합니다. 재미로 보는 띠별 궁합으로 나와 친구의 특징을 확인해 보세요.</p>
            </div>
          </section>

          {/* 2. 12지신 상세 성격 (이음 내용 100% 반영) */}
          <section className="space-y-8">
            {zodiacData.map((item, i) => (
              <div key={i} className={`${item.color} p-7 rounded-[32px] border space-y-4 shadow-sm`}>
                <div className="flex justify-between items-end">
                  <h3 className="font-black text-xl text-slate-800">{item.name} <span className="text-sm font-bold opacity-40">({item.year})</span></h3>
                </div>
                <p className="text-[13px] text-slate-600 leading-6">{item.desc}</p>
                <div className="pt-2 space-y-2 border-t border-black/5">
                  <p className="text-[12px]"><span className="font-bold text-blue-600">👍 잘 맞는 띠:</span> <span className="font-medium">{item.best}</span></p>
                  <p className="text-[12px]"><span className="font-bold text-red-600">👎 상극인 띠:</span> <span className="font-medium">{item.worst}</span></p>
                </div>
              </div>
            ))}
          </section>

          {/* --- 우리 사이 고유 하단 섹션 (일관성 유지) --- */}
          <section className="pt-10 space-y-4 px-2">
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
