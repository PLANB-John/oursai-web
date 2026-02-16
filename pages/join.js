import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function JoinGroup() {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formData, setFormData] = useState({ 
    userName: '', 
    gender: '', 
    calendar: '양력', 
    birthDate: '', 
    birthTime: '' // 1. 태어난 시간 상태 추가
  });

  // 필수 입력값 확인 (이름, 성별, 생년월일 8자)
  const isIljuVisible = formData.userName.trim().length > 0 && 
                        formData.gender !== '' && 
                        formData.birthDate.length === 8;

  // 참여하기 클릭 시 데이터를 담아 이동 [cite: 2026-02-16]
  const handleJoin = () => {
    if (isIljuVisible) {
      router.push({
        pathname: '/group',
        query: { 
          joined: 'true',
          newUserName: formData.userName,
          newUserGender: formData.gender
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>모임 참여하기 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* 상단 네비게이션 */}
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

          <section className="space-y-8 px-2">
            {/* 이름 입력 */}
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">이름 <span className="text-red-400">*</span></label>
              <input 
                type="text" 
                placeholder="이름을 입력해 주세요" 
                maxLength={5} 
                className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" 
                onChange={(e) => setFormData({...formData, userName: e.target.value})} 
              />
              <p className="text-[11px] text-slate-300 font-medium ml-1">최대 5자까지 입력할 수 있어요</p>
            </div>

            {/* 성별 선택 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-700">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-8 ml-1">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="gender" 
                      onChange={() => setFormData({...formData, gender: g})} 
                      className="w-5 h-5 accent-[#6c5ce7]" 
                    />
                    <span className="text-[15px] font-bold text-slate-500 group-hover:text-purple-400">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 생년월일 + 양력/음력 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-black text-slate-700">생년월일 <span className="text-red-400">*</span></label>
                <div className="flex gap-4 text-[12px] font-bold">
                  {['양력', '음력'].map((type) => (
                    <label key={type} className={`flex items-center gap-1.5 cursor-pointer transition-colors ${formData.calendar === type ? 'text-[#6c5ce7]' : 'text-slate-300'}`}>
                      <input 
                        type="radio" 
                        name="calendar" 
                        checked={formData.calendar === type} 
                        onChange={() => setFormData({...formData, calendar: type})} 
                        className="accent-[#6c5ce7]" 
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <input 
                type="text" 
                placeholder="20251225" 
                maxLength={8} 
                className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" 
                onChange={(e) => setFormData({...formData, birthDate: e.target.value})} 
              />
              <p className="text-[11px] text-slate-300 font-medium ml-1">8자리 숫자로 입력해 주세요</p>
            </div>

            {/* --- 수정사항 1: 태어난 시간 입력란 추가 (모임 생성 페이지와 동일) --- */}
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">태어난 시간 (선택)</label>
              <input 
                type="text" 
                placeholder="1430" 
                maxLength={4} 
                className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" 
                onChange={(e) => setFormData({...formData, birthTime: e.target.value})} 
              />
              <p className="text-[11px] text-slate-300 font-medium ml-1">4자리 숫자로 입력해 주세요 (24시간 형식)</p>
            </div>

            {/* 당신의 일주 카드 */}
            <AnimatePresence>
              {isIljuVisible && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 text-center space-y-4 shadow-inner"
                >
                  <p className="text-[13px] font-bold text-slate-400">당신의 일주 ❔</p>
                  <div className="text-[48px] mb-2">🐹</div>
                  <p className="text-[20px] font-black text-slate-800">병인 - 🔥 🌲</p>
                  <p className="text-[11px] text-[#6c5ce7] font-bold">💡 띠와 달라요! 일주는 태어난 '날'의 기운이에요</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={handleJoin} 
              disabled={!isIljuVisible} 
              className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${isIljuVisible ? 'bg-[#6c5ce7] text-white shadow-purple-100 active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
            >
              👤+ 참여하기
            </button>
            
            <p onClick={() => router.push('/group')} className="text-center text-[12px] text-slate-400 font-bold cursor-pointer hover:text-slate-600 underline pb-10">
              이미 참여하셨나요? 결과 보러가기
            </p>

            {/* --- 수정사항 2: 하단 상세 아코디언 가이드 (4가지 복구) --- */}
            <div className="pt-10 space-y-6">
              <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2 px-2">
                <span className="text-[#6c5ce7]">🔮</span> 일주로 보는 궁합이란?
              </h2>
              {[
                { 
                  q: "일주가 뭐예요?", 
                  a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요. 사주명리학에서 일주는 '나 자신'을 가장 잘 표현하는 부분으로, 성격, 기질, 내면의 스타일을 담고 있어요." 
                },
                { 
                  q: "띠랑 뭐가 달라요?", 
                  a: "띠는 태어난 해(년)를 기준으로 하지만, 일주는 태어난 날을 기준으로 합니다. 띠가 사회적인 겉모습이라면, 일주는 나 자신의 본질적인 기운과 속마음을 보기에 더 적합합니다." 
                },
                { 
                  q: "왜 일주로 궁합을 봐요?", 
                  a: "일주는 개인의 기질과 내면 에너지를 가장 정확하게 담고 있어, 서로 다른 두 사람이 만났을 때 생기는 화학 반응을 깊이 있게 분석할 수 있습니다. [cite: 2026-02-16]" 
                },
                { 
                  q: "우리 사이에서 알 수 있는 것", 
                  a: "멤버 간의 1:1 케미 등급과 관계의 특징, 그리고 전체 모임의 조화도를 시각적인 네트워크 그래프로 확인할 수 있습니다. [cite: 2026-02-16]" 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full p-6 flex justify-between items-center text-left">
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4">
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </main>
        
        {/* --- 수정사항 3: 하단 표준 푸터 구성 (5종 링크) --- */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-purple-400">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-8">
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
