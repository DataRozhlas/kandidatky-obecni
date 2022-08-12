import Head from "next/head";
import Image from "next/image";
import imgLoader from "../utils/imgLoader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krásná nová appka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ahoj!!!!</h1>
      </main>
    </div>
  );
}
