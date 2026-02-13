import React, { useState } from 'react';
import Head from 'next/head';

const relationshipDB = {
  L1: ["전생에 나라를 같이 구했나 봐. 너네는 떨어지면 무조건 손해야.", "와 진짜 소름 돋는다. 너네 거의 텔레파시 급인데?", "너네 사이는 찹쌀떡보다 더 쫀득해. 절대 안 떨어질 운명이니까 걱정 마.", "이 조합 완전 찬성! 너네끼리 있으면 안 될 일도 기적처럼 풀릴 거야.", "찰떡보다 쫀득하고 콩떡보다 고소해. 세상 사람들이 다 너네만 같아라!"],
  L2: ["호흡이 아주 척척 맞는다. 같이 사업이라도 시작해 보는 게 어때?", "만나기만 하면 에너지가 풀 충전되지? 서로에게 긍정적인 자극을 주는 사이야.", "쿵 하면 짝 하고 나오는 게 예술이다. 시너지가 너무 좋아서 뭐든 같이 해봐!", "서로의 부족한 점을 딱딱 채워주는 퍼즐 조각 같아. 1+1이 100이 되는 조합!"],
  L3: ["자극적이진 않은데 이상하게 편안해. 따뜻한 보리차 같은 관계지.", "서로의 사생활을 존중하면서도 필요할 때 곁에 있어 주는 담백한 사이네.", "잔잔한 파도 같은 관계네. 꾸준하게 오래갈 인연이니까 조급해하지 마.", "심심해 보여도 이런 게 진짜 오래간다. 적당한 거리감이 오히려 무기야."],
  L4: ["좋아하니까 싸우는 거 맞지? 한쪽이 지면 다른 쪽이 이겨야 직성이 풀리는네.", "말 한마디가 가시처럼 돋아날 때가 있어. 서로의 선을 넘지 않게 조심!", "야 적당히 좀 싸워라. 좋아하니까 자꾸 시비 거는 거 다 보여.", "한 번씩 킹받는 포인트가 꼭 있네. 오늘은 입조심 좀 하는 게 좋겠어."],
  L5: ["오늘은 일단 각자 집에 있자. 만나면 왠지 기운만 빠질 확률이 높아.", "물과 기름 같은 사이네. 섞이려 노력할수록 스트레스만 받을 수 있어.", "기 싸움이 장난 아닌데? 서로 자존심 세우다가 소중한 인연 놓치지 마.", "만나면 기가 아득해지는 기분이 들 거야. 오늘은 톡으로만 대화하자."]
};

const levels = [
  { id: 'L1', name: "찰떡콩떡", icon: "💜" },
  { id: 'L2', name: "쿵짝쿵짝", icon: "✨" },
  { id: 'L3', name: "도란도란", icon: "☁️" },
  { id: 'L4', name: "티격태격", icon: "⚠️" },
  { id: 'L5', name: "어질어질", icon: "🌀" }
];

