import ObecInfo from "./ObecInfo";
import RokSwitch from "./RokSwitch";
import ObecStats from "./ObecStats";

import { Grid, Container } from "@mui/material";

const ObecContainer = ({ obecData, okresData, rok, setRok }) => {
  return (
    <Container>
      <Grid container direction="column" spacing={1}>
        <ObecInfo obecData={obecData} okresData={okresData} />
        <RokSwitch rok={rok} setRok={setRok} />
        <ObecStats
          rok={rok}
          obecData={obecData}
          okresData={okresData}
        ></ObecStats>
      </Grid>
    </Container>
  );
};

export default ObecContainer;
