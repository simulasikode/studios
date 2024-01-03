"use client";
import styles from "./page.module.css";
import { AnimatePresence } from "framer-motion";
import Preloader from "./_component/preloader";
import { useEffect, useState } from "react";
import LandingPage from "./_component/Landing";
import Description from "./_component/Description";
import Contact from "./_component/Contact";
import Paralax from "./_component/Paralax";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPage />
      <Description />
      <Paralax />
      <Contact />
    </main>
  );
}
