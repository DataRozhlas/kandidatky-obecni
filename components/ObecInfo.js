import { Typography, Container } from "@mui/material";

const ObecInfo = ({ okresData, obecData, data }) => {
  return (
    <Container>
      <Typography variant="h1">{obecData.NAZEVZAST}</Typography>
      <Typography variant="h6">okres {okresData.NAZEVNUTS}</Typography>
      <Typography variant="h6">
        {Number(obecData.POCOBYV).toLocaleString("cs-CZ")} obyvatel |{" "}
        {data.length} kandidátů | {obecData.MANDATY} mandátů
      </Typography>
    </Container>
  );
};

export default ObecInfo;
