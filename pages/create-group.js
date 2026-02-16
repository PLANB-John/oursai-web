import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function CreateGroup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [formData, setFormData] = useState({
    groupName: '', userName: '', gender: '', calendar: '양력', birthDate: '', birthTime: '', pin: ''
  });

  const isFormValid = formData.userName.trim().length > 0 && 
                      formData.gender !== '' && 
                      formData.birthDate.length === 8;

  const handleCreate = () => {
    if (isFormValid) {
      setIsLoading(true); // 로딩 시작
      // 영상과 동일하게 약 2초 후 페이지 이동
      setTimeout(() => {
        router.push('/group'); 
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>모임 궁합 생성 | 우리 사이</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 로딩 오버레이 (영상 100% 구현) --- */}
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

        {/* 기존 입력 폼 레이아웃 (유지) */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold">← 우리 사이</button>
        </div>

        <main className="px-6 py-10 space-y-10">
          <header className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">모임 궁합 생성</h1>
          </header>

          <section className="space-y-8 px-2">
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">이름 <span className="text-red-400">*</span></label>
              <input type="text" placeholder="이름을 입력해 주세요" className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" 
                onChange={(e) => setFormData({...formData, userName: e.target.value})} />
            </div>
            {/* ... 기타 입력 필드 (생략, 기존과 동일) ... */}
            <button 
              onClick={handleCreate}
              disabled={!isFormValid || isLoading}
              className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${
                isFormValid ? 'bg-[#D980FA] text-white active:scale-95' : 'bg-slate-100 text-slate-300'
              }`}
            >
              모임 생성하기
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
