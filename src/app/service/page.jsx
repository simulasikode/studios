"use client";
import Images from "next/image";
import styles from "./service.module.scss";
import Formula from "../components/Formula";
import Contact from "../components/Contact";

export default function Service() {
  return (
    <>
      <div className={styles.warp}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.left_column}>
              <h1>Service</h1>
              <p>We doing hand pulled screen printing on paper</p>
              <p>
                For regular paper, we offer{" "}
                <u>Fedrigoni ARENA Smooth 300gsm.</u> Or you can request what
                kind paper you like. You can calculate your prize before
                printing.
              </p>
              <Images
                src="papersize_white.svg"
                alt="paper size"
                width={565}
                height={420}
                className={styles.img}
              />
              <p>Contact here: studio.simulasi@gmail.com</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.right_column}>
              <Formula />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
