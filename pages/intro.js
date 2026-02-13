import React from 'react';
import Head from 'next/head';

export default function Intro() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans">
      <Head>
        <title>서비스 소개 | 우리사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-32">
        
        {/* --- 상단 네비게이션 (이미지 최상단 '홈으로' 재현) --- */}
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

          {/* 2. 서비스 정의 섹션 (이음이란?) */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">우리사이란?</h2>
            <div className="text-slate-500 text-[13px] leading-7 space-y-4">
              <p>여기에 서비스에 대한 설명을 입력하세요. 이미지 속 '이음이란?' 섹션의 내용을 참고하여 작성하시면 됩니다.</p>
              <p>두 번째 단락 설명입니다. 서비스의 핵심 가치나 이름의 의미를 적어주세요.</p>
            </div>
          </section>

          {/* 3. 기획 의도 섹션 (만든 이유) */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">우리사이를 만든 이유</h2>
            <div className="text-slate-500 text-[13px] leading-7 space-y-4">
              <p>서비스를 기획하게 된 배경이나 사용자들에게 전하고 싶은 메시지를 입력하세요.</p>
            </div>
          </section>

          {/* 4. 서비스 특징 섹션 (이미지 스타일 100% 재현) */}
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
                1:1 궁합이 아닌, 최대 12명까지의 그룹 전체 궁합을 시각적으로 분석합니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 나와 궁합 분석:</span>
                내가 방장이 되어 친구와의 궁합을 순위로 확인할 수 있습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 쉬운 해석:</span>
                전통적인 사주 이론을 누구나 이해할 수 있는 현대적인 언어로 풀어서 설명해드립니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 프라이버시 보호:</span>
                입력된 개인정보는 궁합 계산에만 사용되며, 외부로 유출되지 않습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 오늘의 일진:</span>
                매일 바뀌는 그룹 멤버들의 운세 순위를 확인할 수 있습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 모임 관리:</span>
                관리용 PIN을 설정하여 모임의 세부 사항을 직접 관리할 수 있습니다.
              </li>
              <li>
                <span className="font-bold text-slate-700 block mb-1">· 사주 가이드:</span>
                다양한 사주 관련 학습 콘텐츠를 무료로 제공합니다.
              </li>
            </ul>
          </section>

          {/* 5. 이용 방법 섹션 */}
          <section className="space-y-6">
            <h2 className="text-[18px] font-black text-slate-800">어떻게 작동하나요?</h2>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[14px] font-bold text-slate-700">모임 궁합</p>
                <ol className="text-slate-500 text-[13px] leading-7 list-decimal pl-5 space-y-2">
                  <li>방장이 방 이름을 정하고 정보를 입력합니다.</li>
                  <li>생성된 링크를 친구들에게 공유합니다.</li>
                  <li>친구들이 참여하면 실시간으로 결과가 업데이트됩니다.</li>
                </ol>
              </div>
              <div className="space-y-3">
                <p className="text-[14px] font-bold text-slate-700">나와 궁합</p>
                <ol className="text-slate-500 text-[13px] leading-7 list-decimal pl-5 space-y-2">
                  <li>내 정보를 입력하고 방을 만듭니다.</li>
                  <li>친구들에게 링크를 공유하여 참여를 유도합니다.</li>
                  <li>나와의 궁합 순위를 확인합니다.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* 6. 이론적 배경 섹션 */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">왜 사주 일주인가요?</h2>
            <div className="text-slate-500 text-[13px] leading-7 space-y-4">
              <p>사주 일주에 대한 학술적 근거와 서비스에서 이를 선택한 이유를 작성하세요.</p>
            </div>
          </section>

          {/* 7. 참고사항 섹션 */}
          <section className="space-y-5">
            <h2 className="text-[18px] font-black text-slate-800">참고사항</h2>
            <ul className="text-slate-400 text-[12px] leading-6 list-disc pl-5 space-y-2">
              <li>본 서비스는 엔터테인먼트 목적으로 제작되었습니다.</li>
              <li>궁합 결과는 절대적인 지표가 아니니 가볍게 즐겨주세요.</li>
            </ul>
          </section>

          {/* 8. 연락처 섹션 */}
          <section className="space-y-3 pt-10 border-t border-slate-50">
            <h2 className="text-[14px] font-bold text-slate-800">연락처</h2>
            <p className="text-[12px] text-purple-400 font-medium">hello@oursai.kr</p>
            <p className="text-[11px] text-slate-300 mt-6">서비스 출시: 2026년 2월</p>
          </section>
        </main>

        {/* --- 이미지 하단 푸터 링크 재현 --- */}
        <footer className="px-8 py-12 bg-white text-center space-y-6">
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold">
            <a href="/guide" className="hover:text-slate-400">사주 가이드</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-slate-400">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-slate-400">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-5 text-[11px] text-slate-300 font-bold">
            <a href="/terms" className="hover:text-slate-400">이용약관</a>
            <span className="text-slate-100">|</span>
            <a href="/privacy" className="hover:text-slate-400">개인정보처리방침</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
