import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function Description() {
  const phrase =
    "Explorations of materials and processes of print experience self-expression of screen printing techniques to discover the joy of achievable artistic surprises.";
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
          Studio Simulation believes that the screen printing technique is still
          important to experiment with because it still questions that need to
          be answered in the studio space.
        </motion.p>
      </div>
    </div>
  );
}
