import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const ViewSwitch = ({ view, setView }) => {
  const handleChange = event => {
    setView(event.target.value);
  };

  return (
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={handleChange}
      aria-label="vyber pohled"
      color="primary"
    >
      <ToggleButton value="NSTRANA" aria-label="2006">
        Navrhující strany
      </ToggleButton>
      <ToggleButton value="OSTRANA" aria-label="2010">
        Volební strany
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ViewSwitch;
