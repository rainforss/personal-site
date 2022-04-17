import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-W9BY6450Q3"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-W9BY6450Q3');
    `}
      </Script>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          key={`http://localhost:3000${router.asPath}`}
        />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
