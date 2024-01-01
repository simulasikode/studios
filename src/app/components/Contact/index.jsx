"use client";
import styles from "./contact.module.scss";
import Images from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const top = useTransform(scrollYProgress, [0, 1], [-148, 0]);
  const originY = useTransform(scrollYProgress, [0, 1], [0.4, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.0, 1]);
  return (
    <motion.div ref={container} className={styles.contact}>
      <div className={styles.body}>
        <motion.div className={styles.info} style={{ top }}>
          <motion.span>
            <h3>Something like that.</h3>
            <p>We do hand-pulled screen print</p>
            <p>for commission, editioning, and workshop.</p>
          </motion.span>
        </motion.div>
        <motion.div className={styles.studio} style={{ scale, originY }}>
          <Images src="studio.svg" alt="studio" width={1440} height={286} />
        </motion.div>
      </div>
    </motion.div>
  );
}
