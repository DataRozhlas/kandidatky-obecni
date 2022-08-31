import Link from "../../utils/Link";
import Head from "next/head";
import { tsvParse } from "d3-dsv";

import okresy from "../../public/okresy.json";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { Grid, Container } from "@mui/material";
import NajdiObec from "../../components/NajdiObec";
import OkresInfo from "../../components/OkresInfo";

import styles from "../../styles/Okres.module.css";

export async function getStaticProps({ params }) {
  // generate data for each okres
  const okresData = okresy.find(okres => okres.key === params.okres);
  const zastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${okresData.key}/zastupitelstva.tsv`
  ).then(res => res.text());
  return {
    props: {
      okresData,
      zastupitelstva: tsvParse(zastupitelstva),
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: okresy.map(okres => {
      return { params: { okres: okres.key } };
    }),
    fallback: false,
  };
}

const Okres = ({ okresData, zastupitelstva }) => {
  return (
    <>
      <Head>
        <title>
          {`Okres ${okresData.NAZEVNUTS} – interaktivní kandidátky pro komunální volby`}
        </title>
      </Head>{" "}
      <ResponsiveDrawer>
        <Grid container spacing={3} mt={-4} direction="column">
          <Grid item>
            <NajdiObec />
          </Grid>
          <Grid item>
            <Container sx={{ ml: 0 }}>
              <Grid container direction="column" spacing={2}>
                <OkresInfo okresData={okresData} />
                <ul>
                  {zastupitelstva
                    .sort((a, b) =>
                      a.NAZEVZAST.localeCompare(b.NAZEVZAST, "cs")
                    )
                    .map(zastupitelstvo => (
                      <li key={zastupitelstvo.KODZASTUP}>
                        <Link href={`/${okresData.key}/${zastupitelstvo.key}`}>
                          {zastupitelstvo.NAZEVZAST}
                        </Link>
                      </li>
                    ))}
                </ul>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </>
  );
};

export default Okres;
