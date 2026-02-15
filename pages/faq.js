import React, { useState } from 'react';
import Head from 'next/head';

const faqData = [
  {
    question: "모임이나 멤버를 삭제/수정하고 싶어요",
    answer: (
      <div className="space-y-3">
        <p>모임 생성 시 설정한 관리용 PIN으로 모임을 관리할 수 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>모임 페이지 하단의 '모임 관리' 버튼을 눌러주세요.</li>
          <li>PIN 인증 후 멤버 삭제, 모임 이름 변경, 모임 삭제가 가능합니다.</li>
        </ul>
        <p className="text-[11px] text-slate-400">단, 관리용 PIN이 설정되지 않은 예전 모임은 관리 기능을 이용할 수 없습니다. 이 경우 새 모임을 만들어주세요.</p>
      </div>
    )
  },
  {
    question: "결과에 나오는 동물이 제 띠와 달라요",
    answer: (
      <div className="space-y-3">
        <p>우리 사이에서 보여드리는 동물은 '띠'가 아니라 '일주(日柱)'의 동물입니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>띠:</strong> 태어난 '해'를 기준으로 정해지는 12년 주기의 동물</li>
          <li><strong>일주:</strong> 태어난 '날'을 기준으로 정해지는 60일 주기의 동물</li>
        </ul>
        <p>사주 명리에서는 '날'을 자신을 가장 잘 나타내는 요소로 보며, 더 정확한 궁합 분석을 위해 일주를 기반으로 합니다.</p>
      </div>
    )
  },
  {
    question: "모임 링크는 어떻게 공유하나요?",
    answer: "모임 페이지 상단의 '공유' 버튼을 누르시면 됩니다. 링크 복사, 카카오톡 공유 등 다양한 방법으로 친구들에게 전달할 수 있습니다. 링크만 있으면 누구나 모임에 참여할 수 있어요."
  },
  {
    question: "다른 사람이 우리 모임을 볼 수 있나요?",
    answer: "모임 링크를 공유받지 않은 사람은 접근이 사실상 불가능합니다. 모임 주소는 무작위로 생성되는 약 281조 개의 조합 중 하나이며, 암호화되어 있어 링크 없이는 누구도 찾아올 수 없습니다."
  },
  {
    question: "모임에 몇 명까지 참여할 수 있나요?",
    answer: "한 모임에 최대 12명까지 참여할 수 있습니다. 인원이 늘어날수록 조합의 수가 기하급수적으로 늘어나기 때문에, 쾌적한 서비스 제공을 위해 인원을 제한하고 있습니다."
  },
  {
    question: "같은 친구인데 새 모임에서 궁합 점수가 달라요",
    answer: "우리 사이는 최근 궁합 분석 시스템을 업그레이드하면서 해석 방식이 더욱 정교해졌습니다. 기존 데이터와 미세한 차이가 발생할 수 있으나, 더 정확해진 새로운 결과를 기준으로 보시는 것을 추천해 드립니다."
  },
  {
    question: "'오늘의 일진'은 무엇인가요?",
    answer: "모임 멤버들의 오늘 운세 순위를 매일 확인할 수 있는 기능입니다. 그룹 페이지에서 '오늘의 일진' 탭을 눌러보세요."
  },
  {
    question: "'모임 궁합'과 '나와 궁합'은 뭐가 다른가요?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>모임 궁합:</strong> 참여자 전원의 N:N 관계를 한꺼번에 분석합니다. 모든 멤버가 서로의 궁합을 볼 수 있습니다.</li>
        <li><strong>나와 궁합:</strong> 내가 방장이 되어 친구와의 1:1 궁합을 순위별로 확인합니다. 전체 순위는 방장(PIN 입력)만 볼 수 있습니다.</li>
      </ul>
    )
  },
  {
    question: "'나와 궁합'에서 친구가 볼 수 있는 정보는?",
    answer: (
      <div className="space-y-3">
        <p>친구들은 공유받은 링크로 참여하여 다음 정보를 확인할 수 있어요.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>방장과 자신의 1:1 궁합 결과 (등급, 해석)</li>
          <li>전체 참여자 중 자신의 순위 (예: 8명 중 2위)</li>
        </ul>
        <p>단, 다른 참여자의 결과나 전체 순위표는 볼 수 없습니다. 전체 순위표는 방장만 PIN을 입력해서 확인할 수 있어요.</p>
      </div>
    )
  },
  {
    question: "'나와 궁합' PIN을 잊어버렸어요",
    answer: "현재 PIN 재설정 기능은 제공하지 않고 있습니다. PIN을 잊어버리신 경우, 새로운 궁합방을 만들어 친구들에게 다시 링크를 공유해주세요. 불편을 드려 죄송합니다. 향후 개선할 예정입니다."
  },
  {
    question: "생시(태어난 시간)는 꼭 입력해야 하나요?",
    answer: "아니요, 선택 사항입니다. 생시를 모르시더라도 궁합 분석은 정상적으로 진행됩니다. 다만, 생시를 입력하시면 시주(時柱)까지 반영된 더 정밀한 분석이 가능해요. 정확한 생시를 아시는 경우에만 입력해주세요."
  },
  {
    question: "사주 가이드는 어디서 볼 수 있나요?",
    answer: "홈 화면 하단의 '사주 알아보기' 섹션에서 다양한 가이드 콘텐츠를 확인할 수 있습니다. 사주 초보 가이드부터 오행, 천간지지, 60일주, 띠별 궁합까지 폭넓은 콘텐츠를 준비해두었으니 궁금하신 분은 가이드 페이지를 방문해보세요."
  },
  {
    question: "오류가 있거나 문의하고 싶어요",
    answer: "서비스 이용 중 문제가 발생하거나 의견이 있으시면 '의견 보내기'를 통해 알려주세요. 버그 신고, 기능 제안, 일반 문의 모두 환영합니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>자주 묻는 질문 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 border-b border-slate-50">
          <a href="/" className="text-xs text-slate-400 font-bold hover:text-purple-400 transition-colors">
            ← 홈으로
          </a>
        </div>

        <main className="px-6 py-10">
          <section className="mb-10">
            <h1 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">자주 묻는 질문</h1>
            <p className="text-[13px] text-slate-400">서비스에 대해 궁금한 점들을 확인해보세요.</p>
          </section>

          {/* 아코디언 리스트 */}
          <section className="space-y-3">
            {faqData.map((item, idx) => (
              <div key={idx} className="border-b border-slate-50 overflow-hidden">
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors px-2"
                >
                  <span className={`text-[14px] font-bold ${openIndex === idx ? 'text-purple-600' : 'text-slate-700'}`}>
                    {item.question}
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[800px] opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <div className="px-4 text-[13px] text-slate-500 leading-7 bg-slate-50 rounded-2xl p-6">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* --- 우리 사이 고유 하단 섹션 --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/guide" className="hover:text-purple-400">사주 가이드</a>
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
