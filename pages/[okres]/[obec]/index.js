import { useState, useEffect } from "react";
import { tsvParse } from "d3-dsv";
import { Grid, Container, Box } from "@mui/material";
import Head from "next/head";

import NajdiObec from "../../../components/NajdiObec";
import ObecInfo from "../../../components/ObecInfo";
import RokSwitch from "../../../components/RokSwitch";
import ViewSwitch from "../../../components/ViewSwitch";
import ObecStats from "../../../components/ObecStats";
import ResponsiveDrawer from "../../../components/ResponsiveDrawer";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

export default function Obec({ obecData, okresData }) {
  const [rok, setRok] = useState("2022");
  const [obecStrany, setObecStrany] = useState([]);
  const [filtr, setFiltr] = useState({
    muzi: true,
    zeny: true,
    poradi: [1, 70],
    vek: [18, 102],
    strany: [],
  });
  const [view, setView] = useState("NSTRANA");
  const [maxAge, setMaxAge] = useState([18, 102]);
  const [maxRank, setMaxRank] = useState([1, 70]);

  // když se načtou nové strany, tak je všechny vyber do filtru

  useEffect(() => {
    setFiltr(prevFiltr => {
      return {
        ...prevFiltr,
        strany: obecStrany.map(strana => strana.POR_STR_HL),
      };
    });
  }, [obecStrany]);

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
        <meta
          key="share-image"
          property="og:image"
          content={`https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/screen_shot_2022-09-_220908-161443_pek.png?itok=qYyP5aMZ`}
        />
        <meta
          property="og:description"
          content={
            "Prozkoumejte složení kandidátek v obecních volbách 2006 - 2022."
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@datarozhlas" />
        <meta name="twitter:creator" content="@tocit" />
        <meta
          name="twitter:image"
          content={`https://www.irozhlas.cz/sites/default/files/styles/zpravy_twitter/public/uploader/screen_shot_2022-09-_220908-161443_pek.png?itok=a1L_ibun`}
        />
      </Head>
      <ResponsiveDrawer
        okres={false}
        filtr={filtr}
        setFiltr={setFiltr}
        isMobile={isMobile}
        maxAge={maxAge}
        maxRank={maxRank}
        strany={obecStrany}
      >
        <Grid container spacing={3} mt={-4} direction="column">
          <Grid item>
            <NajdiObec />
          </Grid>
          <Grid item>
            <Container sx={{ ml: 0 }}>
              <Grid
                container
                direction="column"
                spacing={2}
                sx={{ maxWidth: "1000px" }}
              >
                <ObecInfo obecData={obecData} okresData={okresData} />
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "space-between",
                  }}
                >
                  <RokSwitch rok={rok} setRok={setRok} />
                  <ViewSwitch view={view} setView={setView} />
                </Grid>{" "}
                <ObecStats
                  rok={rok}
                  obecData={obecData}
                  okresData={okresData}
                  isMobile={isMobile}
                  filtr={filtr}
                  view={view}
                  setMaxAge={setMaxAge}
                  setMaxRank={setMaxRank}
                  setObecStrany={setObecStrany}
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
