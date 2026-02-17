import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      // 실제 광고 송출 (승인 후 작동)
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("애드센스 렌더링 에러:", err);
    }
  }, []);

  return (
    // 감싸는 div의 패딩을 제거(py-0)하여 불필요한 여백을 없앱니다.
    <div className="w-full flex justify-center py-0 overflow-hidden">
      <ins className="adsbygoogle"
           // minHeight를 80px로 줄이고, maxHeight를 96px로 설정하여 
           // 광고가 위 통계 카드보다 훨씬 커지지 않도록 제한합니다.
           style={{ display: 'block', minWidth: '300px', minHeight: '80px', maxHeight: '96px' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // [!] 본인 번호 유지
           data-ad-slot="XXXXXXXXXX"               // [!] 본인 번호 유지
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
