import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>My Pokedex</span>
        </h1>
        <div className={styles.cardRow}>
          <Link href="/part1" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Search Pokemon</h3>
              <p className={styles.cardText}>Go to Part 1</p>
            </div>
          </Link>
          <Link href="/part2" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Search Multiple Pokemon</h3>
              <p className={styles.cardText}>Go to Part 2</p>
            </div>
          </Link>
          <Link href="/part3" className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Filter Pokemon by Type</h3>
              <p className={styles.cardText}>Go to Part 3</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
