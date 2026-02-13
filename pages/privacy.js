import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6 text-slate-600 leading-relaxed text-sm">
      <h1 className="text-3xl font-bold text-slate-900 mb-10">개인정보처리방침</h1>
      <p className="mb-6">본 서비스(oursai.kr)는 이용자의 개인정보를 중요시하며, 관련 법령을 준수합니다.</p>
      
      <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">1. 수집하는 개인정보 항목</h2>
      <p className="mb-4 text-slate-500">본 서비스는 운세 분석을 위해 이름과 생년월일을 일시적으로 입력받으나, 서버에 저장하지 않고 분석 즉시 폐기합니다.</p>

      <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">2. 쿠키(Cookie) 및 광고 운영</h2>
      <p className="mb-4 text-slate-500">본 서비스는 구글 애드센스(Google AdSense)를 통한 광고를 게재합니다. 구글은 이용자의 방문 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키를 사용하며, 관련 설정은 구글 광고 설정에서 변경할 수 있습니다.</p>

      <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">3. 연락처</h2>
      <p className="mb-4 text-slate-500">문의사항이 있으신 경우 oursai.kr 관리자 이메일로 연락 바랍니다.</p>
      
      <div className="mt-20 pt-10 border-t border-slate-100">
        <a href="/" className="text-purple-500 font-bold underline">메인으로 돌아가기</a>
      </div>
    </div>
  );
}
