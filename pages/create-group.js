import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function CreateGroup() {
  const router = useRouter();
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

  const isIljuValid = formData.userName.trim().length > 0 && 
                      formData.gender !== '' && 
                      formData.birthDate.length === 8;

  // --- 1. 고유 ID 생성 함수 (8자리 랜덤 문자열) [cite: 2026-02-17] ---
  const generateRoomId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleCreate = () => {
    if (isIljuValid) {
      setIsLoading(true);
      
      // 2. 새로운 고유 방 ID 생성 [cite: 2026-02-17]
      const roomId = generateRoomId();

      // 3. 해당 ID를 키값으로 하여 방 정보와 방장(본인) 데이터 저장 [cite: 2026-02-17]
      const roomData = {
        groupName: formData.groupName || '우리 모임',
        members: [{
          id: Date.now(),
          name: formData.userName,
          emoji: formData.gender === '남' ? '👦' : '👧',
          birthDate: formData.birthDate,
          isLeader: true // 방장 표시
        }]
      };

      // localStorage에 room_ID 형식으로 저장 [cite: 2026-02-17]
      localStorage.setItem(`room_${roomId}`, JSON.stringify(roomData));

      // 4. 생성된 고유 경로로 이동 (예: /g/lxddOVWl)
      setTimeout(() => {
        router.push(`/g/${roomId}`);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>모임 궁합 생성 | 우리 사이 (oursai.kr)</title></Head>
      
      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* 인연을 불러오는 중... 로딩 연출 */}
        <AnimatePresence>
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <p className="text-[18px] font-black text-slate-700">인연을 불러오는 중...</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold flex items-center gap-1">← 우리 사이</button>
        </div>

        <main className="px-6 py-10 space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">모임 궁합 생성</h1>
            <p className="text-[14px] text-slate-400 font-medium">모임을 만들고, 멤버들의 궁합을 확인해보세요</p>
          </div>

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
                  <label key={g} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" onChange={() => setFormData({...formData, gender: g})} className="w-5 h-5 accent-[#D980FA]" />
                    <span className="text-[15px] font-bold text-slate-500">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">생년월일 <span className="text-red-400">*</span></label>
              <input type="text" placeholder="20251225" maxLength={8} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">태어난 시간 (선택)</label>
              <input type="text" placeholder="1430" maxLength={4} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none" />
            </div>

            <button onClick={handleCreate} disabled={!isIljuValid || isLoading} className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${isIljuValid && !isLoading ? 'bg-[#D980FA] text-white active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
              모임 생성하기
            </button>
          </section>

          {/* 일주 아코디언 가이드 */}
          <section className="pt-10 space-y-6">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2 px-2"><span className="text-[#D980FA]">✨</span> 일주로 보는 궁합이란?</h2>
            <div className="space-y-3">
              {[
                { q: "일주가 뭐예요?", a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요. 사주명리학에서 일주는 '나 자신'을 가장 잘 표현하는 부분으로, 성격, 기질, 내면의 스타일을 담고 있어요." },
                { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 해(년)를 기준으로 하지만, 일주는 태어난 날을 기준으로 합니다. 띠가 사회적인 겉모습이라면, 일주는 나 자신의 본질적인 기운과 속마음을 보기에 더 적합합니다." },
                { q: "왜 일주로 궁합을 봐요?", a: "일주는 개인의 기질과 내면 에너지를 가장 정확하게 담고 있어, 서로 다른 두 사람이 만났을 때 생기는 화학 반응을 깊이 있게 분석할 수 있습니다." },
                { q: "우리 사이에서 알 수 있는 것", a: "멤버 간의 1:1 케미 등급과 관계의 특징, 그리고 전체 모임의 조화도를 시각적인 네트워크 그래프로 확인할 수 있습니다. 전통적인 사주를 현대적인 네트워크로 만나보세요!" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left font-bold text-slate-700 text-[14px]">
                    {item.q} <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openAccordion === idx && <div className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">{item.a}</div>}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/intro">서비스 소개</a><span>|</span><a href="/faq">자주 묻는 질문</a><span>|</span><a href="/feedback">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-8">
            <a href="/terms">이용약관</a><span>|</span><a href="/privacy">개인정보처리방침</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
