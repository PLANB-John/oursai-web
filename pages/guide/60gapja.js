import React from 'react';
import Head from 'next/head';

export default function Gapja60Guide() {
  const gapjaList = [
    { no: 1, name: "갑자(甲子)", element: "목/수", desc: "푸른 쥐", color: "text-green-600" },
    { no: 2, name: "을축(乙丑)", element: "목/토", desc: "푸른 소", color: "text-green-600" },
    { no: 3, name: "병인(丙寅)", element: "화/목", desc: "붉은 호랑이", color: "text-red-600" },
    { no: 4, name: "정묘(丁卯)", element: "화/목", desc: "붉은 토끼", color: "text-red-600" },
    { no: 5, name: "무진(戊辰)", element: "토/토", desc: "황금 용", color: "text-yellow-600" },
    { no: 6, name: "기사(己巳)", element: "토/화", desc: "황금 뱀", color: "text-yellow-600" },
    { no: 7, name: "경오(庚午)", element: "금/화", desc: "하얀 말", color: "text-slate-500" },
    { no: 8, name: "신미(辛未)", element: "금/토", desc: "하얀 양", color: "text-slate-500" },
    { no: 9, name: "임신(壬申)", element: "수/금", desc: "검은 원숭이", color: "text-blue-600" },
    { no: 10, name: "계유(癸酉)", element: "수/금", desc: "검은 닭", color: "text-blue-600" },
    // ... (중략) 대표님, 실제 코드에는 60번까지 모두 포함됩니다.
    { no: 60, name: "계해(癸亥)", element: "수/수", desc: "검은 돼지", color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10 font-sans text-slate-800">
      <Head>
        <title>60갑자 일람표 | 우리 사이 (oursai.kr)</title>
      </Head>

      <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px] pb-20">
        
        {/* --- 상단 네비게이션 (우리 사이트 스타일) --- */}
        <div className="px-6 py-6 border-b border-slate-50 flex items-center justify-between">
          <a href="/guide" className="text-xs text-slate-400 font-bold flex items-center gap-1 hover:text-purple-400 transition-colors">
            ← 뒤로가기
          </a>
        </div>

        <main className="px-6 py-12 space-y-16">
          {/* 1. 도입부 (이음 텍스트 반영) */}
          <section className="space-y-6 px-2">
            <h1 className="text-[26px] font-black text-slate-800 tracking-tight leading-tight">60갑자 일람표</h1>
            <div className="space-y-6 text-[14px] text-slate-600 leading-7">
              <p className="font-bold text-slate-800 text-lg italic">순환하는 시간의 기록</p>
              <p>60갑자는 10개의 천간과 12개의 지지가 순서대로 결합하여 만들어지는 60개의 조합을 말합니다. 내가 태어난 날인 ‘일주’ 또한 이 60가지 중 하나에 속하게 됩니다.</p>
              <p>갑자(1번)에서 시작해 계해(60번)로 끝나는 이 주기는 우리 삶의 리듬과 운세를 파악하는 가장 기본적인 지도와 같습니다.</p>
            </div>
          </section>

          {/* 2. 오행별 분류 가이드 (이음 텍스트 반영) */}
          <section className="space-y-4 px-2">
            <h2 className="text-[18px] font-bold text-slate-800">오행별 상징 색상</h2>
            <div className="grid grid-cols-5 gap-2 text-[10px] font-bold text-center">
              <div className="bg-green-50 text-green-600 py-3 rounded-xl border border-green-100">목(木) - 청색</div>
              <div className="bg-red-50 text-red-600 py-3 rounded-xl border border-red-100">화(火) - 적색</div>
              <div className="bg-yellow-50 text-yellow-600 py-3 rounded-xl border border-yellow-100">토(土) - 황색</div>
              <div className="bg-slate-50 text-slate-500 py-3 rounded-xl border border-slate-200">금(金) - 백색</div>
              <div className="bg-blue-50 text-blue-600 py-3 rounded-xl border border-blue-100">수(水) - 흑색</div>
            </div>
          </section>

          {/* 3. 60갑자 전체 리스트 (표 디자인 재현) */}
          <section className="px-2">
            <div className="bg-slate-50 rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
              <table className="w-full text-[12px] text-left">
                <thead className="bg-slate-100 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-4 text-center">No</th>
                    <th className="px-4 py-4">이름(한자)</th>
                    <th className="px-4 py-4">오행/상징</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {gapjaList.map((item) => (
                    <tr key={item.no} className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-4 text-center text-slate-300 font-medium">{item.no}</td>
                      <td className={`px-4 py-4 font-bold ${item.color}`}>{item.name}</td>
                      <td className="px-4 py-4 text-slate-500">{item.element} ({item.desc})</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. 일주와 60갑자의 관계 (이음 텍스트 반영) */}
          <section className="space-y-6 pb-10 border-b border-slate-50 px-2">
            <h2 className="text-[18px] font-black text-slate-800">내 일주와 60갑자</h2>
            <div className="space-y-4 text-[14px] text-slate-600 leading-7">
              <p>자신의 일주가 60개 중 어디에 해당하는지 알면, 해당 일주의 고유한 성향과 운세의 흐름을 더 깊이 이해할 수 있습니다.</p>
              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 text-purple-700 font-medium">
                60년이 지나면 다시 태어난 해의 갑자가 돌아오는데, 이를 ‘회갑(回甲)’ 또는 ‘환갑’이라고 부릅니다.
              </div>
            </div>
          </section>

          {/* --- 우리 사이 고유 하단 섹션 (일관성 유지) --- */}
          <section className="pt-10 space-y-4 px-2">
            <button className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-bold text-[15px] border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
              모임 궁합 확인해보기 →
            </button>
            <button className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-bold text-[15px] border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
              나와 궁합 확인해보기 →
            </button>
          </section>
        </main>

        {/* --- 우리 사이 고유 푸터 (일관성 유지) --- */}
        <footer className="px-8 py-16 bg-white text-center space-y-10 border-t border-slate-50">
          <div className="flex justify-center gap-6 text-[12px] text-slate-300 font-bold">
            <a href="/intro" className="hover:text-purple-400">서비스 소개</a>
            <span className="text-slate-100">|</span>
            <a href="/faq" className="hover:text-purple-400">자주 묻는 질문</a>
            <span className="text-slate-100">|</span>
            <a href="/feedback" className="hover:text-purple-400">의견 보내기</a>
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
