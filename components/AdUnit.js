import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("애드센스 렌더링 에러:", err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-0 overflow-hidden">
      <ins className="adsbygoogle"
           // [중요] height를 50px~60px로 고정하여 '이음' 사이트처럼 슬림하게 만듭니다.
           style={{ display: 'block', width: '100%', minHeight: '100px', maxHeight: '100px' }} 
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // 본인 번호 유지
           data-ad-slot="XXXXXXXXXX"               // 본인 번호 유지
           // [중요] format을 horizontal로 고정하고, 자동 반응형 확장을 방지합니다.
           data-ad-format="horizontal"
           data-full-width-responsive="false"></ins> 
    </div>
  );
}
