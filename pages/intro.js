import React from 'react';
import Head from 'next/head';

export default function Intro() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10">
      <Head>
        <title>서비스 소개 | 우리사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] font-sans pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50">
          <a href="/" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 홈으로
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          {/* 타이틀 */}
          <section>
            <h1 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">서비스 소개</h1>
          </section>

          {/* 우리사이란? */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">우리사이란?</h2>
            <div className="text-slate-500 text-sm leading-7 space-y-4">
              <p>우리사이는 사주 일주를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 서비스입니다. 친구, 동료, 가족 등 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인해볼 수 있습니다.</p>
              <p>'우리사이'라는 이름은 사람과 사람 사이의 인연을 잇는다는 의미를 담고 있습니다. 단순한 궁합 결과를 넘어, 서로를 더 깊이 이해하고 관계를 돈독히 하는 계기가 되길 바라는 마음으로 만들었습니다.</p>
            </div>
          </section>

          {/* 만든 이유 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">우리사이를 만든 이유</h2>
            <div className="text-slate-500 text-sm leading-7">
              <p>"우리 진짜 잘 맞는 걸까?" 라는 가벼운 질문에서 시작되었습니다. 기존의 궁합 서비스들은 대부분 1:1 결과만 제공하거나, 복잡한 사주 지식을 요구했습니다.</p>
              <p>그래서 누구나 쉽게, 그룹 전체의 궁합을 한눈에 볼 수 있는 서비스를 만들고 싶었습니다. 모임에서 아이스브레이킹 도구로 활용하거나, 팀 빌딩에서 재미있는 대화 주제로 사용될 수 있도록 기획했습니다.</p>
            </div>
          </section>

          {/* 서비스 특징 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">서비스 특징</h2>
            <ul className="text-slate-500 text-sm leading-8 list-disc pl-5">
              <li><span className="font-bold text-slate-700">완전 무료:</span> 모든 기능을 무료로 이용할 수 있습니다.</li>
              <li><span className="font-bold text-slate-700">회원가입 불필요:</span> 번거로운 가입 없이 바로 사용 가능합니다.</li>
              <li><span className="font-bold text-slate-700">그룹 궁합 분석:</span> 최대 12명까지의 그룹 전체 궁합을 분석합니다.</li>
              <li><span className="font-bold text-slate-700">쉬운 해석:</span> 전통적인 사주 이론을 현대적인 언어로 풀어서 설명합니다.</li>
              <li><span className="font-bold text-slate-700">프라이버시 보호:</span> 입력된 정보는 분석 즉시 폐기하며 저장하지 않습니다.</li>
            </ul>
          </section>

          {/* 어떻게 작동하나요? */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">어떻게 작동하나요?</h2>
            <div className="bg-slate-50 p-6 rounded-3xl space-y-4 border border-slate-100">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <p className="text-sm text-slate-600 font-medium">모임 방장이 방 이름을 정하고 정보를 입력합니다.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <p className="text-sm text-slate-600 font-medium">생성된 링크를 친구들에게 공유합니다.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <p className="text-sm text-slate-600 font-medium">구성원이 모이면 실시간으로 궁합 결과가 업데이트됩니다.</p>
              </div>
            </div>
          </section>

          {/* 왜 사주 일주인가요? */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">왜 사주 일주인가요?</h2>
            <div className="text-slate-500 text-sm leading-7">
              <p>사주(四柱)는 태어난 연, 월, 일, 시를 네 개의 기둥으로 표현한 것입니다. 그 중 일주(日柱)는 태어난 '날'에 해당하는 간지로, 사주 명리학에서 개인의 본질적인 성향과 정체성을 나타내는 핵심 요소로 여겨집니다.</p>
              <p>우리사이는 이러한 전통적인 사주 이론을 현대적으로 재해석하여, 누구나 쉽게 이해할 수 있는 방식으로 궁합 결과를 제공합니다.</p>
            </div>
          </section>

          {/* 참고사항 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 font-bold">참고사항</h2>
            <ul className="text-slate-400 text-[12px] leading-6 list-disc pl-5">
              <li>본 서비스는 재미와 친목 도모를 위한 엔터테인먼트 목적으로 제작되었습니다.</li>
              <li>궁합 결과는 사주 원리만을 기반으로 한 단편적인 분석입니다.</li>
              <li>전문적인 상담이나 중대한 결정의 근거로 사용하기에는 적합하지 않습니다.</li>
            </ul>
          </section>

          {/* 연락처 */}
          <section className="space-y-4 pt-10 border-t border-slate-50">
            <h2 className="text-sm font-bold text-slate-800">연락처</h2>
            <p className="text-xs text-slate-400 underline cursor-pointer hover:text-purple-400">hello@oursai.kr</p>
          </section>
        </main>

        <footer className="px-8 py-10 bg-white text-center">
          <p className="text-[10px] text-slate-300 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
