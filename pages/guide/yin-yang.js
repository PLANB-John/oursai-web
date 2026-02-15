import React from 'react';
import Head from 'next/head';

export default function YinYangGuide() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>음양 이해하기 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 1. 도입부: 음양이란? */}
          <section className="space-y-6">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">음양 이해하기</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">세상의 두 가지 큰 흐름</p>
              <p>음양(陰陽)이란 우주와 만물을 구성하는 상반된 두 가지 성질의 기운을 말합니다. 낮과 밤, 남과 여, 강함과 부드러움처럼 서로 대립하면서도 하나가 없으면 다른 하나도 존재할 수 없는 보완적인 관계입니다.</p>
              <p>사주 명리학에서는 내 사주 구성이 양의 기운이 강한지, 혹은 음의 기운이 강한지에 따라 성격의 외향성과 내향성, 에너지의 발산과 응축을 분석합니다.</p>
            </div>
          </section>

          {/* 2. 양(陽)의 특성 */}
          <section className="space-y-4">
            <div className="bg-orange-50 p-7 rounded-[32px] border border-orange-100 space-y-3">
              <p className="font-bold text-orange-700 text-[17px]">밝고 뜨거운 에너지, 양(陽)</p>
              <p className="text-[13px] text-orange-600 leading-6">해처럼 밝게 비추고 위로 솟구치며 밖으로 발산하는 기운입니다.</p>
              <ul className="text-[12px] text-orange-500/80 space-y-2 pt-2">
                <li>• 성향: 활동적, 진취적, 열정적, 지배적</li>
                <li>• 키워드: 하늘, 낮, 봄/여름, 남자, 홀수, 강함</li>
              </ul>
            </div>
          </section>

          {/* 3. 음(陰)의 특성 */}
          <section className="space-y-4">
            <div className="bg-blue-50 p-7 rounded-[32px] border border-blue-100 space-y-3">
              <p className="font-bold text-blue-700 text-[17px]">조용하고 차가운 에너지, 음(陰)</p>
              <p className="text-[13px] text-blue-600 leading-6">달처럼 은은하고 아래로 가라앉으며 안으로 응축하는 기운입니다.</p>
              <ul className="text-[12px] text-blue-500/80 space-y-2 pt-2">
                <li>• 성향: 안정적, 수동적, 침착함, 수용적</li>
                <li>• 키워드: 땅, 밤, 가을/겨울, 여자, 짝수, 부드러움</li>
              </ul>
            </div>
          </section>

          {/* 4. 사주에서의 음양 균형 */}
          <section className="space-y-6">
            <h2 className="text-[20px] font-black text-slate-800">사주에서의 음양 균형</h2>
            <p className="text-[14px] text-slate-600 leading-7">건강한 삶과 관계는 어느 한쪽으로 치우치지 않는 조화에서 나옵니다.</p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                <p className="font-bold text-slate-700 text-sm mb-2">양의 과다</p>
                <p className="text-[11px] text-slate-400 leading-5">추진력이 좋으나 성급하고 독단적일 수 있음</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                <p className="font-bold text-slate-700 text-sm mb-2">음의 과다</p>
                <p className="text-[11px] text-slate-400 leading-5">신중하고 깊이가 있으나 소극적이고 침체될 수 있음</p>
              </div>
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
