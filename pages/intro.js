import React from 'react';
import Head from 'next/head';

export default function Intro() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans">
      <Head>
        <title>서비스 소개 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-32">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-8 py-6">
          <a href="/" className="text-[11px] text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 홈으로
          </a>
        </div>

        <main className="px-10 py-4 space-y-16">
          {/* 1. 타이틀 */}
          <section>
            <h1 className="text-[28px] font-black text-slate-800 mb-10 tracking-tight">서비스 소개</h1>
          </section>

          {/* 2. 서비스 정의 섹션 (우리 사이란?) */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">우리 사이란?</h2>
            <div className="text-slate-500 text-[13px] leading-7 space-y-4">
              <p>
                우리 사이는 사주 일주를 기반으로 그룹 내 구성원들의 궁합을 분석해주는 서비스입니다. [cite: 2026-02-13] 
                친구, 동료, 가족 등 모임 구성원들이 서로 얼마나 잘 맞는지 재미있게 확인해볼 수 있습니다. [cite: 2026-02-13] 
                모임 전체의 N:N 궁합은 물론, 나를 중심으로 여러 친구와의 궁합을 순위로 비교하는 '나와 궁합', 매일 바뀌는 '오늘의 일진', 사주를 쉽게 배울 수 있는 '사주 가이드'까지 다양한 기능을 제공합니다. [cite: 2026-02-13]
              </p>
              <p>
                '우리 사이'라는 이름은 사람과 사람 사이의 인연을 '잇는다'는 의미를 담고 있습니다. [cite: 2026-02-13] 
                단순한 궁합 결과를 넘어, 서로를 더 깊이 이해하고 관계를 돈독히 하는 계기가 되길 바라는 마음으로 만들었습니다. [cite: 2026-02-13]
              </p>
            </div>
          </section>

          {/* 3. 기획 의도 섹션 (우리 사이를 만든 이유) */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">우리 사이를 만든 이유</h2>
            <div className="text-slate-500 text-[13px] leading-7 space-y-4">
              <p>
                "우리 사이 운명일까?" 라는 호기심 섞인 질문에서 시작되었습니다. [cite: 2026-02-13] 
                기존의 딱딱한 운세 서비스에서 벗어나, 모임 구성원들이 다 함께 웃고 즐기며 서로의 성향을 이해할 수 있는 놀이터를 만들고 싶었습니다. [cite: 2026-02-13] 
                우리 사이를 통해 여러분의 소중한 인연들이 더욱 특별하게 이어지기를 응원합니다. [cite: 2026-02-13]
              </p>
            </div>
          </section>

          {/* 4. 서비스 특징 섹션 (이미지 내용 100% 반영) */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-black text-slate-800">서비스 특징</h2>
            <ul className="text-slate-500 text-[13px] leading-7 space-y-5">
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 완전 무료:</span>
                모든 기능을 무료로 이용할 수 있습니다. 숨겨진 유료 기능이나 결제 유도가 없습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 회원가입 불필요:</span>
                번거로운 회원가입 없이 바로 사용할 수 있습니다. 링크 하나로 친구들을 초대하고 함께 결과를 확인하세요.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 그룹 궁합 분석:</span>
                1:1 궁합이 아닌, 최대 12명까지의 그룹 전체 궁합을 시각적으로 분석합니다. 누가 누구와 가장 잘 맞는지 한눈에 파악할 수 있습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 나와 궁합 분석:</span>
                내가 방장이 되어 친구와의 궁합을 순위로 확인할 수 있습니다. 친구는 나와의 궁합 결과와 자신의 순위를 볼 수 있고, 전체 순위표는 방장만 확인할 수 있어요.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 쉬운 해석:</span>
                전통적인 사주 이론을 누구나 이해할 수 있는 현대적인 언어로 풀어서 설명해드립니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 프라이버시 보호:</span>
                입력된 개인정보(이름, 생년월일, 성별 등)는 궁합 계산에만 사용되며, 제3자에게 판매하거나 마케팅 목적으로 활용하지 않습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 오늘의 일진:</span>
                매일 바뀌는 그룹 멤버들의 운세 순위를 확인할 수 있습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 모임 관리:</span>
                관리용 PIN을 설정하면 멤버 삭제, 모임 이름 변경, 모임 삭제 등을 직접 관리할 수 있습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 사주 가이드:</span>
                사주 초보 가이드부터 오행, 천간지지, 60일주, 띠별 궁합까지 다양한 학습 콘텐츠를 무료로 제공합니다.
              </li>
            </ul>
          </section>

          {/* 5. 이용 방법 섹션 */}
          <section className="space-y-8">
            <h2 className="text-[18px] font-black text-slate-800">어떻게 작동하나요?</h2>
            
            <div className="space-y-4">
              <p className="text-[14px] font-bold text-slate-700">모임 궁합</p>
              <ol className="text-slate-500 text-[13px] leading-7 list-decimal pl-5 space-y-2">
                <li>모임 방장이 방 이름을 정하고 정보를 입력합니다.</li>
                <li>생성된 링크를 친구들에게 공유합니다.</li>
                <li>친구들이 정보를 입력하면 실시간으로 궁합이 업데이트됩니다.</li>
              </ol>
            </div>

            <div className="space-y-4">
              <p className="text-[14px] font-bold text-slate-700">나와 궁합</p>
              <ol className="text-slate-500 text-[13px] leading-7 list-decimal pl-5 space-y-2">
                <li>궁합방 만들기: 내 정보를 입력하고 방 이름과 PIN을 설정합니다.</li>
                <li>링크 공유하기: 친구들에게 공유하여 참여를 유도합니다.</li>
                <li>순위 확인하기: 방장만 PIN을 입력해 전체 순위를 확인합니다.</li>
              </ol>
            </div>
          </section>

          {/* 6. 이론적 배경 섹션 */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">왜 사주 일주인가요?</h2>
            <div className="text-slate-500 text-[13px] leading-7 space-y-4">
              <p>사주(四柱)는 태어난 연, 월, 일, 시를 네 개의 기둥으로 표현한 것입니다. 그 중 일주(日柱)는 태어난 '날'에 해당하는 간지로, 개인의 본질적인 성향을 나타내는 핵심 요소입니다.</p>
              <p>우리 사이는 이러한 전통 명리학을 현대적으로 재해석하여 누구나 쉽게 이해할 수 있는 방식으로 결과를 제공합니다.</p>
            </div>
          </section>

          {/* 7. 참고사항 및 연락처 */}
          <section className="space-y-8 pt-10 border-t border-slate-50">
            <div>
              <h2 className="text-[16px] font-bold text-slate-800 mb-4">참고사항</h2>
              <ul className="text-slate-400 text-[12px] leading-6 list-disc pl-5 space-y-1">
                <li>본 서비스는 재미와 친목 도모를 위한 엔터테인먼트 목적으로 제작되었습니다.</li>
                <li>궁합 결과는 절대적인 지표가 아니니 가볍게 즐겨주세요.</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-[14px] font-bold text-slate-800">연락처</h2>
              <p className="text-[12px] text-purple-400 font-medium cursor-pointer">hello@oursai.kr</p>
              <p className="text-[11px] text-slate-300 mt-6">서비스 출시: 2026년 2월</p>
            </div>
          </section>
        </main>

        <footer className="px-8 py-12 bg-white text-center space-y-6">
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold">
            <a href="/guide">사주 가이드</a>
            <span className="text-slate-100">|</span>
            <a href="/faq">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold">
            <a href="/terms">이용약관</a>
            <span className="text-slate-100">|</span>
            <a href="/privacy">개인정보처리방침</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
