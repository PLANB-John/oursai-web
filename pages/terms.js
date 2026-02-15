import React from 'react';
import Head from 'next/head';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>이용약관 | 우리 사이 (oursai.kr)</title>
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
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">이용약관</h1>
            <p className="text-[13px] text-slate-500 leading-6">
              본 약관은 우리 사이(이하 "서비스")의 이용 조건 및 절차에 관한 사항을 규정합니다. 서비스를 이용하시면 본 약관에 동의한 것으로 간주됩니다.
            </p>
          </section>

          {/* 약관 조항들 */}
          <div className="space-y-12 text-[14px] leading-7 text-slate-600">
            
            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">1. 서비스 개요</h2>
              <p>우리 사이는 사주 일주(日柱)를 기반으로 그룹 궁합과 1:N 궁합을 분석하는 서비스입니다. 주요 기능은 다음과 같습니다.</p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>모임 궁합: 최대 12명의 모임 구성원 간 N:N 궁합 분석</li>
                <li>나와 궁합: 방장 중심으로 1:N 궁합 순위 비교 (PIN 기반 관리)</li>
                <li>오늘의 일진: 모임 멤버들의 일일 운세 순위</li>
                <li>사주 가이드: 사주 관련 학습 콘텐츠 제공</li>
                <li>모임 관리: 관리용 PIN을 통한 멤버 삭제, 이름 변경, 모임 삭제</li>
                <li>의견 보내기: 버그 신고, 기능 제안, 일반 문의</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">2. 이용 조건</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>서비스는 별도의 회원가입 없이 누구나 이용할 수 있습니다.</li>
                <li>생성된 모임은 공유 링크를 통해 접근될 수 있습니다.</li>
                <li>이용자는 본인의 정확한 정보(이름, 생년월일, 성별)를 입력해야 합니다.</li>
                <li>이용자는 타인의 정보를 동의 없이 입력해서는 안 됩니다.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">3. 서비스 이용</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>서비스는 무료로 제공됩니다.</li>
                <li>서비스 내 광고가 게재될 수 있습니다.</li>
                <li>궁합 결과는 엔터테인먼트 목적의 참고 자료이며, 실제 인간관계를 보장하지 않습니다.</li>
                <li>궁합 분석 결과는 전문 역술인의 상담을 대체하지 않으며, 결과의 해석과 활용은 이용자의 판단에 따릅니다.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">4. 모임 관리 및 PIN</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>모임 생성 시 설정한 관리용 PIN은 모임의 관리 권한을 증명하는 유일한 수단입니다.</li>
                <li>PIN을 통해 멤버 삭제, 모임 이름 변경, 모임 삭제 등의 관리 작업을 수행할 수 있습니다.</li>
                <li>PIN의 보관 및 관리는 이용자의 책임이며, 분실 시 복구가 불가능합니다.</li>
                <li>PIN 분실로 인한 불이익에 대해 서비스는 책임지지 않습니다.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">5. 금지 행위</h2>
              <p className="text-[13px]">이용자는 다음 행위를 해서는 안 됩니다.</p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>자동화 도구(봇, 스크래퍼 등)를 이용한 대량 접근 또는 데이터 수집</li>
                <li>서비스의 정상적인 운영을 방해하는 행위</li>
                <li>타인의 개인정보를 동의 없이 수집하거나 유포하는 행위</li>
                <li>악의적 목적의 모임 대량 생성 등 서비스를 남용하는 행위</li>
                <li>서비스의 콘텐츠를 무단 크롤링하거나 상업적으로 이용하는 행위</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">6. 콘텐츠 및 지적재산권</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>서비스에서 생성·제공되는 콘텐츠(궁합 분석 결과, 일주 설명, 사주 가이드 등)의 권리는 서비스 제공자에게 귀속됩니다.</li>
                <li>개인적, 비상업적 용도로 결과를 공유할 수 있습니다.</li>
                <li>콘텐츠의 무단 복제, 배포, 상업적 이용은 금지됩니다.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">7. 면책조항</h2>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>궁합 분석 결과는 오직 앱 참고 목적으로만 제공됩니다.</li>
                <li>서비스 이용으로 인한 직접적·간접적 손해에 대해 책임지지 않습니다.</li>
                <li>서비스는 "있는 그대로" 제공되며, 결과의 정확성이나 완전성을 보장하지 않습니다.</li>
                <li>공유 링크를 통한 제3자의 모임 접근으로 발생하는 문제는 링크를 공유한 이용자의 책임입니다.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">8. 서비스 변경 및 중단</h2>
              <p className="text-[13px]">서비스 제공자는 운영상·기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 중요한 변경 사항은 서비스 내 공지를 통해 안내됩니다.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">9. 광고</h2>
              <p className="text-[13px]">서비스는 Google AdSense, 카카오 애드핏 등의 광고 플랫폼을 통해 광고를 게재합니다. 광고 내용은 서비스 제공자가 통제하지 않으며, 광고주의 책임 하에 제공됩니다.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">10. 약관의 변경</h2>
              <p className="text-[13px]">본 약관은 필요에 따라 변경될 수 있으며, 변경된 약관은 서비스 내 게시와 동시에 효력이 발생합니다. 중요한 변경 사항은 서비스 이용 시 공지합니다.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-bold text-slate-800 text-[16px]">11. 연락처</h2>
              <p className="text-[13px]">서비스 이용 관련 문의사항은 아래로 연락해 주세요.</p>
              <p className="text-[13px] font-bold text-slate-800">이메일: hello@oursai.kr</p>
            </section>

            <p className="text-[12px] text-slate-400 pt-10 border-t border-slate-50">
              시행일: 2026년 2월 10일
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
            <a href="/privacy" className="hover:text-purple-400">개인정보처리방침</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
