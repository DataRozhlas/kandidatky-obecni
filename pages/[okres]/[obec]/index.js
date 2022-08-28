import { useState } from "react";
import { tsvParse } from "d3-dsv";
import { Grid } from "@mui/material";

import NajdiObec from "../../../components/NajdiObec";
import ObecContainer from "../../../components/ObecContainer";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

export default function Obec({ obecData, okresData }) {
  const [rok, setRok] = useState("2022");

  return (
    <Grid container spacing={3} mt={1} direction="column">
      <Grid item>
        <NajdiObec />
      </Grid>
      <ObecContainer
        obecData={obecData}
        okresData={okresData}
        rok={rok}
        setRok={setRok}
      />
    </Grid>
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
