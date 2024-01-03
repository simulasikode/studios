"use client";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <p className={styles.copyright}>
              <Image
                src={"simulasi.svg"}
                alt="simulasi logo"
                height={21}
                width={16}
              />
            </p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Studio</p>
              <p className={styles.dennis}>Simulasi</p>
              <p className={styles.snellenberg}>Printing Service</p>
            </div>
          </div>
        </Link>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link href="/artists">Artists</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
