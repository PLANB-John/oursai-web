import React from 'react';
import Head from 'next/head';

export default function Intro() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans">
      <Head>
        <title>서비스 소개 | 우리사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50">
          <a href="/" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 홈으로
          </a>
        </div>

        <main className="px-8 py-12 space-y-16">
          <section>
            <h1 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">서비스 소개</h1>
          </section>

          {/* 서비스 특징 섹션: 이미지 내용 100% 반영 */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">서비스 특징</h2>
            <ul className="text-slate-500 text-sm leading-7 space-y-5">
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

          {/* 이하 섹션들 유지 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">어떻게 작동하나요?</h2>
            <div className="text-slate-500 text-sm leading-7">
              <p className="mb-4">모임 궁합:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>모임 방장이 방 이름을 정하고 정보를 입력합니다.</li>
                <li>생성된 링크를 친구들에게 공유합니다.</li>
                <li>친구들이 정보를 입력하면 실시간으로 궁합이 업데이트됩니다.</li>
              </ol>
            </div>
          </section>
        </main>

        <footer className="px-8 py-10 bg-white text-center border-t border-slate-50">
          <p className="text-[10px] text-slate-300 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
