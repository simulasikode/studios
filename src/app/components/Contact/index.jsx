"use client";
import styles from "./contact.module.scss";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.info}>
          <span>
            <h3>So, Something like that.</h3>
            <p>We do hand-pulled screen print studio</p>
          </span>
        </div>
        <div className={styles.title}>simulasi</div>
        <div className={styles.footer}>
          <div>
            <span>
              <h3>©2023. Simulasi</h3>
              <p>Term of use</p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
