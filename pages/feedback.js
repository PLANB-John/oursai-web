import React, { useState } from 'react';
import Head from 'next/head';

export default function Feedback() {
  const [category, setCategory] = useState('일반 의견');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');

  const categories = [
    { name: '버그 신고', icon: '🐞' },
    { name: '기능 제안', icon: '💡' },
    { name: '일반 의견', icon: '💬' },
    { name: '불편 사항', icon: '🙁' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 10) {
      alert('내용을 10자 이상 적어주세요.');
      return;
    }
    // 전송 로직이 들어갈 자리입니다.
    alert('소중한 의견이 전송되었습니다. 감사합니다!');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>의견 보내기 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/" className="text-xs text-slate-400 font-bold hover:text-purple-400 transition-colors">
            ← 홈으로
          </a>
        </div>

        <main className="px-8 py-10 space-y-12">
          {/* 타이틀 섹션 */}
          <section className="space-y-2">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">의견 보내기</h1>
            <p className="text-[13px] text-slate-400 leading-6">서비스 개선에 도움이 되는 의견을 들려주세요.</p>
          </section>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* 의견 유형 선택 (2x2 그리드) */}
            <div className="space-y-4">
              <label className="text-[14px] font-bold text-slate-700">의견 유형</label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setCategory(item.name)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                      category === item.name 
                      ? 'bg-purple-50 border-purple-200 ring-1 ring-purple-100' 
                      : 'bg-white border-slate-100 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className={`text-[13px] font-bold ${category === item.name ? 'text-purple-600' : 'text-slate-500'}`}>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 내용 입력 (TextArea) */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-bold text-slate-700">내용 *</label>
                <span className={`text-[11px] font-medium ${content.length < 10 ? 'text-slate-300' : 'text-purple-400'}`}>
                  최소 10자 이상 ({content.length}/10)
                </span>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="자세히 적어주시면 큰 도움이 됩니다."
                className="w-full h-40 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100 focus:bg-white transition-all resize-none"
              />
            </div>

            {/* 이메일 입력 */}
            <div className="space-y-3">
              <label className="text-[14px] font-bold text-slate-700">이메일 (선택)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="답변을 받고 싶으시면 입력해 주세요."
                className="w-full py-4 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-100 focus:bg-white transition-all"
              />
            </div>

            {/* 전송 버튼 (우리 사이트 스타일) */}
            <button 
              type="submit"
              className={`w-full py-5 rounded-[24px] font-bold text-[16px] transition-all shadow-lg ${
                content.length >= 10 
                ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-100' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none'
              }`}
            >
              의견 보내기 →
            </button>
          </form>
        </main>

        {/* --- 우리 사이 고유 푸터 (일관성 유지) --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/guide" className="hover:text-purple-400">사주 가이드</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
          </div>
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
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
