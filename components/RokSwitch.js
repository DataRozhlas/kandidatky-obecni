import { useContext } from "react";
import GlobalContext from "../utils/globalContext";

const RokSwitch = () => {
  const global = useContext(GlobalContext);

  return <div>{global.rok}</div>;
};

export default RokSwitch;
