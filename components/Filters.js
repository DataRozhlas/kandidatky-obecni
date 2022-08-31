import { useState } from "react";

import {
  Box,
  Checkbox,
  Toolbar,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import VybratVse from "./VybratVse";

import styles from "../styles/Filters.module.css";

const Filters = ({ filtr, setFiltr }) => {
  const handleCheckboxChange = e => {
    setFiltr({ ...filtr, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <Toolbar />
      <Box sx={{ width: "100%" }}>
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
        </FormControl>
      </Box>
    </div>
  );
};

export default Filters;
