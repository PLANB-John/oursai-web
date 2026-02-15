import React from 'react';
import Head from 'next/head';

export default function MbtiVsSajuGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>MBTI vs 사주 | 우리 사이 (oursai.kr)</title>
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
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">MBTI vs 사주 — 나를 더 잘 아는 건 어느 쪽?</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">나를 정의하는 두 가지 도구</p>
              <p>나를 이해하고 싶을 때 가장 먼저 떠올리는 두 가지가 있습니다. 서양의 성격 유형 검사인 MBTI와 동양의 운명학인 사주입니다.</p>
              <p>이 두 도구는 접근 방식은 다르지만, 결국 '나는 누구인가'라는 질문에 답을 준다는 공통점이 있습니다. 각각 어떤 특징이 있는지 비교해 볼까요?</p>
            </div>
          </section>

          {/* 2. 한눈에 보는 비교표 (이음 디자인 재현) */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">한눈에 보는 비교표</h2>
            <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              <table className="w-full text-[13px] text-left">
                <thead className="bg-slate-100 text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">구분</th>
                    <th className="px-6 py-4">MBTI</th>
                    <th className="px-6 py-4">사주</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr><td className="px-6 py-4 font-bold bg-slate-50/50">근거</td><td className="px-6 py-4">자기 보고식 설문</td><td className="px-6 py-4">태어난 시간(간지)</td></tr>
                  <tr><td className="px-6 py-4 font-bold bg-slate-50/50">관점</td><td className="px-6 py-4">심리학적 선호도</td><td className="px-6 py-4">동양 철학적 기운</td></tr>
                  <tr><td className="px-6 py-4 font-bold bg-slate-50/50">유형</td><td className="px-6 py-4">16가지 유형</td><td className="px-6 py-4">60가지 일주 중심</td></tr>
                  <tr><td className="px-6 py-4 font-bold bg-slate-50/50">변화 여부</td><td className="px-6 py-4">시간에 따라 변함</td><td className="px-6 py-4">태어난 기운은 고정</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. 각 도구의 장단점 (이음 텍스트 반영) */}
          <section className="space-y-10">
            <div className="bg-blue-50 p-7 rounded-[40px] border border-blue-100 space-y-4">
              <h3 className="font-bold text-blue-700 text-[16px]">💡 MBTI의 매력</h3>
              <p className="text-[13px] text-blue-600 leading-6">현재 나의 심리 상태와 선호도를 명확한 키워드로 보여줍니다. 사회적 관계와 소통 방식을 이해하는 데 매우 직관적입니다.</p>
            </div>
            <div className="bg-purple-50 p-7 rounded-[40px] border border-purple-100 space-y-4">
              <h3 className="font-bold text-purple-700 text-[16px]">☯️ 사주의 깊이</h3>
              <p className="text-[13px] text-purple-600 leading-6">내가 타고난 본질적인 기질과 인생의 커다란 흐름을 보여줍니다. 단순한 성격을 넘어 다른 사람과의 에너지 조화를 깊이 있게 분석합니다.</p>
            </div>
          </section>

          {/* 4. 오행과 MBTI 연결 (이음 텍스트 반영) */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">오행과 MBTI의 조화</h2>
            <div className="space-y-4">
              {[
                { t: "목(木) — 진취적 리더", d: "새로운 시작을 즐기는 ENTJ, ENFP 유형과 닮아 있습니다.", c: "bg-green-50 text-green-700" },
                { t: "화(火) — 열정적 표현가", d: "자신을 드러내고 소통하는 ESFP, ENTP 유형과 유사한 에너지를 가집니다.", c: "bg-red-50 text-red-700" },
                { t: "토(土) — 포용적 중재자", d: "안정감을 주는 ISFJ, ESFJ 유형처럼 사람 사이를 연결하는 힘이 있습니다.", c: "bg-yellow-50 text-yellow-700" },
                { t: "금(金) — 원칙적 전략가", d: "논리적인 ISTJ, INTJ 유형처럼 결단력과 원칙을 중시합니다.", c: "bg-slate-100 text-slate-700" },
                { t: "수(水) — 지혜로운 관찰자", d: "생각이 깊고 유연한 INFP, INFJ 유형의 깊은 내면과 닮아 있습니다.", c: "bg-blue-50 text-blue-700" }
              ].map((item, i) => (
                <div key={i} className={`${item.c} p-6 rounded-3xl border border-black/5`}>
                  <p className="font-bold text-[14px] mb-1">{item.t}</p>
                  <p className="text-[12px] opacity-80 leading-5">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. 맺음말 (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50">
            <h2 className="text-[18px] font-black text-slate-800">어떤 게 더 잘 맞나요?</h2>
            <p className="text-[14px] text-slate-600 leading-7">어느 하나가 정답은 아닙니다. MBTI는 현재 내 마음의 '거울'이고, 사주는 내가 타고난 '지도'와 같습니다. 두 도구를 함께 활용한다면 나라는 존재를 더욱 입체적으로 이해할 수 있을 거예요.</p>
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
