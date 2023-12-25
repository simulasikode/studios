import styles from "./service.module.scss";
import Contact from "../components/Contact";

export default function ServicePage() {
  return (
    <div>
      <div className={styles.service}>
        <h1>Service</h1>
      </div>
      <Contact />
    </div>
  );
}
