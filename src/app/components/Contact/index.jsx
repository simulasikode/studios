"use client";
import styles from "./contact.module.scss";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [4.2, 1]);
  return (
    <motion.div ref={container} className={styles.contact}>
      <div className={styles.body}>
        <motion.div className={styles.info} style={{ y }}>
          <motion.span>
            <h3>Something like that.</h3>
            <p>We do hand-pulled screen print</p>
            <p>for commision, editioning, and workshop.</p>
          </motion.span>
        </motion.div>
        <motion.div className={styles.title} style={{ scale, y }}>
          Studio
        </motion.div>
        <div className={styles.footer}>
          <div>
            <span>
              <h3>©2023. Simulasi</h3>
              <span>
                <p>Term of use</p>
                <p>Privacy policy</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
