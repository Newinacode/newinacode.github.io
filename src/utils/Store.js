import React from "react";
import { createContext, useState } from "react";
export const StoreContext = createContext(null);
function Store({ children }) {
  const [terminal, setTerminal] = useState(false);
  const [valorant, setValorant] = useState(false);
  const [fortnite, setFortnite] = useState(false);
  const [startupMenu, setStartupMenu] = useState(false);
  const [zindex, setZindex] = useState([0, 0, 0, 0, 0]);
  const [portfolio, setPortfolio] = useState(false);
  const store = {
    terminal: [terminal, setTerminal],
    valorant: [valorant, setValorant],
    fortnite: [fortnite, setFortnite],
    startup: [startupMenu, setStartupMenu],
    portfolio: [portfolio, setPortfolio],
    z_index: [zindex, setZindex],
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default Store;
