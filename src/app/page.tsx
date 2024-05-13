import { PokemonForm } from "~/app/_components/PokemonForm";
import { PokemonArrayForm } from "~/app/_components/PokemonArrayForm";
import { FilterablePokedexTable } from "~/app/_components/FilterablePokedexTable";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>My Pokedex</span>
        </h1>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Search Pokemon</h3>
            <PokemonForm />
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Search Multiple Pokemon</h3>
            <PokemonArrayForm />
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Filter Pokemon by Type</h3>
            <FilterablePokedexTable />
          </div>
        </div>
      </div>
    </main>
  );
}
