import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import GlobalContext from "../utils/global-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [rok, setRok] = useState({ rok: [2022], update });

  function update(data) {
    setState(Object.assign({}, state, data));
  }

  return (
    <GlobalContext.Provider value={rok}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