export default function SaiProject() {
  const [step, setStep] = useState('input');
  const [finalResult, setFinalResult] = useState(null);

  const startAnalysis = () => {
    setStep('loading');
    setTimeout(() => {
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];
      const msgs = relationshipDB[randomLevel.id];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      setFinalResult({ ...randomLevel, msg: randomMsg });
      setStep('result');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:py-10">
      <Head>
        <title>우리사이 (oursai.kr) - 너랑 나 무슨 사이?</title>
        <meta name="description" content="이름과 생년월일로 풀어보는 찰진 관계 분석 서비스" />
      </Head>

      <div className="w-full max-w-[480px] min-h-screen sm:min-h-[850px] bg-white shadow-2xl flex flex-col relative overflow-hidden sm:rounded-[40px]">
        <main className="flex-1 px-8 py-12">
          <h1 className="text-3xl font-black text-purple-400 italic mb-12">Sai</h1>

          {step === 'input' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-2xl font-bold mb-10 leading-tight">안녕? 오늘 너랑 그 사람,<br/><span className="text-purple-500">어떤 사이</span>인지 봐줄까?</h2>
              <div className="space-y-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-purple-300 mb-2">나</p>
                  <input type="text" placeholder="이름 입력" className="w-full bg-transparent text-xl font-bold outline-none mb-2" />
                  <input type="date" className="w-full bg-transparent text-sm text-slate-400 outline-none" />
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-purple-300 mb-2">상대방</p>
                  <input type="text" placeholder="이름 입력" className="w-full bg-transparent text-xl font-bold outline-none mb-2" />
                  <input type="date" className="w-full bg-transparent text-sm text-slate-400 outline-none" />
                </div>
              </div>
              <button onClick={startAnalysis} className="w-full py-5 bg-purple-400 text-white rounded-3xl text-xl font-bold shadow-lg shadow-purple-100 active:scale-95 transition-all">우리 사이 확인하기</button>
            </div>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center py-24 animate-pulse">
              <div className="text-7xl mb-8">🔮</div>
              <h2 className="text-xl font-bold text-center leading-relaxed text-slate-700">두 사람의 기운을<br/>정밀하게 섞는 중...</h2>
            </div>
          )}

          {step === 'result' && finalResult && (
            <div className="animate-in zoom-in duration-500 text-center py-10">
              <span className="text-7xl mb-6 block">{finalResult.icon}</span>
              <h2 className="text-4xl font-black text-slate-800 mb-6">{finalResult.name}</h2>
              <p className="text-xl leading-relaxed text-slate-600 whitespace-pre-wrap font-medium mb-12">{finalResult.msg}</p>
              <button onClick={() => setStep('input')} className="text-slate-400 underline decoration-slate-200 underline-offset-4">다시 하기</button>
            </div>
          )}

          {/* --- 애드센스용 고품질 장문 칼럼 섹션 --- */}
          <section className="mt-24 pt-12 border-t-2 border-slate-50 space-y-16 pb-20">
            <h3 className="text-xs font-bold text-slate-300 mb-8 uppercase tracking-[0.2em]">Destiny & Life Guide</h3>
            
            <article>
              <h4 className="text-lg font-bold text-slate-800 mb-4">사주 명리학으로 보는 인연의 깊이와 운명의 흐름</h4>
              <p className="text-slate-500 leading-8 text-sm">
                사주는 단순히 미래를 예언하는 도구가 아닙니다. 우리가 태어난 순간의 천체 에너지와 음양오행의 배치를 분석하여 인생의 지도를 그리는 학문입니다. 
                특히 타인과의 관계에서 발생하는 '합(合)'과 '충(冲)'의 원리를 이해하면, 왜 어떤 사람과는 첫 만남부터 편안하고 어떤 사람과는 이유 없이 부딪히는지 그 근본적인 원인을 알 수 있습니다. 
                우리 사이(Sai)는 이러한 동양 철학적 근거를 바탕으로 현대적인 해석을 더해 여러분의 소중한 인연을 분석합니다.
              </p>
            </article>

            <article>
              <h4 className="text-lg font-bold text-slate-800 mb-4">성공적인 인간관계를 위한 오행의 조화</h4>
              <p className="text-slate-500 leading-8 text-sm">
                목(木), 화(火), 토(土), 금(金), 수(水)의 다섯 가지 에너지는 서로를 살리기도 하고(상생), 서로를 억제하기도 합니다(상극). 
                예를 들어 화(火)의 기운이 강한 사람은 수(水)의 기운을 가진 사람을 만났을 때 자신의 과한 열정을 다스릴 수 있는 지혜를 얻기도 합니다. 
                인간관계에서의 스트레스는 대개 이 에너지의 불균형에서 옵니다. 자신의 에너지를 알고 상대의 에너지를 이해하는 것, 그것이 바로 행복한 삶의 시작입니다.
              </p>
            </article>

            <article>
              <h4 className="text-lg font-bold text-slate-800 mb-4">부의 흐름을 바꾸는 운의 관리법</h4>
              <p className="text-slate-500 leading-8 text-sm">
                재물운은 단순히 하늘에서 떨어지는 것이 아닙니다. 명리학에서 재성은 내가 통제하고 다스리는 기운을 의미합니다. 
                운이 들어오는 시기(용신운)에는 주변 정리를 청결히 하고, 긍정적인 언어를 사용하는 것이 중요합니다. 
                특히 나쁜 운의 시기를 지혜롭게 넘기는 법은 인내와 수양에 있습니다. 우리 사이에서 제공하는 힌트를 통해 오늘 당신의 운 흐름을 점검해 보세요.
              </p>
            </article>
          </section>
        </main>
        
        <footer className="p-8 bg-slate-50/50 text-center space-y-4">
          <div className="flex justify-center gap-6 text-[11px] text-slate-400 font-bold">
            <a href="/privacy" className="hover:text-purple-400 transition-colors">개인정보처리방침</a>
            <a href="/terms" className="hover:text-purple-400 transition-colors">이용약관</a>
          </div>
          <p className="text-[10px] text-slate-300">© 2026 oursai.kr | Designed for your destiny</p>
        </footer>
      </div>
    </div>
  );
}
