import React from "react";

import { Grid, Typography, Box } from "@mui/material";

const Prehled = ({ vybraniKandidati }) => {
  const vek =
    vybraniKandidati.reduce((acc, curr) => acc + Number(curr.VEK), 0) /
    vybraniKandidati.length;
  const zen =
    vybraniKandidati.reduce((acc, curr) => {
      if (curr.POHLAVI === "F") return acc + 1;
      return acc;
    }, 0) / vybraniKandidati.length;

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
            průměrný věk{"\u00A0"}
            <Box
              style={{ fontWeight: "bold", fontSize: "120%", color: "black" }}
            >
              {(Math.round(vek * 10) / 10).toLocaleString("cs-CZ")}
            </Box>
            {"\u00A0"}
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
              {(Math.round(zen * 1000) / 10).toLocaleString("cs-CZ")}
              {"\u00A0"}%{" "}
            </Box>
            žen{" "}
          </Box>
        </Box>
      </Typography>
    </Grid>
  );
};

export default React.memo(Prehled);
