import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Invite() {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  
  // 가상의 현재 참여 멤버 데이터 (디자인 확인용)
  const [members, setMembers] = useState([
    { id: 1, name: '나(방장)', icon: '🐰', role: '방장' }
  ]);

  // 링크 복사 함수
  const handleCopyLink = () => {
    const link = "https://oursai.kr/join/group-12345"; // 실제로는 고유 ID가 생성되어야 함
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>멤버 초대하기 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-[13px] text-slate-400 font-bold">
            ← 수정하기
          </button>
          <span className="text-[13px] font-black text-slate-800 tracking-tighter">우리 사이</span>
          <div className="w-10"></div>
        </div>

        <main className="px-6 py-10 space-y-10">
          {/* 타이틀 섹션 */}
          <div className="text-center space-y-2">
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight">친구들을 초대해봐요!</h1>
            <p className="text-[14px] text-slate-400 font-medium">링크를 공유하고 멤버들이 모이길 기다려주세요</p>
          </div>

          {/* 단계 안내 인디케이터 (2단계 활성화) */}
          <section className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100">
            <div className="flex justify-around items-start">
              <div className="flex flex-col items-center gap-2 opacity-30">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-xl">👤</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 text-center">모임 만들기</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D980FA] border-2 border-[#D980FA]/20">
                  <span className="text-xl">🔗</span>
                </div>
                <p className="text-[11px] font-bold text-[#D980FA] text-center">멤버 초대</p>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-30">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-xl">⚖️</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800 text-center">궁합 확인</p>
              </div>
            </div>
          </section>

          {/* 초대 링크 섹션 */}
          <section className="space-y-4">
            <div className="bg-slate-50 p-6 rounded-[32px] border-2 border-dashed border-slate-200 text-center space-y-4">
              <p className="text-[13px] font-bold text-slate-500">초대 링크 공유하기</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleCopyLink}
                  className={`w-full py-4 rounded-2xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
                    isCopied ? 'bg-green-500 text-white' : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {isCopied ? '✅ 링크 복사 완료!' : '📋 링크 주소 복사하기'}
                </button>
                <button className="w-full py-4 bg-[#FEE500] text-[#3c1e1e] rounded-2xl font-bold text-[15px] flex items-center justify-center gap-2 shadow-sm">
                  💬 카카오톡으로 초대하기
                </button>
              </div>
            </div>
          </section>

          {/* 현재 참여 멤버 현황 */}
          <section className="space-y-6">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[16px] font-black text-slate-800">
                참여 중인 멤버 <span className="text-[#D980FA]">{members.length}</span>
              </h2>
              <p className="text-[11px] text-slate-400 animate-pulse">실시간 업데이트 중...</p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {members.map((member) => (
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  key={member.id} 
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl border border-slate-100 shadow-sm relative">
                    {member.icon}
                    {member.role === '방장' && (
                      <span className="absolute -top-1 -right-1 bg-[#D980FA] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">방장</span>
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600">{member.name}</span>
                </motion.div>
              ))}
              
              {/* 대기석 표시 */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2 opacity-20">
                  <div className="w-14 h-14 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-300">
                    ?
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">대기 중</span>
                </div>
              ))}
            </div>
          </section>

          {/* 최종 결과 보기 버튼 (최소 2인 이상 참여 시 활성화) */}
          <div className="pt-6">
            <button 
              disabled={members.length < 2}
              onClick={() => router.push('/result')}
              className={`w-full py-6 rounded-[24px] font-black text-[18px] transition-all shadow-xl ${
                members.length >= 2 
                ? 'bg-[#D980FA] text-white shadow-purple-100 active:scale-95' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              {members.length < 2 ? '멤버가 모이면 시작할 수 있어요' : '모임 궁합 결과 확인하기'}
            </button>
            <p className="text-[11px] text-slate-300 text-center mt-4 font-medium">
              모든 멤버가 참여하면 결과 확인 버튼이 활성화됩니다. [cite: 2026-02-15]
            </p>
          </div>
        </main>

        {/* 푸터 (표준 스타일) */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/faq" className="hover:text-purple-400">도움말</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-purple-400">문의하기</a>
          </div>
          <p className="text-[11px] text-slate-200 font-medium italic">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
