import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function CreateGroup() {
  const router = useRouter();
  
  // 1. 상태 관리: 입력 폼 데이터 및 로딩 상태
  const [isLoading, setIsLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formData, setFormData] = useState({
    groupName: '',
    userName: '',
    gender: '',
    calendar: '양력',
    birthDate: '',
    birthTime: '',
    pin: ''
  });

  // 2. 일주 카드 표시 조건 (이름, 성별, 생년월일 8자리 입력 시)
  const isIljuVisible = formData.userName.trim().length > 0 && 
                        formData.gender !== '' && 
                        formData.birthDate.length === 8;

  // 3. 버튼 클릭 시 로딩 후 페이지 이동 로직
  const handleCreate = () => {
    if (isIljuVisible) {
      setIsLoading(true);
      setTimeout(() => {
        router.push('/group'); 
      }, 2000); // 영상과 동일하게 2초간 로딩
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>모임 궁합 생성 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 로딩 오버레이 (영상 100% 재현) --- */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-6"
            >
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <p className="text-[18px] font-black text-slate-700">인연을 불러오는 중...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 상단 헤더 */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold flex items-center gap-1">
            ← 우리 사이
          </button>
        </div>

        <main className="px-6 py-10 space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">모임 궁합 생성</h1>
            <p className="text-[14px] text-slate-400 font-medium">모임을 만들고, 멤버들의 궁합을 확인해보세요</p>
          </div>

          {/* 단계 안내 바 */}
          <section className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 space-y-6">
            <div className="flex justify-around items-start">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D980FA] border-2 border-[#D980FA]/20">
                  <span className="text-xl">👤</span>
                </div>
                <p className="text-[11px] font-bold text-[#D980FA] leading-tight text-center">모임 만들기<br/><span className="font-medium text-slate-400 opacity-60">내 정보 입력</span></p>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-40">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                  <span className="text-xl">🔗</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight text-center">멤버 초대<br/><span className="font-medium">링크로 참여</span></p>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-40">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                  <span className="text-xl">⚖️</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight text-center">궁합 확인<br/><span className="font-medium">관계도 시각화</span></p>
              </div>
            </div>
          </section>

          {/* 입력 폼 섹션 */}
          <section className="space-y-8 px-2">
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">모임 이름 (선택)</label>
              <input type="text" placeholder="대학 동기들 🎶" className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, groupName: e.target.value})} />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">이름 <span className="text-red-400">*</span></label>
              <input type="text" placeholder="이름을 입력해 주세요" maxLength={5} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, userName: e.target.value})} />
            </div>

            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-700">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-8 ml-1">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="gender" onChange={() => setFormData({...formData, gender: g})} className="w-5 h-5 accent-[#D980FA]" />
                    <span className="text-[15px] font-bold text-slate-500 group-hover:text-purple-400">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-black text-slate-700">생년월일 <span className="text-red-400">*</span></label>
                <div className="flex gap-4 text-[12px] font-bold">
                  {['양력', '음력'].map((type) => (
                    <label key={type} className={`flex items-center gap-1.5 cursor-pointer ${formData.calendar === type ? 'text-[#D980FA]' : 'text-slate-300'}`}>
                      <input type="radio" name="calendar" checked={formData.calendar === type} onChange={() => setFormData({...formData, calendar: type})} className="accent-[#D980FA]" /> {type}
                    </label>
                  ))}
                </div>
              </div>
              <input type="text" placeholder="20251225" maxLength={8} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
            </div>

            {/* 당신의 일주 카드 (조건부 표시) */}
            <AnimatePresence>
              {isIljuVisible && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 text-center space-y-4 shadow-inner"
                >
                  <p className="text-[13px] font-bold text-slate-400">당신의 일주 ❔</p>
                  <div className="text-[48px] mb-2">🐯</div>
                  <p className="text-[20px] font-black text-slate-800">병인 - 🔥 🌲</p>
                  <p className="text-[11px] text-[#D980FA] font-bold">💡 띠와 달라요! 일주는 태어난 '날'의 기운이에요</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={handleCreate}
              disabled={!isIljuVisible || isLoading}
              className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${
                isIljuVisible && !isLoading
                ? 'bg-[#D980FA] text-white shadow-purple-100 active:scale-95' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              모임 생성하기
            </button>
          </section>

          {/* 가이드 아코디언 */}
          <section className="pt-10 space-y-6">
            <h2 className="text-[18px] font-black text-slate-800 px-2">🔮 일주로 보는 궁합이란?</h2>
            <div className="space-y-3">
              {[
                { q: "일주가 뭐예요?", a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요." },
                { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 해 기준이고, 일주는 태어난 날 기준입니다. 나 자신의 본질적인 기운을 보기에 더 적합합니다." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left">
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openAccordion === idx && (
                    <div className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
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
