"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.04 * direction;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sliderAnimation = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        //markers: true,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);

    // Cleanup
    return () => {
      sliderAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <Image
        src="/images/background.jpg"
        fill={true}
        alt="background"
        loading="eager"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Nothing is real. Everything is simulation -</p>
          <p ref={secondText}>Nothing is real. Everything is simulation -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.2} className={styles.description}>
        <p>Handpulled</p>
        <p>Screen Printing</p>
        <p>Studio</p>
      </div>
    </motion.main>
  );
}
