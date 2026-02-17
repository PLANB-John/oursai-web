import '../styles/globals.css'
import Script from 'next/script' // [1] Next.js 전용 스크립트 컴포넌트 추가 [cite: 2026-02-17]

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* [2] 구글 애드센스 엔진 가동 스크립트 [cite: 2026-02-17] */}
      {/* 'ca-pub-XXXXXXXXXXXXXXXX' 부분은 나중에 승인 후 실제 본인의 ID로 바꾸시면 됩니다. */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive" 
      />
      
      {/* 실제 페이지 내용들 */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
