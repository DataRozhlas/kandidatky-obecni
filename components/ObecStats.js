import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

import Graf from "./Graf";
import Tablica from "./Tablica";
import Legenda from "./Legenda";

import { Typography, Grid, CircularProgress, Box } from "@mui/material";

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

// filter candidates

const filterCandidates = async context => {
  const filtr = context.queryKey[1];
  const kandidati = context.queryKey[2];
  if (kandidati) {
    const result = kandidati
      .filter(k => filtr.zeny === true || k.POHLAVI === "M")
      .filter(k => filtr.muzi === true || k.POHLAVI === "F")
      .filter(
        k =>
          Number(k.PORCISLO) >= filtr.poradi[0] &&
          Number(k.PORCISLO) <= filtr.poradi[1]
      )
      .filter(
        k => Number(k.VEK) >= filtr.vek[0] && Number(k.VEK) <= filtr.vek[1]
      );
    return result;
  }
  return;
};

const countStrany = cislo => {
  if (cislo === 1) return "1 strana";
  if (cislo > 1 && cislo < 5) return `${cislo} strany`;
  return `${cislo} stran`;
};

const ObecStats = ({ rok, obecData, okresData, isMobile, filtr }) => {
  const [vybraneStrany, setVybraneStrany] = useState([]);
  //const [vybraniKandidati, setVybraniKandidati] = useState([]);
  // load external data
  const kandidati = useQuery(
    ["kandidati", rok, obecData, okresData],
    fetchData
  );
  const vybraniKandidati = useQuery(
    ["vybraniKanididati", filtr, kandidati.data],
    filterCandidates
  );
  const strany = useQuery(["strany", rok, obecData, okresData], fetchData);
  const cvs = useQuery(["cvs"], fetchData, { staleTime: Infinity });

  // const filterCandidates = (kandidati, filtr) => {
  //   const result = kandidati
  //     .filter(k => filtr.zeny === true || k.POHLAVI === "M")
  //     .filter(k => filtr.muzi === true || k.POHLAVI === "F")
  //     .filter(
  //       k =>
  //         Number(k.PORCISLO) >= filtr.poradi[0] &&
  //         Number(k.PORCISLO) <= filtr.poradi[1]
  //     )
  //     .filter(
  //       k => Number(k.VEK) >= filtr.vek[0] && Number(k.VEK) <= filtr.vek[1]
  //     );
  //   return result;
  // };

  // useEffect(() => {
  //   if (kandidati.isSuccess) {
  //     const result = filterCandidates(kandidati.data, filtr);
  //     setVybraniKandidati(result);
  //   }
  // }, [filtr, kandidati.data, kandidati.isSuccess]);

  if (kandidati.isLoading || strany.isLoading || vybraniKandidati.isLoading)
    return (
      <Grid item>
        <CircularProgress />
      </Grid>
    );
  if (kandidati.error || strany.error || vybraniKandidati.error)
    return (
      <Grid item>
        {"Stala se chyba: " +
          kandidati.error.message +
          strany.error.message +
          vybraniKandidati.error.messagex}
      </Grid>
    );

  const vek =
    vybraniKandidati.data.reduce((acc, curr) => acc + Number(curr.VEK), 0) /
    vybraniKandidati.data.length;
  const zen =
    vybraniKandidati.data.reduce((acc, curr) => {
      if (curr.POHLAVI === "F") return acc + 1;
      return acc;
    }, 0) / vybraniKandidati.data.length;

  if (!kandidati.data)
    return (
      <Grid item>
        {"Data nejsou k dispozici. Zkuste jiný rok nebo jinou obec."}
      </Grid>
    );

  return (
    <Grid item>
      <Grid item>
        <Typography variant="body" sx={{ color: "#0000008a" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              wrap: "nowrap",
            }}
          >
            {/* {countStrany(strany.data.length)} |  */}
            <Box>
              Vybráno{" "}
              <span
                style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
              >
                {vybraniKandidati.data.length}
              </span>{" "}
              kandidátů
            </Box>
            <Box>
              průměrný věk{" "}
              <span
                style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
              >
                {(Math.round(vek * 10) / 10).toLocaleString("cs-CZ")}
              </span>{" "}
              let{" "}
            </Box>
            <Box>
              <span
                style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
              >
                {(Math.round(zen * 1000) / 10).toLocaleString("cs-CZ")} %{" "}
              </span>
              žen{" "}
            </Box>
          </Box>
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
          vybarveniKandidati={vybraniKandidati.data}
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
          vybarveniKandidati={vybraniKandidati.data}
          strany={strany.data}
          isMobile={isMobile}
          //  ciselniky={ciselniky}
        />
      </Grid>
    </Grid>
  );
};

export default ObecStats;
