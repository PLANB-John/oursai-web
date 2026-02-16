import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function GroupDetail() {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  
  // 1. 멤버 데이터 상태 관리 [cite: 2026-02-16]
  const [members, setMembers] = useState([
    { 
      id: 'leader', 
      name: '김기수', 
      emoji: '🐔', 
      ilju: '신유', 
      element: '금(金)의 기운', 
      desc: '꼼꼼한 전략가 기질이 강해! 주변 상황을 빠르게 파악하고 자신의 생각을 유연하게 표현하는 편이야. 상황 판단이 빠르고 결단력이 뛰어나 다양한 문제를 해결하는 데 능숙해.' 
    }
  ]);

  // 에러 해결: members 길이를 기반으로 hasJoined 정의 [cite: 2026-02-16]
  const hasJoined = members.length >= 2;

  // 2. 참여 정보(join.js) 수신 로직 [cite: 2026-02-16]
  useEffect(() => {
    if (router.isReady && router.query.joined === 'true' && members.length === 1) {
      setMembers([...members, {
        id: 'new',
        name: router.query.newUserName || '참여자',
        emoji: '🐹',
        ilju: '병인',
        element: '화(火)의 기운',
        desc: '다정하고 인정이 섬세한 면이 있어 서로의 기분이나 분위기를 잘 파악해. 새로운 아이디어로 주변을 놀라게 하는 창의적인 면모와 유연함도 갖춘 매력적인 타입이야.'
      }]);
    }
  }, [router.isReady, router.query]);

  // 3. 링크 복사 및 공유 기능
  const handleCopyLink = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(currentUrl);
    alert("링크가 복사되었습니다!");
    setIsShareOpen(false);
  };

  const handleShareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '우리 사이 - 모임 궁합',
          text: '우리 사이 운명일까? 지금 바로 확인해보세요!',
          url: window.location.href,
        });
      } catch (err) { console.log('공유 취소'); }
    } else { handleCopyLink(); }
    setIsShareOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>{hasJoined ? '대학동기들2' : '대학동기들'} | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-40">
        
        {/* 상단 네비게이션 */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="text-[14px] text-slate-400 font-bold flex items-center gap-1">
            <span className="text-lg">‹</span> 우리 사이
          </button>
          <div className="text-slate-300 cursor-pointer text-xl">⚙️</div>
        </div>

        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mt-4 mb-8">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
              대학동기들{hasJoined && '2'} <span className="text-slate-200 text-lg">⚙️</span>
            </h1>
            <p className="text-[14px] text-slate-400 font-bold mt-1">{members.length}명 참여 중</p>
          </div>

          {/* 상단 버튼 그룹 */}
          <div className="flex gap-2 mb-10 px-6 relative">
            <div className="relative">
              <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-5 py-2.5 bg-[#6c5ce7] text-white rounded-xl text-[13px] font-black shadow-lg flex items-center gap-1.5 active:scale-95 transition-all">
                <span>🔗</span> 공유하기
              </button>
              <AnimatePresence>
                {isShareOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-12 left-0 w-[180px] bg-white rounded-2xl shadow-2xl border border-slate-50 z-[60] p-2">
                    <button onClick={handleCopyLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left">
                      <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 text-sm">📋</div>
                      <span className="text-[13px] font-bold text-slate-600">링크 복사</span>
                    </button>
                    <button onClick={handleShareLink} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 text-sm">🔗</div>
                      <span className="text-[13px] font-bold text-slate-600">링크 공유</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => router.push('/join')} className="px-5 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-xl text-[13px] font-black hover:bg-slate-50 transition-all flex items-center gap-1"><span>👤+</span> 나도 참여</button>
            <button onClick={() => router.push('/create-group')} className="px-5 py-2.5 bg-[#f3f0ff] text-[#6c5ce7] rounded-xl text-[13px] font-black hover:bg-[#ebe5ff] transition-all">+ 새 모임 만들기</button>
          </div>

          <div className="w-full flex border-b border-slate-50 mb-10">
            <div className="flex-1 text-center pb-4 text-[15px] font-black border-b-2 border-slate-800 text-slate-800">궁합</div>
          </div>

          {/* --- 궁합 지수 및 연결망 (2인 이상일 때) --- */}
          {hasJoined ? (
            <div className="w-full px-8 flex flex-col items-center">
              <div className="w-full mb-14">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[17px] font-black text-slate-800">궁합 지수 <span className="text-[#6c5ce7]">59</span></span>
                  <span className="text-[11px] font-bold text-orange-400 bg-orange-50 px-3 py-1 rounded-full animate-pulse">우리는 여기!</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div initial={{ width: 0 }} animate={{ width: '59%' }} className="h-full bg-gradient-to-r from-yellow-400 to-[#6c5ce7]" />
                </div>
              </div>

              <div className="relative flex flex-col items-center gap-16 py-4">
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl border-2 border-blue-50">{members[0].emoji}</div>
                  <span className="text-[13px] font-black text-slate-600">{members[0].name}</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-[140%] bg-yellow-400 flex items-center justify-center">
                  <div className="bg-yellow-400 text-white text-[11px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">그럭저럭</div>
                </div>
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl border-2 border-purple-50">{members[1].emoji}</div>
                  <span className="text-[13px] font-black text-slate-600">{members[1].name}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[280px] flex justify-center items-center">
              <div className="absolute w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-24 h-24 bg-white rounded-[32px] shadow-xl flex items-center justify-center text-5xl border border-white">🐔</div>
                <span className="bg-white px-4 py-1.5 rounded-full shadow-sm text-[13px] font-black text-slate-700">김기수</span>
              </motion.div>
            </div>
          )}

          {/* 상세 리포트 카드 */}
          <section className="w-full px-6 mt-16 space-y-6">
            {members.map((m, idx) => (
              <div key={idx} className="bg-[#fcfcfd] rounded-[35px] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-50">{m.emoji}</div>
                  <div>
                    <p className="text-[17px] font-black text-slate-800">{m.name}</p>
                    <p className="text-[12px] text-slate-400 font-bold uppercase pt-1">{m.ilju} - <span className="text-[#6c5ce7]">{m.element}</span></p>
                  </div>
                </div>
                <p className="text-[15px] text-slate-500 leading-8 font-medium break-keep">{m.desc}</p>
              </div>
            ))}
            
            <div className="text-center space-y-4 pt-10">
              <p className="text-[13px] font-bold text-slate-300 tracking-tight">링크를 공유해서 친구를 초대하세요</p>
              <button onClick={() => setIsShareOpen(!isShareOpen)} className="px-8 py-3 bg-[#6c5ce7] text-white rounded-full text-[14px] font-black shadow-lg shadow-purple-100 flex items-center gap-2 mx-auto active:scale-95 transition-all"><span>🔗</span> 공유하기</button>
            </div>

            {/* --- 수정사항 2: 상세 가이드 아코디언 (내용 강화) --- */}
            <div className="pt-20 space-y-6 mb-20">
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
                  a: "멤버 간의 1:1 케미 등급과 관계의 특징, 그리고 전체 모임의 조화도를 시각적으로 확인할 수 있습니다. 전통적인 사주를 현대적인 네트워크로 만나보세요! [cite: 2026-02-16]" 
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

        {/* --- 수정사항 1: 표준 푸터 구성 (5종 링크) --- */}
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
          <p className="text-[11px] text-slate-200 font-medium italic tracking-tight">© 2026 oursai.kr | All Rights Reserved.</p>
        </footer>

        {/* 하단 고정 플로팅 바 */}
        {!hasJoined && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-50">
            <div className="bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-[32px] shadow-2xl flex items-center justify-between">
              <p className="text-[13px] font-bold text-slate-600 ml-2 flex items-center gap-1">
                <span className="text-orange-400">✨</span> 1명과의 궁합이 궁금하다면?
              </p>
              <button onClick={() => router.push('/join')} className="bg-[#6c5ce7] text-white px-6 py-3 rounded-2xl font-black text-[14px] shadow-lg active:scale-95 transition-all">나도 참여하기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
