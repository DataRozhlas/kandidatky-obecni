import { Typography, Container } from "@mui/material";
import Link from "../utils/Link";

const ObecInfo = ({ okresData, obecData }) => {
  return (
    <Container>
      <Typography variant="h1">{obecData.NAZEVZAST}</Typography>
      <Typography variant="h6">
        <Link href={`/${okresData.key}`}>okres {okresData.NAZEVNUTS}</Link>
      </Typography>
      <Typography variant="h6">
        {Number(obecData.POCOBYV).toLocaleString("cs-CZ")} obyvatel |{" "}
        {obecData.MANDATY} mandátů
      </Typography>
    </Container>
  );
};

export default ObecInfo;
