import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function JoinGroup() {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formData, setFormData] = useState({ 
    userName: '', gender: '', calendar: '양력', birthDate: '', birthTime: '' 
  });

  const isIljuValid = formData.userName.trim().length > 0 && 
                      formData.gender !== '' && 
                      formData.birthDate.length === 8;

  const handleJoin = () => {
    if (isIljuValid) {
      // 1. 새로운 멤버 객체 생성 [cite: 2026-02-16]
      const newMember = {
        id: Date.now(), // 고유 ID 생성
        name: formData.userName,
        emoji: formData.gender === '남' ? '👦' : '👧',
        ilju: '병인', // 실제 로직 연결 전 임시 값
        element: '화(火)',
        desc: '새롭게 합류한 멤버입니다! 기존 멤버들과의 케미를 확인해보세요.',
        color: '#8e44ad'
      };

      // 2. 로컬 저장소에 저장하여 group.js에서 꺼내 쓸 수 있게 함 [cite: 2026-02-16]
      const existingMembers = JSON.parse(localStorage.getItem('groupMembers') || '[]');
      localStorage.setItem('groupMembers', JSON.stringify([...existingMembers, newMember]));

      // 3. 이동
      router.push('/group?joined=true');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>모임 참여하기 | 우리 사이</title></Head>
      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold flex items-center gap-1">‹ 모임으로 돌아가기</button>
        </div>

        <main className="px-6 py-12 space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">모임 참여하기</h1>
          </div>

          <section className="space-y-8 px-2">
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">이름 <span className="text-red-400">*</span></label>
              <input type="text" placeholder="이름을 입력해 주세요" className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" onChange={(e) => setFormData({...formData, userName: e.target.value})} />
            </div>

            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-700">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-8 ml-1">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="gender" onChange={() => setFormData({...formData, gender: g})} className="w-5 h-5 accent-[#6c5ce7]" />
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
              <input type="text" placeholder="1430" className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none" />
            </div>

            <button onClick={handleJoin} disabled={!isIljuValid} className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all ${isIljuValid ? 'bg-[#6c5ce7] text-white' : 'bg-slate-100 text-slate-300'}`}>
              👤+ 참여하기
            </button>

            {/* 하단 아코디언 */}
            <div className="pt-10 space-y-6">
              <h2 className="text-[18px] font-black text-slate-800 px-2">🔮 일주로 보는 궁합이란?</h2>
              {[ { q: "일주가 뭐예요?", a: "일주는 태어난 '날'의 기운입니다." }, { q: "띠랑 뭐가 달라요?", a: "띠는 해, 일주는 날 기준입니다." }, { q: "왜 일주로 궁합을 봐요?", a: "나의 본질적인 성향을 가장 잘 나타내기 때문입니다." }, { q: "우리 사이에서 알 수 있는 것", a: "멤버 간 케미 등급과 관계 네트워크를 볼 수 있습니다." } ].map((item, idx) => (
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

        {/* 5종 푸터 */}
        <footer className="px-8 py-20 bg-white text-center border-t border-slate-50 mt-10">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-4">
            <a href="/intro">서비스 소개</a><span>|</span><a href="/faq">자주 묻는 질문</a><span>|</span><a href="/feedback">의견 보내기</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold mb-8">
            <a href="/terms">이용약관</a><span>|</span><a href="/privacy">개인정보처리방침</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr</p>
        </footer>
      </div>
    </div>
  );
}
