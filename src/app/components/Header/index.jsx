"use client";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
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
