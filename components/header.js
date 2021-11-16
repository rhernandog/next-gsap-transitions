import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">
          EggPlant.
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};
