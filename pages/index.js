import React, { useState } from 'react';
import Head from 'next/head';

export default function SaiProject() {
  const [step, setStep] = useState('input');
  const [users, setUsers] = useState([{ id: 1, name: '', birth: '' }]);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10">
      <Head>
        <title>우리사이 (oursai.kr)</title>
      </Head>

      {/* 모바일 뷰 고정 컨테이너 */}
      <div className="w-full max-w-[480px] min-h-screen sm:min-h-[850px] bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px]">
        
        <main className="flex-1 px-6 py-10">
          <header className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-black text-purple-400 tracking-tighter italic">Sai</h1>
            <nav className="flex gap-4 text-sm font-medium text-slate-400">
              <span>오늘의 에너지</span>
            </nav>
          </header>

          {step === 'input' && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-2xl font-bold mb-8 leading-tight">
                안녕? 오늘 너랑 그 사람,<br/>
                <span className="text-purple-500">어떤 사이</span>인지 봐줄까?
              </h2>
              
              <div className="space-y-4 mb-8">
                {users.map((user, idx) => (
                  <div key={user.id} className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                    <p className="text-xs font-bold text-purple-300 mb-2">{idx === 0 ? '나' : `함께 볼 사람 ${idx}`}</p>
                    <input type="text" placeholder="이름 입력" className="w-full bg-transparent text-lg font-bold outline-none mb-2" />
                    <input type="date" className="w-full bg-transparent text-sm text-slate-400 outline-none" />
                  </div>
                ))}
              </div>

              <button className="w-full py-5 bg-purple-400 text-white rounded-3xl text-xl font-bold shadow-lg active:scale-95 transition-all">
                우리 사이 확인하기
              </button>
            </div>
          )}
        </main>

        {/* 하단 고정 광고 영역 예시 */}
        <div className="p-4 bg-white border-t border-slate-50">
          <div className="w-full h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-300 text-xs">
            AD: 하단 배너 광고 영역
          </div>
        </div>
      </div>
    </div>
  );
}
