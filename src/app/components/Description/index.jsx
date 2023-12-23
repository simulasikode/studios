import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function Description() {
  const phrase =
    "The exploration of materials and the process of printing experience as self-expression on the screen printing technique to find the pleasure of artistic surprises can be achieved.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Simulation studio believe that screen printing techniques still need
          as much experimentation and exploration in the studio.
        </motion.p>
      </div>
    </div>
  );
}
