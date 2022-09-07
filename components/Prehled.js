import React from "react";

import { Grid, Typography, Box } from "@mui/material";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const Prehled = ({ vybraniKandidati, isMobile }) => {
  const vek =
    vybraniKandidati.reduce((acc, curr) => acc + Number(curr.VEK), 0) /
    vybraniKandidati.length;
  const zen =
    vybraniKandidati.reduce((acc, curr) => {
      if (curr.POHLAVI === "F") return acc + 1;
      return acc;
    }, 0) / vybraniKandidati.length;
  const nstran = vybraniKandidati.map(k => k.NSTRANA).filter(onlyUnique).length;
  const ostran = vybraniKandidati.map(k => k.OSTRANA).filter(onlyUnique).length;

  return (
    <Grid item>
      <Typography variant="body" sx={{ color: "#0000008a" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            textAlign: "center",
            gap: "0.5rem",
          }}
        >
          {/* {countStrany(strany.data.length)} |  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>Vybráno</Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "120%",
                color: "black",
              }}
            >
              {vybraniKandidati.length}
            </Box>
            <Box>kandidátů</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {isMobile ? "ø věk" : "průměrný věk"}
            <Box
              style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
            >
              {vybraniKandidati.length > 0
                ? (Math.round(vek * 10) / 10).toLocaleString("cs-CZ")
                : "--"}
            </Box>
            let{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
            >
              {vybraniKandidati.length > 0
                ? (Math.round(zen * 1000) / 10).toLocaleString("cs-CZ")
                : "--"}
              {"\u00A0"}%{" "}
            </Box>
            žen{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
            >
              {nstran.toLocaleString("cs-CZ")}
            </Box>
            navrhujících stran
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
            >
              {ostran.toLocaleString("cs-CZ")}
            </Box>
            volebních stran
          </Box>
        </Box>
      </Typography>
    </Grid>
  );
};

const countStrany = cislo => {
  if (cislo === 1) return "1 strana";
  if (cislo > 1 && cislo < 5) return `${cislo} strany`;
  return `${cislo} stran`;
};

export default React.memo(Prehled);
