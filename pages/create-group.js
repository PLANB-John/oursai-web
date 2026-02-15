import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function CreateGroup() {
  const router = useRouter();
  
  // 1. 입력 데이터 상태 관리
  const [formData, setFormData] = useState({
    groupName: '',
    userName: '',
    gender: '',
    calendar: '명리',
    birthDate: '',
    birthTime: '',
    pin: ''
  });

  // 2. 아코디언 상태 관리
  const [openAccordion, setOpenAccordion] = useState(0);

  // 3. 필수 항목(이름, 성별, 생년월일 8자리) 입력 시 버튼 활성화
  const isFormValid = formData.userName.trim().length > 0 && 
                      formData.gender !== '' && 
                      formData.birthDate.length === 8;

  const handleCreate = () => {
    if (isFormValid) {
      // 다음 단계인 초대 링크 페이지로 이동 (추후 제작 예정)
      router.push('/invite');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>모임 궁합 생성 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold flex items-center gap-1">
            ← 이음
          </button>
        </div>

        <main className="px-6 py-10 space-y-10">
          {/* 타이틀 */}
          <div className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">모임 궁합 생성</h1>
            <p className="text-[14px] text-slate-400 font-medium">모임을 만들고, 멤버들의 궁합을 확인해보세요</p>
          </div>

          {/* 단계 안내 인디케이터 */}
          <section className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 space-y-6">
            <div className="flex justify-around items-start">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D980FA]">
                  <span className="text-xl">👤</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight text-center">모임 만들기<br/><span className="text-slate-400 font-medium">내 정보 입력</span></p>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-30">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                  <span className="text-xl">🔗</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight text-center">멤버 초대<br/><span className="text-slate-400 font-medium">링크로 참여</span></p>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-30">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                  <span className="text-xl">⚖️</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight text-center">궁합 확인<br/><span className="text-slate-400 font-medium">관계도 시각화</span></p>
              </div>
            </div>
            <div className="bg-white/60 py-3 rounded-2xl text-center border border-slate-50">
              <p className="text-[12px] text-slate-400 font-medium">모든 멤버 간 궁합을 분석하고,<br/><span className="text-[#D980FA] font-bold">관계 네트워크</span>를 한눈에 볼 수 있어요</p>
            </div>
          </section>

          {/* 입력 폼 */}
          <section className="space-y-8 px-2">
            {/* 모임 이름 */}
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">모임 이름 (선택)</label>
              <input 
                type="text" 
                placeholder="대학 동기들 🎶"
                className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100"
                onChange={(e) => setFormData({...formData, groupName: e.target.value})}
              />
              <p className="text-[11px] text-slate-300 font-medium ml-1">비워두면 '우리 모임'으로 표시됩니다</p>
            </div>

            {/* 이름 */}
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

            {/* 성별 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-700">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-8 ml-1">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="gender" 
                      onChange={() => setFormData({...formData, gender: g})}
                      className="w-5 h-5 accent-[#D980FA]" 
                    />
                    <span className="text-[15px] font-bold text-slate-500 group-hover:text-purple-400">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 생년월일 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-black text-slate-700">생년월일 <span className="text-red-400">*</span></label>
                <div className="flex gap-4 text-[12px] font-bold">
                  <label className="flex items-center gap-1.5 cursor-pointer text-[#D980FA]"><input type="radio" name="cal" defaultChecked className="accent-[#D980FA]" /> 명리</label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300"><input type="radio" name="cal" className="accent-slate-300" /> 음력</label>
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

            {/* 태어난 시 */}
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

            {/* PIN */}
            <div className="space-y-2">
              <label className="text-[14px] font-black text-slate-700">모임용 PIN (선택)</label>
              <input 
                type="password" 
                placeholder="숫자 4자리"
                maxLength={4}
                className="w-full p-4 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100"
                onChange={(e) => setFormData({...formData, pin: e.target.value})}
              />
              <p className="text-[11px] text-orange-400 font-bold ml-1 flex items-center gap-1">
                ⚠️ 설정하지 않으면 나중에 모임을 관리할 수 없어요
              </p>
            </div>

            {/* 버튼 */}
            <button 
              onClick={handleCreate}
              disabled={!isFormValid}
              className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${
                isFormValid 
                ? 'bg-[#D980FA] text-white shadow-purple-100 active:scale-95' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              모임 생성하기
            </button>
          </section>

          {/* 도움말 아코디언 */}
          <section className="pt-10 space-y-6">
            <h2 className="text-[18px] font-black text-slate-800 flex items-center gap-2 px-2">
              <span className="text-xl">✨</span> 일주로 보는 궁합이란?
            </h2>
            <div className="space-y-3">
              {[
                { q: "일주가 뭐예요?", a: "일주(日柱)는 태어난 '날'의 기운을 나타내는 사주의 핵심 요소예요. 사주명리학에서 일주는 '나 자신'을 가장 잘 표현하는 부분으로, 성격, 기질, 내면의 스타일을 담고 있어요." },
                { q: "띠랑 뭐가 달라요?", a: "띠는 태어난 해(년)를 기준으로 하지만, 일주는 태어난 날을 기준으로 합니다. 나 자신의 본질적인 기운을 보기에 더 적합합니다." },
                { q: "왜 일주로 궁합을 봐요?", a: "가장 나다운 모습을 담고 있는 기운끼리의 조화를 분석하기에, 단순 띠별 궁합보다 훨씬 구체적이고 실질적인 관계를 유추할 수 있습니다." },
                { q: "이음에서 알 수 있는 것", a: "멤버 간의 1:1 케미 등급, 서로의 기질적 조화, 그리고 모임 전체가 가지는 고유한 에너지 색깔을 확인할 수 있습니다." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <span className="text-[14px] font-bold text-slate-700">{item.q}</span>
                    <span className={`text-slate-300 text-xs transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-[13px] text-slate-500 leading-7 border-t border-slate-50 pt-4"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* --- 우리 사이 고유 푸터 --- */}
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
