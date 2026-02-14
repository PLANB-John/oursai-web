import React from 'react';
import Head from 'next/head';

export default function BeginnerGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>사주 초보 완전 가이드 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부: 사주, 어렵지 않아요 */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">사주 초보 완전 가이드</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg">사주, 어렵지 않아요</p>
              <p>‘사주’라는 단어만 들으면 복잡하고 어려울 것 같지만, 사실 핵심 개념은 생각보다 단순합니다. 사주는 태어난 시간에 담긴 기운을 조합해 개인의 성격과 삶의 방향성을 파악하는 지혜로운 체계입니다.</p>
              <p>최근에는 MBTI가 16가지 유형으로 사람을 분류하듯 사주는 60가지 일주를 기준으로 훨씬 더 세밀하게 사람의 성격과 관계를 분석합니다. 다만 MBTI와 달리 사주명리학은 수천 년의 역사와 경험에 기반한 동양의 통계 학문이라는 점에 매력이 있습니다.</p>
              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 text-purple-600 font-medium">
                이 가이드를 끝까지 읽으시면 사주의 기본 구조, 일주, 오행, 궁합의 핵심을 모두 이해하실 수 있습니다. 천천히 따라와 보세요.
              </div>
            </div>
          </section>

          {/* 2. 사주의 기본 구조 */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">사주(四柱)의 기본 구조</h2>
            <p className="text-[14px] text-slate-600 leading-7">사주는 네 개의 기둥(연, 월, 일, 시)을 말합니다. 태어난 해, 달, 날, 시간을 각각 하나의 기둥으로 보고, 각 기둥은 하늘의 기운인 천간(天干)과 땅의 기운인 지지(地支)라는 두 글자로 구성됩니다. 내 기둥 x 두 글자 = 총 8글자, 이것이 바로 ‘사주팔자(四柱八字)’입니다.</p>
            
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: '연주(뿌리)', t: '천간', b: '지지', desc: '태어난 해' },
                { label: '월주(가지)', t: '천간', b: '지지', desc: '태어난 달' },
                { label: '일주(몸통)', t: '천간', b: '지지', desc: '태어난 날', active: true },
                { label: '시주(열매)', t: '천간', b: '지지', desc: '태어난 시간' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[10px] text-slate-400 font-bold mb-1">{item.label}</span>
                  <div className={`py-4 rounded-xl border font-bold text-[13px] ${item.active ? 'bg-purple-100 border-purple-200 text-purple-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>{item.t}</div>
                  <div className={`py-4 rounded-xl border font-bold text-[13px] ${item.active ? 'bg-purple-100 border-purple-200 text-purple-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>{item.b}</div>
                  <span className="text-[10px] text-slate-400 mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 핵심은 일주 */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">핵심은 일주(日柱)</h2>
            <p className="text-[14px] text-slate-600 leading-7">사주에서 가장 중요한 기둥은 일주(日柱)입니다. 일주의 천간을 ‘일간(日干)’이라 하는데, 이것이 바로 ‘나 자신’을 의미합니다.</p>
            <p className="text-[14px] text-slate-600 leading-7">사주의 나머지 7글자는 모두 이 일주를 중심으로 해석됩니다. 내 주변의 환경, 관계, 에너지가 어떠한지를 일간과의 관계를 통해 파악하는 것이죠. 마치 태양계에서 태양이 중심인 것처럼, 사주에서는 일간이 모든 해석의 기준점입니다.</p>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-slate-600 text-[14px] leading-7 font-medium">
              여덟 자의 이름표 가운데 주인공은 나(일간)입니다. 생년월일만 알면 일주를 통해 내 성향의 핵심적 특징과 다른 사람과의 관계를 충분히 파악할 수 있습니다.
            </div>
          </section>

          {/* 4. 천간과 지지 */}
          <section className="space-y-8">
            <h2 className="text-[20px] font-black text-slate-800">천간과 지지, 한눈에 이해하기</h2>
            <div className="bg-slate-50 p-7 rounded-[32px] border border-slate-100 space-y-4">
              <p className="font-bold text-slate-800 text-[15px]">천간(天干) — 하늘의 기운</p>
              <p className="text-[13px] text-slate-500 leading-6">정신적 성향, 가치관, 사고방식을 나타냅니다.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['갑(木)', '을(木)', '병(火)', '정(火)', '무(土)', '기(土)', '경(金)', '신(金)', '임(水)', '계(水)'].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white rounded-full border border-slate-200 text-[11px] font-bold text-slate-400">{item}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-7 rounded-[32px] border border-slate-100 space-y-4">
              <p className="font-bold text-slate-800 text-[15px]">지지(地支) — 땅의 기운</p>
              <p className="text-[13px] text-slate-500 leading-6">행동 패턴, 습관, 생활 방식을 나타냅니다.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['자(子)', '축(丑)', '인(寅)', '묘(卯)', '진(辰)', '사(巳)', '오(午)', '미(未)', '신(申)', '유(酉)', '술(戌)', '해(亥)'].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white rounded-full border border-slate-200 text-[11px] font-bold text-slate-400">{item}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 5. 오행 설명 */}
          <section className="space-y-6 text-center">
            <h2 className="text-[20px] font-black text-slate-800 text-left">오행(五行)의 5가지 기운</h2>
            <p className="text-[14px] text-slate-600 leading-7 text-left">만물을 구성하는 다섯 가지 기본 기운을 말합니다. 천간과 지지 모두 오행 중 하나에 속하며, 이 오행의 상호작용이 사주 해석의 핵심입니다.</p>
            <div className="grid grid-cols-5 gap-2 pt-4">
              {[
                { n: '목(木)', s: '성장, 시작', c: 'bg-green-100 text-green-700' },
                { n: '화(火)', s: '열정, 표현', c: 'bg-red-100 text-red-700' },
                { n: '토(土)', s: '신뢰, 중재', c: 'bg-yellow-100 text-yellow-700' },
                { n: '금(金)', s: '결단, 원칙', c: 'bg-slate-200 text-slate-700' },
                { n: '수(水)', s: '지혜, 유연', c: 'bg-blue-100 text-blue-700' }
              ].map((o, idx) => (
                <div key={idx} className={`${o.c} py-5 rounded-2xl flex flex-col gap-1 shadow-sm`}>
                  <span className="font-bold text-sm">{o.n}</span>
                  <span className="text-[8px] opacity-60">{o.s}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. 자주 묻는 질문 */}
          <section className="space-y-10">
            <h2 className="text-[20px] font-black text-slate-800">자주 묻는 질문</h2>
            <div className="space-y-10">
              {[
                { q: "사주를 보려면 태어난 시간도 알아야 하나요?", a: "아니요! 태어난 날(일주)만으로도 핵심 성향 파악은 충분합니다. 다만 태어난 시간(시주)까지 알면 훨씬 더 정밀한 분석이 가능합니다." },
                { q: "띠와 일주 중 무엇이 더 중요한가요?", a: "현대 명리학에서는 띠(연주)보다 일주를 훨씬 더 중요하게 여깁니다. 띠는 내가 속한 세대의 성향이라면, 일주는 ‘나 자신’의 본질적인 성향이기 때문입니다." },
                { q: "궁합이 안 좋으면 어떡하죠?", a: "궁합은 점괘가 아닌 관계의 기후 정보입니다. 비가 오면 우산을 쓰듯, 서로의 차이를 미리 알고 배려하는 지혜로 활용하시는 것이 좋습니다." }
              ].map((faq, i) => (
                <div key={i} className="space-y-3">
                  <p className="font-bold text-[16px] text-slate-800 italic flex gap-2"><span>Q.</span> {faq.q}</p>
                  <p className="text-[14px] text-slate-500 leading-7 pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- 우리 사이 고유 하단 섹션 (이미지 기반 재현) --- */}
          <section className="pt-20 space-y-4">
            <button className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-bold text-[15px] border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
              모임 궁합 확인해보기 →
            </button>
            <button className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-bold text-[15px] border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
              나와 궁합 확인해보기 →
            </button>
          </section>
        </main>

        {/* --- 우리 사이 고유 푸터 (이미지 기반 재현) --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10">
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
          <p className="text-[11px] text-slate-200 font-medium">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
