import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <Link href="https://instagram.com/simulasi.studio" target="_blank">
          <p>Instagram</p>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCEVCvH9UFZ-54JtPfTe8k5g"
          target="_blank"
        >
          <p>Youtube</p>
        </Link>
      </div>
      <div>
        <span>
          <h3>
            ©2023.{" "}
            <Link href="https://simulatedcode.netlify.app/" target="_blank">
              Simulasi
            </Link>
          </h3>
          <span>
            <p>
              <Link href="/term">Term of use</Link>
            </p>
            <p>
              <Link href="/privacy">Privacy policy</Link>
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
