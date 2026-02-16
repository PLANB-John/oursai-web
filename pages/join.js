import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function JoinGroup() {
  const router = useRouter();
  const [formData, setFormData] = useState({ userName: '', gender: '', calendar: '양력', birthDate: '', birthTime: '' });

  const isIljuVisible = formData.userName.trim().length > 0 && formData.gender !== '' && formData.birthDate.length === 8;

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>모임 참여하기 | 우리 사이</title></Head>
      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold flex items-center gap-1">
            ‹ 모임으로 돌아가기
          </button>
        </div>

        <main className="px-6 py-12 space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">모임 참여하기</h1>
            <p className="text-[14px] text-slate-400 font-medium">내 정보를 입력하고 모임에 참여하세요</p>
          </div>

          {/* 입력 폼 - group.js_02 참고 */}
          <section className="space-y-8 px-2">
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">이름 <span className="text-red-400">*</span></label>
              <input type="text" placeholder="이름을 입력해 주세요" maxLength={5} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, userName: e.target.value})} />
            </div>

            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-700">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-8 ml-1">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="gender" onChange={() => setFormData({...formData, gender: g})} className="w-5 h-5 accent-[#6c5ce7]" />
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
                    <label key={type} className={`flex items-center gap-1.5 cursor-pointer ${formData.calendar === type ? 'text-[#6c5ce7]' : 'text-slate-300'}`}>
                      <input type="radio" name="calendar" checked={formData.calendar === type} onChange={() => setFormData({...formData, calendar: type})} className="accent-[#6c5ce7]" /> {type}
                    </label>
                  ))}
                </div>
              </div>
              <input type="text" placeholder="20251225" maxLength={8} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">태어난 시간 (선택)</label>
              <input type="text" placeholder="1430" maxLength={4} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
            </div>

            {/* 일주 카드 */}
            <AnimatePresence>
              {isIljuVisible && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 text-center space-y-4 shadow-inner">
                  <p className="text-[13px] font-bold text-slate-400">당신의 일주 ❔</p>
                  <div className="text-[48px] mb-2">🐯</div>
                  <p className="text-[20px] font-black text-slate-800">병인 - 🔥 🌲</p>
                  <p className="text-[11px] text-[#6c5ce7] font-bold">💡 띠와 달라요! 일주는 태어난 '날'의 기운이에요</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button onClick={() => router.push('/group')} disabled={!isIljuVisible} className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${isIljuVisible ? 'bg-[#6c5ce7] text-white shadow-purple-100 active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
              👤+ 참여하기
            </button>
            
            <p onClick={() => router.push('/group')} className="text-center text-[12px] text-slate-400 font-bold cursor-pointer hover:text-slate-600 underline">
              이미 참여하셨나요? 결과 보러가기
            </p>
          </section>
        </main>
        
        {/* 공통 푸터 (생략하지 않고 그대로 유지) */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/guide">사주 가이드</a><span>|</span><a href="/faq">자주 묻는 질문</a><span>|</span><a href="/feedback">의견 보내기</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
