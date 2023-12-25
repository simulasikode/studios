import styles from "./contact.module.scss";

export default function Index() {
  return (
    <div className={styles.footer}>
      <h1> Lets do simulated for your work.</h1>
      <p>studio.simulasi@gmail.com</p>
      <div className={styles.copy}>
        <span>© 2023 Studio.</span>
        <span>Everything is simulation</span>
      </div>
    </div>
  );
}
