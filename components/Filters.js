import {
  Box,
  Toolbar,
  FormControl,
  InputLabel,
  Typography,
  Slider,
} from "@mui/material";

//import Pohlavi from "./controls/Pohlavi";

import styles from "../styles/Filters.module.css";

const Filters = ({ filtr, setFiltr }) => {
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
          {/* <Pohlavi filtr={filtr} setFiltr={setFiltr} /> */}
          <FormControl className={styles.bocniFieldset}>
            <InputLabel className={styles.bocniLabel}>
              POŘADÍ NA KANDIDÁTCE
            </InputLabel>
            <Slider
              size="small"
              sx={{ marginLeft: "0.3rem" }}
              value={filtr.poradi}
              onChange={handlePoradiChange}
              min={1}
              max={70}
              valueLabelDisplay="auto"
            ></Slider>
          </FormControl>
          <FormControl className={styles.bocniFieldset}>
            <InputLabel className={styles.bocniLabel}>VĚKU</InputLabel>
            <Slider
              id="vek"
              size="small"
              sx={{ marginLeft: "0.3rem" }}
              value={filtr.vek}
              onChange={handleVekChange}
              min={18}
              max={102}
              valueLabelDisplay="auto"
            ></Slider>
          </FormControl>
        </FormControl>
      </Toolbar>
    </Box>
  );
};

export default Filters;
