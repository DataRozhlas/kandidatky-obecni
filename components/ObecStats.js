import { useState } from "react";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

import Graf from "./Graf";
import Tablica from "./Tablica";

import { Typography, Grid, CircularProgress } from "@mui/material";

const ObecStats = ({ rok, obecData, okresData }) => {
  const [vybraneStrany, setVybraneStrany] = useState([]);

  const fetchCandidates = async () => {
    const data = await fetch(
      `https://data.irozhlas.cz/kandidatky-obecni-data/${rok}/${okresData.key}/${obecData.key}/kandidati.tsv`
    )
      .then(res => res.text())
      .then(res => tsvParse(res));
    return data;
  };

  const { isLoading, error, data } = useQuery(
    ["candidates", rok, obecData.KODZASTUP],
    fetchCandidates
  );
  if (isLoading)
    return (
      <Grid item>
        <CircularProgress />
      </Grid>
    );
  if (error) return <Grid item>{"Stala se chyba: " + error.message}</Grid>;

  const vek =
    data.reduce((acc, curr) => acc + Number(curr.VEK), 0) / data.length;
  const zen =
    data.reduce((acc, curr) => {
      if (curr.POHLAVI === "F") return acc + 1;
      return acc;
    }, 0) / data.length;

  if (isNaN(vek))
    return (
      <Grid item>
        {"Data nejsou k dispozici. Zkuste jiný rok nebo jinou obec."}
      </Grid>
    );

  return (
    <>
      <Grid item>
        <Typography variant="body">
          {data.length} kandidátů | průměrný věk{" "}
          {(Math.round(vek * 10) / 10).toLocaleString("cs-CZ")} let |{" "}
          {(Math.round(zen * 1000) / 10).toLocaleString("cs-CZ")} % žen
        </Typography>
      </Grid>
      <Grid item>
        {/* <Graf
          vybraniKandidati={data}
          vybarveniKandidati={data}
          isMobile={false}
          vybraneStrany={vybraneStrany}
          setVybraneStrany={setVybraneStrany}
        ></Graf> */}
      </Grid>
      <Grid item>
        <Tablica
          vybarveniKandidati={data}
          isMobile={false}
          //  ciselniky={ciselniky}
        />
      </Grid>
    </>
  );
};

export default ObecStats;
