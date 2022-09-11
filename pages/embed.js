import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Link from "../utils/Link";
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
  const router = useRouter();
  const bigCities = [
    "praha/praha-hlm/embed",
    "brno-mesto/brno/embed",
    "ostrava-mesto/ostrava/embed",
    "plzen-mesto/plzen/embed",
  ];
  const randomCity = bigCities[Math.floor(Math.random() * bigCities.length)];
  useEffect(() => {
    if (router.pathname === "/embed") {
      router.push(randomCity);
    }
  }, [randomCity, router]);

  return (
    <>
      <Head>
        <title>Kdo kandiduje v komunálních volbách</title>
      </Head>
      {/* <Grid container spacing={2} mt={1} direction="column">
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
      </Grid> */}
    </>
  );
}
