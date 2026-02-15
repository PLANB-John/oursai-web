import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function CreateGroup() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>모임 궁합 생성 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 헤더 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/" className="text-xs text-slate-400 font-bold flex items-center gap-1">
            ← 뒤로가기
          </a>
          <span className="text-[13px] font-black text-slate-800 tracking-tighter">우리 사이</span>
          <div className="w-10"></div>
        </div>

        <main className="px-6 py-10 space-y-12">
          {/* 1. 타이틀 섹션 */}
          <div className="text-center space-y-2">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight">모임 궁합 생성</h1>
            <p className="text-[14px] text-slate-400">모임을 만들고, 멤버들의 궁합을 확인해보세요</p>
          </div>

          {/* 2. 단계 인디케이터 */}
          <section className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 space-y-6">
            <div className="flex justify-around items-start text-center">
              <div className="space-y-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto text-purple-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <p className="text-[11px] font-bold text-slate-800">모임 만들기<br/><span className="font-medium text-slate-400">내 정보 입력</span></p>
              </div>
              <div className="space-y-2 opacity-40">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto text-slate-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <p className="text-[11px] font-bold text-slate-800">멤버 초대<br/><span className="font-medium text-slate-400">링크로 참여</span></p>
              </div>
              <div className="space-y-2 opacity-40">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto text-slate-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <p className="text-[11px] font-bold text-slate-800">궁합 확인<br/><span className="font-medium text-slate-400">관계도 시각화</span></p>
              </div>
            </div>
            <div className="text-center pt-2 border-t border-slate-100">
              <p className="text-[12px] text-slate-400 font-medium">모든 멤버 간 궁합을 분석하고,<br/><span className="text-purple-500 font-bold">관계 네트워크</span>를 한눈에 볼 수 있어요</p>
            </div>
          </section>

          {/* 3. 입력 폼 섹션 */}
          <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-8">
            {/* 모임 이름 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">모임 이름 (선택)</label>
              <input type="text" placeholder="대학 동기들 🎶" className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
              <p className="text-[11px] text-slate-300 font-medium">비워두면 '우리 모임'으로 표시됩니다</p>
            </div>

            {/* 이름 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">이름 <span className="text-red-400">*</span></label>
              <input type="text" placeholder="이름을 입력해 주세요" className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
              <p className="text-[11px] text-slate-300 font-medium">최대 5자까지 입력할 수 있어요</p>
            </div>

            {/* 성별 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-6">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="gender" className="w-5 h-5 accent-purple-600" />
                    <span className="text-[15px] font-bold text-slate-600 group-hover:text-purple-600">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 생년월일 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-black text-slate-800">생년월일 <span className="text-red-400">*</span></label>
                <div className="flex gap-3 text-[12px] font-bold">
                  <label className="flex items-center gap-1.5"><input type="radio" name="calendar" defaultChecked className="accent-purple-600" /> 명리</label>
                  <label className="flex items-center gap-1.5 opacity-40"><input type="radio" name="calendar" className="accent-purple-600" /> 음력</label>
                </div>
              </div>
              <input type="text" placeholder="20251225" className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
              <p className="text-[11px] text-slate-300 font-medium">8자리 숫자로 입력해 주세요</p>
            </div>

            {/* 태어난 시 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">태어난 시간 (선택)</label>
              <input type="text" placeholder="1430" className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
              <p className="text-[11px] text-slate-300 font-medium">4자리 숫자로 입력해 주세요 (24시간 형식)</p>
            </div>

            {/* PIN */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">모임용 PIN (선택)</label>
              <input type="text" placeholder="숫자 4자리" className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
              <p className="text-[11px] text-orange-400 font-bold">⚠️ 설정하지 않으면 나중에 모임을 관리할 수 없어요</p>
            </div>

            <button className="w-full py-6 bg-purple-100 text-purple-400 rounded-[24px] font-black text-[18px] transition-all cursor-not-allowed">
              모임 생성하기
            </button>
          </section>

          {/* 4. 도움말 아코디언 */}
          <section className="space-y-6">
            <h2 className="text-[16px] font-black text-slate-800 px-2 flex items-center gap-2">🔮 일주로 보는 궁합이란?</h2>
            <div className="space-y-3">
              {[
                { q: "일주가 뭐예요?", a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요." },
                { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 '년' 기준이고, 일주는 '날' 기준입니다. 명리학에서는 나 자신을 가장 잘 나타내는 요소로 일주를 봅니다." },
                { q: "왜 일주로 궁합을 봐요?", a: "일주는 성격, 기질, 내면의 스타일을 가장 잘 담고 있어 더 정확한 관계 분석이 가능하기 때문입니다." },
                { q: "이음에서 알 수 있는 것", a: "멤버 간의 1:1 케미 등급, 관계의 특징, 그리고 전체적인 모임의 에너지를 확인할 수 있어요." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50/50 rounded-3xl border border-slate-100 overflow-hidden">
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left">
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openAccordion === idx && (
                    <div className="px-6 pb-6 text-[13px] text-slate-500 leading-7">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* --- 공통 푸터 --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-purple-400">의견 보내기</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
