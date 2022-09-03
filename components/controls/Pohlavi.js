import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "../../styles/Filters.module.css";

export default function Pohlavi({ filtr, setFiltr }) {
  const [sex, setSex] = useState("all");

  const handleChange = event => {
    setSex(event.target.value);
  };

  useEffect(() => {
    if (sex === "zeny") {
      setFiltr(prevFiltr => {
        return { ...prevFiltr, muzi: false, zeny: true };
      });
      return;
    }
    if (sex === "muzi") {
      setFiltr(prevFiltr => {
        return { ...prevFiltr, muzi: true, zeny: false };
      });
      return;
    }
    setFiltr(prevFiltr => {
      return { ...prevFiltr, muzi: true, zeny: true };
    });
  }, [sex]);

  return (
    <FormControl>
      <FormLabel id="pohlavi" className={styles.bocniLabel}>
        POHLAVÍ
      </FormLabel>
      <RadioGroup
        aria-labelledby="pohlavi"
        name="controlled-radio-buttons-group"
        value={sex}
        onChange={handleChange}
      >
        <FormControlLabel
          value="zeny"
          control={<Radio size="small" />}
          label="Ženy"
        />
        <FormControlLabel
          value="muzi"
          control={<Radio size="small" />}
          label="Muži"
        />
        <FormControlLabel
          value="all"
          control={<Radio size="small" />}
          label="Všichni"
        />
      </RadioGroup>
    </FormControl>
  );
}
