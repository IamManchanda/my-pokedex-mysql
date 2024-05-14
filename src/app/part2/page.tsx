import { PokemonArrayForm } from "~/app/_components/PokemonArrayForm";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../index.module.css";

export default function Part2() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>
              <div className={styles.titleContainer}>
                <span className={styles.partText}>Part 2</span>
                <span className={styles.highlight}>
                  Search Multiple Pokemon
                </span>
              </div>
            </h1>
            <PokemonArrayForm />
          </div>
          <Link href="/" passHref>
            <Button
              variant="outlined"
              color="primary"
              className={styles.backButton}
              startIcon={<ArrowBackIcon />}
            >
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
