import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

import Prehled from "./Prehled";
import Graf from "./Graf";
import Tablica from "./Tablica";
import Legenda from "./Legenda";

import { Grid, CircularProgress } from "@mui/material";

const fetchData = async context => {
  const urlDetail =
    context.queryKey[0] === "cvs"
      ? "2022/cvs.tsv"
      : `${context.queryKey[1]}/${context.queryKey[3].key}/${context.queryKey[2].key}/${context.queryKey[0]}.tsv`;
  const data = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-updated/${urlDetail}`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  return data;
};

const ObecStats = ({
  rok,
  obecData,
  okresData,
  isMobile,
  filtr,
  view,
  setMaxAge,
  setMaxRank,
  setObecStrany,
}) => {
  const [vybraneStrany, setVybraneStrany] = useState([]);
  const [vybraniKandidati, setVybraniKandidati] = useState([]);

  // load external data
  const kandidati = useQuery(
    ["kandidati", rok, obecData, okresData],
    fetchData
  );
  const strany = useQuery(["strany", rok, obecData, okresData], fetchData);
  const cvs = useQuery(["cvs"], fetchData, { staleTime: Infinity });

  const filterCandidates = (kandidati, filtr) => {
    console.log("filtruju kandidáty");
    const result = kandidati
      .filter(k => {
        if (filtr.mandat === "yes") {
          return k.MANDAT === "1";
        }
        if (filtr.mandat === "preference") {
          return k.MANDATPREF === "1";
        }
        if (filtr.mandat === "no") {
          return k.MANDAT === "0";
        }
        if (filtr.mandat === "all") {
          return true;
        }
      })
      .filter(k => filtr.zeny === true || k.POHLAVI === "M")
      .filter(k => filtr.muzi === true || k.POHLAVI === "F")
      .filter(
        k =>
          Number(k.PORCISLO) >= filtr.poradi[0] &&
          Number(k.PORCISLO) <= filtr.poradi[1]
      )
      .filter(
        k => Number(k.VEK) >= filtr.vek[0] && Number(k.VEK) <= filtr.vek[1]
      )
      .filter(k => filtr.strany.includes(k.POR_STR_HL));
    return result;
  };

  useEffect(() => {
    if (kandidati.isSuccess) {
      const result = filterCandidates(kandidati.data, filtr);
      setVybraniKandidati(result);
    }
  }, [filtr, kandidati.data, kandidati.isSuccess]);

  useEffect(() => {
    if (strany.isSuccess) {
      setObecStrany(strany.data);
    }
  }, [strany.data, strany.isSuccess, setObecStrany]);

  useEffect(() => {
    if (kandidati.isSuccess) {
      const ages = kandidati.data.map(k => {
        return Number(k.VEK);
      });
      setMaxAge([Math.min(...ages), Math.max(...ages)]);
      const ranks = kandidati.data.map(k => {
        return Number(k.PORCISLO);
      });
      setMaxRank([Math.min(...ranks), Math.max(...ranks)]);
    }
  }, [kandidati.data, kandidati.isSuccess, setMaxAge, setMaxRank]);

  if (kandidati.isLoading || strany.isLoading || cvs.isLoading)
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

  if (!kandidati.data)
    return (
      <Grid item>
        {"Data nejsou k dispozici. Zkuste jiný rok nebo jinou obec."}
      </Grid>
    );

  return (
    <Grid item>
      <Prehled
        vybraniKandidati={vybraniKandidati}
        isMobile={isMobile}
      ></Prehled>
      {isMobile && (
        <Grid item mt={3}>
          <Legenda vybraneStrany={vybraneStrany} />
        </Grid>
      )}
      <Grid item>
        <Graf
          kandidati={kandidati.data}
          vybarveniKandidati={vybraniKandidati}
          isMobile={isMobile}
          vybraneStrany={vybraneStrany}
          setVybraneStrany={setVybraneStrany}
          view={view}
        ></Graf>
      </Grid>
      {!isMobile && (
        <Grid item mt={2}>
          <Legenda vybraneStrany={vybraneStrany} />
        </Grid>
      )}
      <Grid item mt={3}>
        <Tablica
          vybarveniKandidati={vybraniKandidati}
          strany={strany.data}
          isMobile={isMobile}
          cvs={cvs.data}
        />
      </Grid>
    </Grid>
  );
};

export default ObecStats;
