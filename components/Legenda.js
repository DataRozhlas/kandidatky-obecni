import { Typography, Container } from "@mui/material";

const Legenda = ({ vybraneStrany }) => {
  return (
    <Container
      disableGutters
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {vybraneStrany.map(s => {
        return (
          <Typography key={s.vstrana}>
            <span style={{ color: s.barva }}>{"\u25CF\xa0"}</span>
            {s.nazev}
          </Typography>
        );
      })}
    </Container>
  );
};

export default Legenda;
