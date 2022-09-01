import { Button } from "@mui/material";

import styles from "../styles/VybratVse.module.css";

const VybratVse = ({ items, filtr, setFiltr }) => {
  const handleClick = (variant, items, setFiltr) => {
    if (variant === "zrušit vše") {
      const settings = items.reduce((o, key) => ({ ...o, [key]: false }), {});
      setFiltr(prevState => {
        return { ...prevState, ...settings };
      });
    } else {
      const settings = items.reduce((o, key) => ({ ...o, [key]: true }), {});
      setFiltr(prevState => {
        return { ...prevState, ...settings };
      });
    }
  };

  const makeLink = variant => {
    return (
      <Button
        size="small"
        variant="text"
        color="primary"
        disableRipple={true}
        className={styles.vybratVse}
        onClick={() => handleClick(variant, items, filtr, setFiltr)}
      >
        {variant}
      </Button>
    );
  };

  const itemValues = items.map(i => filtr[i]);

  return (
    <div>
      {!itemValues.some(Boolean)
        ? makeLink("vybrat vše")
        : makeLink("zrušit vše")}
    </div>
  );
};

export default VybratVse;
