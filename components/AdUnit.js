import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      // 실제 광고 송출
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("애드센스 렌더링 에러:", err);
    }
  }, []);

  return (
    // [수정 1] 바깥 컨테이너의 패딩을 완전히 제거합니다 (py-0)
    <div className="w-full flex justify-center py-0 overflow-hidden">
      <ins className="adsbygoogle"
           // [수정 2] 스타일 변경:
           // - width: '100%'로 꽉 채웁니다.
           // - height: 'auto'로 두되, min/maxHeight로 높이를 60px~80px로 강제합니다.
           style={{ display: 'block', width: '100%', height: 'auto', minHeight: '60px', maxHeight: '80px' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // [!] 본인 번호 유지
           data-ad-slot="XXXXXXXXXX"               // [!] 본인 번호 유지
           // [수정 3] format을 'auto'에서 'horizontal'(가로형)로 변경합니다.
           data-ad-format="horizontal"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
