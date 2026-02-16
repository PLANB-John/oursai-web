import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function JoinGroup() {
  const router = useRouter();
  const [formData, setFormData] = useState({ userName: '', gender: '', birthDate: '' });

  const handleJoin = () => {
    if (formData.userName.trim() && formData.gender && formData.birthDate.length === 8) {
      const existingMembers = JSON.parse(localStorage.getItem('groupMembers') || '[]');
      
      const newMember = {
        id: Date.now(),
        name: formData.userName,
        emoji: formData.gender === '남' ? '👦' : '👧',
        ilju: '병인', 
        element: '화(火)',
        desc: '새롭게 참여한 멤버입니다! 기존 멤버들과의 케미를 확인해보세요.',
        color: '#6c5ce7'
      };

      localStorage.setItem('groupMembers', JSON.stringify([...existingMembers, newMember]));
      router.push('/group');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head><title>모임 참여하기 | 우리 사이</title></Head>
      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col sm:rounded-[40px] overflow-hidden pb-20">
        <div className="px-6 py-6 border-b border-slate-50"><button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold">‹ 뒤로가기</button></div>
        <main className="px-6 py-12 space-y-10">
          <h1 className="text-[28px] font-black text-center">모임 참여하기</h1>
          <div className="space-y-8">
            <div className="space-y-2"><label className="text-[14px] font-black">이름 *</label><input type="text" placeholder="이름을 입력해 주세요" className="w-full p-4 bg-slate-50 rounded-2xl" onChange={(e) => setFormData({...formData, userName: e.target.value})} /></div>
            <div className="space-y-3"><label className="text-[14px] font-black">성별 *</label><div className="flex gap-8">{['남', '여'].map((g) => (<label key={g} className="flex items-center gap-2"><input type="radio" name="gender" onChange={() => setFormData({...formData, gender: g})} className="accent-[#6c5ce7]" />{g}</label>))}</div></div>
            <div className="space-y-2"><label className="text-[14px] font-black">생년월일 *</label><input type="text" placeholder="20251225" maxLength={8} className="w-full p-4 bg-slate-50 rounded-2xl" onChange={(e) => setFormData({...formData, birthDate: e.target.value})} /></div>
            <button onClick={handleJoin} className="w-full py-6 bg-[#6c5ce7] text-white rounded-[24px] font-black text-[18px] shadow-lg">👤+ 참여하기</button>
          </div>
        </main>
      </div>
    </div>
  );
}
