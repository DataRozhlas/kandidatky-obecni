import { useState, useEffect } from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

import VybratVse from "../VybratVse";

import styles from "../../styles/Filters.module.css";

const Strany = ({ strany, filtr, setFiltr }) => {
  const handleCheckboxChange = event => {
    if (filtr.strany.includes(event.target.value)) {
      setFiltr(prevFiltr => {
        return {
          ...prevFiltr,
          strany: prevFiltr.strany.filter(s => s !== event.target.value),
        };
      });
      return;
    }
    setFiltr(prevFiltr => {
      return {
        ...prevFiltr,
        strany: [...prevFiltr.strany, event.target.value],
      };
    });
  };

  return (
    <FormControl component="fieldset" variant="outlined">
      <FormLabel id="pohlavi" className={styles.bocniLabel}>
        VOLEBNÍ STRANY
      </FormLabel>
      <VybratVse
        filtr={filtr}
        setFiltr={setFiltr}
        items={strany.map(s => s.POR_STR_HL)}
      />
      <FormGroup>
        {strany.map(strana => {
          return (
            <FormControlLabel
              key={strana.POR_STR_HL}
              label={strana.ZKRATKAO30}
              control={
                <Checkbox
                  size="small"
                  checked={filtr.strany.includes(strana.POR_STR_HL)}
                  onChange={handleCheckboxChange}
                  value={strana.POR_STR_HL}
                  name={strana.ZKRATKAO8}
                />
              }
            ></FormControlLabel>
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default Strany;
