import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      // 구글 광고를 불러오는 코드 (실제 승인 후 작동)
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("애드센스 에러:", err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-4 bg-slate-50/30">
      {/* 실제 광고가 들어갈 자리 (지금은 로고나 텍스트로 대체) */}
      <ins className="adsbygoogle"
           style={{ display: 'block', minWidth: '300px', minHeight: '100px' }}
           data-ad-client="ca-pub-XXXXXXXXXXXX" // 나중에 실제 번호로 수정
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
