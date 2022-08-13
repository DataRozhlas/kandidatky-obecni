import Head from "next/head";
import readData from "../utils/dataProvider";
import styles from "../styles/Home.module.css";

export default function Home({ okresy }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kdo kandiduje</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ahoj!!!!</h1>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const okresy = readData("2022/cnumnuts").filter(
    nuts => nuts.NUTS.length === 6
  );
  return {
    props: {
      okresy,
    },
  };
}
