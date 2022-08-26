import React from "react";

const GlobalContext = React.createContext({
  rok: [2022],
  update: data => {},
});

export default GlobalContext;
