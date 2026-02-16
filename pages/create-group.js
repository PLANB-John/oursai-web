import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function CreateGroup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);

  const [formData, setFormData] = useState({
    groupName: '', userName: '', gender: '', calendar: '양력', birthDate: '', birthTime: '', pin: ''
  });

  const isIljuVisible = formData.userName.trim().length > 0 && formData.gender !== '' && formData.birthDate.length === 8;

  const handleCreate = () => {
    if (isIljuVisible) {
      setIsLoading(true);
      // --- 데이터 저장 로직 추가 [cite: 2026-02-17] ---
      localStorage.clear(); // 새로운 모임 생성을 위해 기존 데이터 초기화
      localStorage.setItem('currentGroupName', formData.groupName || '우리 모임');
      localStorage.setItem('currentUserName', formData.userName);
      localStorage.setItem('groupMembers', JSON.stringify([])); // 멤버 리스트 초기화
      
      setTimeout(() => {
        router.push('/group'); 
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>모임 궁합 생성 | 우리 사이</title></Head>
      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
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

          <section className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 space-y-6">
            <div className="flex justify-around items-start">
              {['👤 모임 만들기', '🔗 멤버 초대', '⚖️ 궁합 확인'].map((text, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D980FA] border-2 border-[#D980FA]/20">
                    <span className="text-xl">{text.split(' ')[0]}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#D980FA] text-center">{text.split(' ')[1]}<br/><span className="font-medium text-slate-400 opacity-80">단계 안내</span></p>
                </div>
              ))}
            </div>
          </section>

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

            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">태어난 시간 (선택)</label>
              <input type="text" placeholder="1430" maxLength={4} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" />
            </div>

            <AnimatePresence>
              {isIljuVisible && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 text-center space-y-4 shadow-inner">
                  <p className="text-[13px] font-bold text-slate-400 flex items-center justify-center gap-1">당신의 일주 <span className="text-[16px]">❔</span></p>
                  <div className="space-y-2"><div className="text-[48px] mb-2">🐯</div><p className="text-[20px] font-black text-slate-800">병인 - 🔥 🌲</p></div>
                  <p className="text-[11px] text-[#D980FA] font-bold">💡 띠와 달라요! 일주는 태어난 '날'의 기운이에요</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">모임장 PIN (선택)</label>
              <input type="password" placeholder="숫자 4자리" maxLength={4} className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none" />
              <p className="text-[11px] text-orange-400 font-bold ml-1">⚠️ 설정하지 않으면 나중에 모임을 관리할 수 없어요</p>
            </div>

            <button onClick={handleCreate} disabled={!isIljuVisible || isLoading} className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${isIljuVisible && !isLoading ? 'bg-[#D980FA] text-white active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
              모임 생성하기
            </button>
          </section>

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
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left">
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openAccordion === idx && <div className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">{item.a}</div>}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
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
