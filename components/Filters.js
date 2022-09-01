import { useState } from "react";

import {
  Box,
  Checkbox,
  Toolbar,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Typography,
  Slider,
} from "@mui/material";

import VybratVse from "./VybratVse";

import styles from "../styles/Filters.module.css";

const Filters = ({ filtr, setFiltr }) => {
  const handleCheckboxChange = e => {
    setFiltr({ ...filtr, [e.target.name]: e.target.checked });
  };

  const handlePoradiChange = (e, newValue) => {
    console.log(e);
    setFiltr({ ...filtr, poradi: newValue });
  };

  const handleVekChange = (e, newValue) => {
    console.log(e);
    setFiltr({ ...filtr, vek: newValue });
  };

  return (
    <Box mt={9}>
      <Box sx={{ width: "100%", display: "grid", justifyItems: "center" }}>
        <Typography variant="overline">Filtrovat kandidáty podle</Typography>
      </Box>
      <Toolbar>
        <FormControl component="fieldset" className={styles.bocniFieldset}>
          <InputLabel className={styles.bocniLabel}>POHLAVÍ</InputLabel>
          <VybratVse
            items={["zeny", "muzi"]}
            filtr={filtr}
            setFiltr={setFiltr}
            classes={styles}
          />
          <FormGroup className={styles.bocniCheckBoxGroup}>
            <FormControlLabel
              className={styles.bocniCheckBoxDvaSloupce}
              control={
                <Checkbox
                  checked={filtr.zeny}
                  onChange={handleCheckboxChange}
                  name="zeny"
                  size="small"
                />
              }
              label="ženy"
            />
            <FormControlLabel
              className={styles.bocniCheckBoxDvaSloupce}
              control={
                <Checkbox
                  checked={filtr.muzi}
                  onChange={handleCheckboxChange}
                  name="muzi"
                  size="small"
                />
              }
              label="muži"
            />
          </FormGroup>
          <FormGroup>
            <FormControl className={styles.bocniFieldset}>
              <InputLabel className={styles.bocniLabel}>
                POŘADÍ NA KANDIDÁTCE
              </InputLabel>
              <FormGroup className={styles.bocniCheckBoxGroup}>
                <Slider
                  size="small"
                  sx={{ marginLeft: "0.3rem" }}
                  value={filtr.poradi}
                  onChange={handlePoradiChange}
                  min={1}
                  max={70}
                  valueLabelDisplay="auto"
                ></Slider>
              </FormGroup>
            </FormControl>
            <FormControl className={styles.bocniFieldset}>
              <InputLabel className={styles.bocniLabel}>VĚKU</InputLabel>
              <FormGroup className={styles.bocniCheckBoxGroup}>
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
              </FormGroup>
            </FormControl>
          </FormGroup>
        </FormControl>
      </Toolbar>
    </Box>
  );
};

export default Filters;
