"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false),
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <Link href={"/service"}>
          <div className={styles.logo}>
            <p className={styles.copyright}>/</p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Studio</p>
              <p className={styles.dennis}>Simulasi</p>
              <p className={styles.snellenberg}>Printing Service</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
