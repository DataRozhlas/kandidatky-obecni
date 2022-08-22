import Head from "next/head";
import readCSVdata from "../utils/dataProvider";
import styles from "../styles/Home.module.css";

export default function Home({ okresy }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kdo kandiduje</title>
      </Head>

      <main className={styles.main}>
        <ul>
          {okresy.map(okres => (
            <li key={okres.NUTS}>{okres.NAZEVNUTS}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const okresy = readCSVdata("2022/cnumnuts").filter(
    nuts => nuts.NUTS.length === 6
  );
  return {
    props: {
      okresy,
    },
  };
}
