import { Typography, Grid } from "@mui/material";
//import Link from "../utils/Link";

const ObecInfo = ({ okresData, obecData }) => {
  return (
    <Grid item>
      <Typography variant="h1">{obecData.NAZEVZAST}</Typography>
      <Typography variant="subtitle1">
        {/* <Link href={`/${okresData.key}`} >*/}okres {okresData.NAZEVNUTS}
        {/* </Link> */}
      </Typography>
      <Typography variant="subtitle2">
        {Number(obecData.POCOBYV).toLocaleString("cs-CZ")} obyvatel |{" "}
        {obecData.MANDATY} mandátů
      </Typography>
    </Grid>
  );
};

export default ObecInfo;
