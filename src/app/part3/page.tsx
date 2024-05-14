import { FilterablePokedexTable } from "~/app/_components/FilterablePokedexTable";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../index.module.css";

export default function Part3() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>
              <div className={styles.titleContainer}>
                <span className={styles.partText}>Part 3</span>
                <span className={styles.highlight}>Filter Pokemon by Type</span>
              </div>
            </h1>
            <FilterablePokedexTable />
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
