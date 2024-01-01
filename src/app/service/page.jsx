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
              <p>
                We doing hand pulled screen printing on paper using waterbase
                ink.
              </p>
              <p>
                For regular paper, we offer{" "}
                <u>Fedrigoni ARENA Smooth 300gsm.</u> Or you can request what
                kind paper you like. Before that you can calculate first your
                prize before order.
              </p>
              <p>Maximal print area 43x64cm</p>
              <p>This a sample preview regular paper size and print areas. </p>
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
