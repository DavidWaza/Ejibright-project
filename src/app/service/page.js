"use client";
import styles from "../page.module.css";
import FullServices from "./fullService";
import Hero from "./hero";

export default function Service() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <FullServices />
      </main>
    </>
  );
}
