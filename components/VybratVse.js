import { Button } from "@mui/material";

import styles from "../styles/VybratVse.module.css";

const VybratVse = ({ items, filtr, setFiltr }) => {
  const handleClick = (variant, items) => {
    if (variant === "zrušit vše") {
      setFiltr(prevState => {
        return { ...prevState, strany: [] };
      });
    } else {
      setFiltr(prevState => {
        return { ...prevState, strany: items };
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
        onClick={() => handleClick(variant, items)}
      >
        {variant}
      </Button>
    );
  };

  const itemValues = items.map(i => filtr.strany.includes(i));
  return (
    <div>
      {!itemValues.some(Boolean)
        ? makeLink("vybrat vše")
        : makeLink("zrušit vše")}
    </div>
  );
};

export default VybratVse;
