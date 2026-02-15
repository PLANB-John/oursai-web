import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>개인정보처리방침 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 border-b border-slate-50">
          <a href="/" className="text-xs text-slate-400 font-bold hover:text-purple-400 transition-colors">
            ← 홈으로
          </a>
        </div>

        <main className="px-8 py-12 space-y-10">
          <section className="space-y-4">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">개인정보처리방침</h1>
            <p className="text-[13px] text-slate-500 leading-6">
              우리 사이(이하 "서비스")는 이용자의 개인정보를 소중하게 생각하며, 관련 법령을 준수합니다. 본 방침은 서비스가 어떤 정보를 수집하고 어떻게 활용하는지 안내합니다.
            </p>
          </section>

          <div className="space-y-12 text-[14px] leading-7 text-slate-600">
            
            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">1. 수집하는 개인정보</h2>
              <p className="font-bold text-slate-700 text-[13px] mb-1">필수 항목</p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>이름: 모델 내 표시 및 궁합 결과 식별</li>
                <li>생년월일: 사주 일주 계산 및 궁합 분석</li>
                <li>성별: 사주 대운 계산 및 궁합 분석의 정확도 향상</li>
              </ul>
              <p className="font-bold text-slate-700 text-[13px] mt-4 mb-1">선택 항목</p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>생시(태어난 시간): 시주(時柱)를 반영한 정밀 분석</li>
                <li>모임/궁합방 이름: 그룹 식별 및 표시용</li>
                <li>관리용 PIN(숫자 4자리): 모임 관리 권한 인증</li>
                <li>이메일: 의견 보내기(피드백) 이용 시 답변 회신 목적</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">2. 개인정보의 이용 목적</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>사주 일주 계산 및 궁합 분석 결과 제공</li>
                <li>모임 내 멤버 간 궁합 결과 생성 및 표시</li>
                <li>오늘의 일진(운세) 순위 제공</li>
                <li>모임 관리 기능 제공 (PIN 인증)</li>
                <li>사용자 피드백 수집 및 서비스 개선</li>
                <li>서비스 이용 통계 분석 및 광고 게재</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">3. 개인정보 처리 위탁 및 국외 이전</h2>
              <p className="text-[13px]">서비스는 원활한 운영을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다.</p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>Supabase Inc.: 데이터베이스 저장 및 처리 (미국)</li>
                <li>Google LLC: 서비스 이용 통계 분석, 광고 게재 (미국)</li>
                <li>주식회사 카카오: 광고 게재 (대한민국)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">4. 쿠키(Cookie) 사용</h2>
              <p className="text-[13px]">서비스는 맞춤형 광고 제공 및 이용자 분석을 위해 쿠키를 사용합니다.</p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>Google Analytics: 방문자 수, 페이지 조회 수 등 통계 수집</li>
                <li>Google AdSense: 맞춤형 광고 제공</li>
                <li>카카오 애드핏: 광고 게재 및 효과 측정</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">5. 제3자 광고</h2>
              <p className="text-[13px]">
                서비스는 Google AdSense 및 카카오 애드핏을 통해 광고를 게재하며, 각 플랫폼의 개인정보 처리방침에 따라 이용자의 관심 기반 광고를 제공할 수 있습니다.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">6. 개인정보의 보관 및 파기</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>수집된 정보는 서비스 제공 목적으로만 보관됩니다.</li>
                <li>모임 데이터는 사용자의 삭제 요청 또는 모임 관리 기능을 통한 삭제 전까지 유지됩니다.</li>
                <li>피드백 데이터는 개선 목적으로 보관되며, 삭제를 원하시면 고객센터로 요청해 주세요.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">7. 이용자의 권리</h2>
              <p className="text-[13px]">이용자는 언제든지 본인의 정보에 대한 열람, 수정, 삭제를 요청할 수 있습니다.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">8. 연락처</h2>
              <p className="text-[13px]">개인정보 관련 문의는 아래 이메일로 연락해 주세요.</p>
              <p className="text-[13px] font-bold text-slate-800">이메일: hello@oursai.kr</p>
            </section>

            <p className="text-[12px] text-slate-400 pt-10 border-t border-slate-50">
              시행일: 2026년 2월 13일
            </p>
          </div>
        </main>

        {/* --- 우리 사이 고유 푸터 (일관성 유지) --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/guide" className="hover:text-purple-400">사주 가이드</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/feedback" className="hover:text-purple-400">의견 보내기</a>
            <span className="text-slate-100">|</span>
            <a href="/terms" className="hover:text-purple-400">이용약관</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
