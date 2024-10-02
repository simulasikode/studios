"use client";
import Images from "next/image";
import styles from "./service.module.scss";
import Formula from "../_component/Formula";
import Contact from "../_component/Contact";

export default function Service() {
  return (
    <>
      <div className={styles.warp}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.left_column}>
              <h1>Service</h1>
              <p>
                We doing hand pulled screen printing on paper using waterbase
                ink.
              </p>
              <p>
                For regular paper, we offer <u>Fedrigoni ARENA 300gsm.</u> Or
                you can request what kind paper you like. You can use the
                calculator to find out the printing costs according to the size
                you want.
              </p>
              <p>Maximal print area 53x83cm</p>
              <p>This a sample preview regular paper size and print areas. </p>
              <p>Request a Quote here</p>
              <Images
                src="papersize_white.svg"
                alt="paper size"
                width={565}
                height={420}
                className={styles.img}
              />
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
