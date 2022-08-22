import Head from "next/head";
import Link from "next/link";
import readCSVdata from "../utils/dataProvider";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const okresy = readCSVdata("2022/cnumnuts")
    .filter(nuts => nuts.NUTS.length === 6)
    .map(okres => {
      return {
        ...okres,
        key: okres.NAZEVNUTS.normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .replaceAll(" ", "-")
          .toLowerCase(),
      };
    });
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
