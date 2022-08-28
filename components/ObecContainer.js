import RokSwitch from "./RokSwitch";
import ObecInfo from "./ObecInfo";
import ObecStats from "./ObecStats";

import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

import { Grid, Container, CircularProgress } from "@mui/material";

const ObecContainer = ({ obecData, okresData, rok, setRok }) => {
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
        <Container>
          <CircularProgress />
        </Container>
      </Grid>
    );
  if (error) return <Container>{"Stala se chyba: " + error.message}</Container>;

  return (
    <>
      <Grid item>
        <ObecInfo obecData={obecData} okresData={okresData} candidates={data} />
      </Grid>

      <Grid item>
        <RokSwitch rok={rok} setRok={setRok} />
      </Grid>
      <Grid item>
        <ObecStats candidates={data}></ObecStats>
      </Grid>
    </>
  );
};

export default ObecContainer;
