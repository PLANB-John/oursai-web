import '../styles/globals.css'
import Script from 'next/script' // Next.js 전용 스크립트 컴포넌트 [cite: 2026-02-17]

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* [수정 완료] 대표님의 실제 구글 애드센스 ID를 적용했습니다 */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7078124525466670"
        crossOrigin="anonymous"
        strategy="afterInteractive" 
      />
      
      {/* 실제 페이지 내용들 */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
