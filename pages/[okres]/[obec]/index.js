import { useState, useEffect } from "react";
import { tsvParse } from "d3-dsv";
import { Grid, Container } from "@mui/material";
import Head from "next/head";

import NajdiObec from "../../../components/NajdiObec";
import ObecInfo from "../../../components/ObecInfo";
import RokSwitch from "../../../components/RokSwitch";
import ObecStats from "../../../components/ObecStats";
import ResponsiveDrawer from "../../../components/ResponsiveDrawer";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

export default function Obec({ obecData, okresData }) {
  const [rok, setRok] = useState("2022");
  const [filtr, setFiltr] = useState({ muzi: true, zeny: true });

  // zjisti šířku obrazovky
  const [isMobile, setIsMobile] = useState(
    typeof window === "undefined" ? true : window.innerWidth <= 600
  );

  useEffect(() => {
    const handleWindowResize = () => setIsMobile(window.innerWidth <= 600);
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("DOMContentLoaded", handleWindowResize);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("DOMContentLoaded", handleWindowResize);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          {`${obecData.NAZEVZAST} – interaktivní kandidátky pro komunální volby`}
        </title>
      </Head>
      <ResponsiveDrawer okres={false} filtr={filtr} setFiltr={setFiltr}>
        <Grid container spacing={3} mt={-4} direction="column">
          <Grid item>
            <NajdiObec />
          </Grid>
          <Grid item>
            <Container sx={{ ml: 0 }}>
              <Grid container direction="column" spacing={2}>
                <ObecInfo obecData={obecData} okresData={okresData} />
                <RokSwitch rok={rok} setRok={setRok} />
                <ObecStats
                  rok={rok}
                  obecData={obecData}
                  okresData={okresData}
                  isMobile={isMobile}
                  filtr={filtr}
                ></ObecStats>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </>
  );
}

export async function getStaticProps({ params }) {
  //info o obci
  const okresZastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${params.okres}/zastupitelstva.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  const obecData = okresZastupitelstva.find(obec => obec.key === params.obec);
  const okresData = okresy.find(okres => okres.NUMNUTS === obecData.OKRES);

  return {
    props: {
      obecData,
      okresData,
      // obecKandidati,
    },
  };
}
export async function getStaticPaths() {
  const zastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/zastupitelstva.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));

  return {
    paths: zastupitelstva.map(obec => {
      const okres = okresy.find(okres => okres.NUMNUTS === obec.OKRES);
      return { params: { okres: okres.key, obec: obec.key } };
    }),
    fallback: false,
  };
}
