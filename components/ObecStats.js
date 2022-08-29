import { useState } from "react";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

import Graf from "./Graf";
import Tablica from "./Tablica";

import { Typography, Grid, CircularProgress } from "@mui/material";

const ObecStats = ({ rok, obecData, okresData }) => {
  const [vybraneStrany, setVybraneStrany] = useState([]);

  const fetchData = async context => {
    const data = await fetch(
      `https://data.irozhlas.cz/kandidatky-obecni-data/${rok}/${okresData.key}/${obecData.key}/${context.queryKey[0]}.tsv`
    )
      .then(res => res.text())
      .then(res => tsvParse(res));
    return data;
  };
  const kandidati = useQuery(["kandidati", rok, obecData.KODZASTUP], fetchData);
  const strany = useQuery(["strany", rok, obecData.KODZASTUP], fetchData);
  if (kandidati.isLoading)
    return (
      <Grid item>
        <CircularProgress />
      </Grid>
    );
  if (kandidati.error)
    return <Grid item>{"Stala se chyba: " + error.message}</Grid>;

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
    <>
      <Grid item>
        <Typography variant="body">
          {kandidati.data.length} kandidátů | průměrný věk{" "}
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
      {!strany.isLoading && !kandidati.isLoading && (
        <Grid item>
          <Tablica
            vybarveniKandidati={kandidati.data}
            isMobile={false}
            strany={strany.data}
            //  ciselniky={ciselniky}
          />
        </Grid>
      )}
    </>
  );
};

export default ObecStats;
