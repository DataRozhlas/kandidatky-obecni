import { Typography, Grid } from "@mui/material";

const ObecInfo = ({ okresData, obecData }) => {
  return (
    <Grid item>
      <Typography variant="h1">Okres {okresData.NAZEVNUTS}</Typography>
      <Typography variant="h6"></Typography>
    </Grid>
  );
};

export default ObecInfo;
