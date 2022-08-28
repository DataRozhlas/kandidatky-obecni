import { Typography, Container } from "@mui/material";

const ObecStats = ({ candidates }) => {
  const vek =
    candidates.reduce((acc, curr) => acc + Number(curr.VEK), 0) /
    candidates.length;
  const zen =
    candidates.reduce((acc, curr) => {
      if (curr.POHLAVI === "F") return acc + 1;
      return acc;
    }, 0) / candidates.length;
  return (
    <Container>
      <Typography variant="body">
        {candidates.length} kandidátů | průměrný věk{" "}
        {(Math.round(vek * 10) / 10).toLocaleString("cs-CZ")} let |{" "}
        {(Math.round(zen * 1000) / 10).toLocaleString("cs-CZ")} % žen
      </Typography>
    </Container>
  );
};

export default ObecStats;
