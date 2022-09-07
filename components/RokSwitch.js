import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const RokSwitch = ({ rok, setRok }) => {
  const handleChange = event => {
    setRok(event.target.value);
  };

  return (
    <ToggleButtonGroup
      value={rok}
      exclusive
      onChange={handleChange}
      aria-label="vyber rok"
      color="primary"
    >
      <ToggleButton value="2006" aria-label="2006">
        2006
      </ToggleButton>
      <ToggleButton value="2010" aria-label="2010">
        2010
      </ToggleButton>
      <ToggleButton value="2014" aria-label="2014">
        2014
      </ToggleButton>
      <ToggleButton value="2018" aria-label="2018">
        2018
      </ToggleButton>
      <ToggleButton value="2022" aria-label="2022">
        2022
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RokSwitch;
