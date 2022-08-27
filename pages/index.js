import Head from "next/head";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import NajdiObec from "../components/NajdiObec";

import okresy from "../public/okresy.json";

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
    <>
      <Head>
        <title>Kdo kandiduje v komunálních volbách</title>
      </Head>
      <Grid container spacing={2} mt={1} direction="column">
        <Grid item>
          <NajdiObec />
        </Grid>
        <Grid item>
          {" "}
          <ul>
            {okresy.map(okres => (
              <li key={okres.NUMNUTS}>
                <Link href={`/${okres.key}`}>{okres.NAZEVNUTS}</Link>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
}
