import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component
        {...pageProps}
        canonical={`http://localhost:3000${router.route}`}
        key={`http://localhost:3000${router.route}`}
      />
    </AnimatePresence>
  );
}

export default MyApp;
