import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

import Graf from "./Graf";
import Tablica from "./Tablica";
import Legenda from "./Legenda";

import { Typography, Grid, CircularProgress } from "@mui/material";

const fetchData = async context => {
  const urlDetail =
    context.queryKey[0] === "cvs"
      ? "2022/cvs.tsv"
      : `${context.queryKey[1]}/${context.queryKey[3].key}/${context.queryKey[2].key}/${context.queryKey[0]}.tsv`;
  const data = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/${urlDetail}`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  return data;
};

const countStrany = cislo => {
  if (cislo === 1) return "1 strana";
  if (cislo > 1 && cislo < 5) return `${cislo} strany`;
  return `${cislo} stran`;
};

const ObecStats = ({ rok, obecData, okresData, isMobile }) => {
  const [vybraneStrany, setVybraneStrany] = useState([]);

  const kandidati = useQuery(
    ["kandidati", rok, obecData, okresData],
    fetchData
  );
  const strany = useQuery(["strany", rok, obecData, okresData], fetchData);
  const cvs = useQuery(["cvs"], fetchData, { staleTime: Infinity });

  if (kandidati.isLoading || strany.isLoading)
    return (
      <Grid item>
        <CircularProgress />
      </Grid>
    );
  if (kandidati.error || kandidati.error)
    return (
      <Grid item>
        {"Stala se chyba: " + kandidati.error.message + strany.error.message}
      </Grid>
    );

  const vek =
    kandidati.data.reduce((acc, curr) => acc + Number(curr.VEK), 0) /
    kandidati.data.length;
  const zen =
    kandidati.data.reduce((acc, curr) => {
      if (curr.POHLAVI === "F") return acc + 1;
      return acc;
    }, 0) / kandidati.data.length;

  if (isNaN(vek))
    return (
      <Grid item>
        {"Data nejsou k dispozici. Zkuste jiný rok nebo jinou obec."}
      </Grid>
    );

  return (
    <Grid item>
      <Grid item>
        <Typography variant="body">
          {countStrany(strany.data.length)} | {kandidati.data.length} kandidátů
          | průměrný věk {(Math.round(vek * 10) / 10).toLocaleString("cs-CZ")}{" "}
          let | {(Math.round(zen * 1000) / 10).toLocaleString("cs-CZ")} % žen
        </Typography>
      </Grid>
      {isMobile && (
        <Grid item mt={3}>
          <Legenda vybraneStrany={vybraneStrany} />
        </Grid>
      )}
      <Grid item>
        <Graf
          kandidati={kandidati.data}
          vybarveniKandidati={kandidati.data}
          isMobile={isMobile}
          vybraneStrany={vybraneStrany}
          setVybraneStrany={setVybraneStrany}
        ></Graf>
      </Grid>
      {!isMobile && (
        <Grid item mt={2}>
          <Legenda vybraneStrany={vybraneStrany} />
        </Grid>
      )}
      <Grid item mt={3}>
        <Tablica
          vybarveniKandidati={kandidati.data}
          isMobile={isMobile}
          strany={strany.data}
          //  ciselniky={ciselniky}
        />
      </Grid>
    </Grid>
  );
};

export default ObecStats;
