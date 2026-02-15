import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; // 페이지 이동을 위해 추가

export default function CreateGroup() {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(0);

  // 1. 입력 데이터 상태 관리
  const [formData, setFormData] = useState({
    groupName: '',
    userName: '',
    gender: '',
    birthDate: '',
    birthTime: '',
    pin: ''
  });

  // 2. 필수 항목 입력 여부 확인 로직
  const isFormValid = formData.userName && formData.gender && formData.birthDate.length === 8;

  const handleCreate = () => {
    if (isFormValid) {
      // 실제로는 여기서 DB(Supabase)에 저장하는 로직이 들어갑니다.
      // 우선 다음 단계인 초대 페이지로 이동하도록 설정합니다.
      router.push('/invite'); 
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>모임 궁합 생성 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        {/* 상단 헤더 생략 (기존과 동일) */}

        <main className="px-6 py-10 space-y-12">
          {/* 단계 인디케이터 생략 (기존과 동일) */}

          <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-8">
            {/* 이름 입력 필드 예시 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">이름 <span className="text-red-400">*</span></label>
              <input 
                type="text" 
                value={formData.userName}
                onChange={(e) => setFormData({...formData, userName: e.target.value})}
                placeholder="이름을 입력해 주세요" 
                className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" 
              />
            </div>

            {/* 성별 선택 필드 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">성별 <span className="text-red-400">*</span></label>
              <div className="flex gap-6">
                {['남', '여'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender" 
                      checked={formData.gender === g}
                      onChange={() => setFormData({...formData, gender: g})}
                      className="w-5 h-5 accent-purple-600" 
                    />
                    <span className="text-[15px] font-bold text-slate-600">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 생년월일 입력 필드 */}
            <div className="space-y-3">
              <label className="text-[14px] font-black text-slate-800">생년월일 <span className="text-red-400">*</span></label>
              <input 
                type="text" 
                value={formData.birthDate}
                onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                placeholder="20251225" 
                className="w-full py-4 px-5 bg-slate-50 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100" 
              />
            </div>

            {/* 3. 활성화 상태에 따라 변하는 버튼 */}
            <button 
              onClick={handleCreate}
              disabled={!isFormValid}
              className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-lg ${
                isFormValid 
                ? 'bg-purple-600 text-white shadow-purple-100 hover:bg-purple-700 active:scale-95' 
                : 'bg-purple-100 text-purple-400 cursor-not-allowed'
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
