import {
  Box,
  Toolbar,
  FormControl,
  InputLabel,
  Typography,
  Slider,
} from "@mui/material";

import Mandat from "./controls/Mandat";
import Pohlavi from "./controls/Pohlavi";
import Strany from "./controls/Strany";

import styles from "../styles/Filters.module.css";

const Filters = ({ filtr, setFiltr, maxAge, maxRank, strany }) => {
  const handlePoradiChange = (e, newValue) => {
    setFiltr({ ...filtr, poradi: newValue });
  };

  const handleVekChange = (e, newValue) => {
    setFiltr({ ...filtr, vek: newValue });
  };

  return (
    <Box mt={9}>
      <Box sx={{ width: "100%", display: "grid", justifyItems: "center" }}>
        <Typography variant="overline">Filtrovat kandidáty podle</Typography>
      </Box>
      <Toolbar>
        <FormControl component="fieldset" className={styles.bocniFieldset}>
          <Mandat setFiltr={setFiltr} />
          <Pohlavi setFiltr={setFiltr} />
          <FormControl className={styles.bocniFieldset}>
            <InputLabel className={styles.bocniLabel}>
              POŘADÍ NA KANDIDÁTCE
            </InputLabel>
            <Slider
              size="small"
              sx={{ marginLeft: "0.3rem", marginTop: "1.8rem" }}
              value={filtr.poradi}
              onChange={handlePoradiChange}
              min={maxRank[0]}
              max={maxRank[1]}
              valueLabelDisplay="on"
            ></Slider>
          </FormControl>
          <FormControl className={styles.bocniFieldset}>
            <InputLabel className={styles.bocniLabel}>VĚKU</InputLabel>
            <Slider
              id="vek"
              size="small"
              sx={{ marginLeft: "0.3rem", marginTop: "1.8rem" }}
              value={filtr.vek}
              onChange={handleVekChange}
              min={maxAge[0]}
              max={maxAge[1]}
              valueLabelDisplay="on"
            ></Slider>
          </FormControl>
          <Strany filtr={filtr} setFiltr={setFiltr} strany={strany} />
        </FormControl>
      </Toolbar>
    </Box>
  );
};

export default Filters;
