import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "../../styles/Filters.module.css";

export default function Mandat({ filtr, setFiltr }) {
  const [mandat, setMandat] = useState("yes");

  const handleChange = event => {
    setMandat(event.target.value);
  };

  useEffect(() => {
    if (mandat === "yes") {
      setFiltr(prevFiltr => {
        return { ...prevFiltr, mandat: "yes" };
      });
      return;
    }
    if (mandat === "no") {
      setFiltr(prevFiltr => {
        return { ...prevFiltr, mandat: "no" };
      });
      return;
    }
    if (mandat === "preference") {
      setFiltr(prevFiltr => {
        return { ...prevFiltr, mandat: "preference" };
      });
      return;
    }
    setFiltr(prevFiltr => {
      return { ...prevFiltr, mandat: "all" };
    });
  }, [mandat]);

  return (
    <FormControl>
      <FormLabel id="pohlavi" className={styles.bocniLabel}>
        MANDÁTU
      </FormLabel>
      <RadioGroup
        aria-labelledby="pohlavi"
        name="controlled-radio-buttons-group"
        value={mandat}
        onChange={handleChange}
      >
        <FormControlLabel
          value="yes"
          control={<Radio size="small" />}
          label="Získali mandát"
        />
        <FormControlLabel
          value="preference"
          control={<Radio size="small" />}
          label="Díky preferenčním hlasům"
        />
        <FormControlLabel
          value="no"
          control={<Radio size="small" />}
          label="Nezískali mandát"
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
