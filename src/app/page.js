"use client";
import styles from "./page.module.css";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader";
import { useEffect, useState } from "react";
import LandingPage from "./components/Landing";
import Description from "./components/Description";
import Contact from "./components/Contact";
import Paralax from "./components/Paralax";

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
