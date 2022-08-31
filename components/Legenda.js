import { Typography, Box } from "@mui/material";

const Legenda = ({ vybraneStrany }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 15,
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
    </Box>
  );
};

export default Legenda;
