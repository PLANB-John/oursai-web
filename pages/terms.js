import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6 text-slate-600 leading-relaxed text-sm">
      <h1 className="text-3xl font-bold text-slate-900 mb-10">이용약관</h1>
      <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">제1조 (목적)</h2>
      <p className="mb-6 text-slate-500">본 약관은 oursai.kr이 제공하는 운세 정보 서비스의 이용 조건 및 절차를 규정함을 목적으로 합니다.</p>
      
      <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">제2조 (서비스의 성격)</h2>
      <p className="mb-6 text-slate-500">본 서비스가 제공하는 결과는 통계와 명리학적 데이터를 기반으로 한 재미와 조언 목적의 콘텐츠입니다. 어떠한 법적, 의학적, 재무적 결정의 근거로 사용될 수 없으며 그 결과에 대해 책임을 지지 않습니다.</p>

      <div className="mt-20 pt-10 border-t border-slate-100">
        <a href="/" className="text-purple-500 font-bold underline">메인으로 돌아가기</a>
      </div>
    </div>
  );
}
