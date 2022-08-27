import { useEffect, useContext } from "react";
import { tsvParse } from "d3-dsv";
import { useQuery } from "react-query";
import GlobalContext from "../../../utils/globalContext";
import { Grid } from "@mui/material";
import NajdiObec from "../../../components/NajdiObec";
import ObecInfo from "../../../components/ObecInfo";
import RokSwitch from "../../../components/RokSwitch";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

export default function Obec({ obecData, okresData }) {
  const fetchCandidates = async () => {
    const data = await fetch(
      `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${okresData.key}/${obecData.key}/kandidati.tsv`
    )
      .then(res => res.text())
      .then(res => tsvParse(res));
    return data;
  };

  const global = useContext(GlobalContext);

  const { isLoading, error, data } = useQuery(
    ["candidates", obecData.KODZASTUP],
    fetchCandidates
  );
  if (isLoading) return "Stahuji data...";
  if (error) return "Stala se chyba: " + error.message;

  return (
    <Grid container spacing={2} mt={1} direction="column">
      <Grid item>
        <NajdiObec />
      </Grid>
      <Grid item>
        <ObecInfo obecData={obecData} okresData={okresData} data={data} />
      </Grid>
      <Grid item>
        <RokSwitch />
      </Grid>
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
