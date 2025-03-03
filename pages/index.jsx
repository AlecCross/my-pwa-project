
import Head from "next/head";
import { useEffect } from "react";
import "./globals.css";

export default function BlackScreen() {
  useEffect(() => {
    const goFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
          console.error("Fullscreen error:", err);
        });
      }
    };

    document.addEventListener("click", goFullscreen, { once: true });
    document.addEventListener("keydown", goFullscreen, { once: true });

    return () => {
      document.removeEventListener("click", goFullscreen);
      document.removeEventListener("keydown", goFullscreen);
    };
  }, []);

  return <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div 
            style={{ 
              backgroundColor: "black", 
              width: "100vw", 
              height: "100vh" }} 
              />;
  </>
}
