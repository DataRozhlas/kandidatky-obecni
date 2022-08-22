import Head from "next/head";
import Link from "next/link";
import okresy from "../data/processed/okresy.json";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      okresy,
    },
  };
}

export default function Home({ okresy }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kdo kandiduje</title>
      </Head>

      <main className={styles.main}>
        <ul>
          {okresy.map(okres => (
            <li key={okres.NUTS}>
              <Link href={`/${okres.key}`}>{okres.NAZEVNUTS}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
