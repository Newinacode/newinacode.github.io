import { useState, React, useContext } from "react";
import Terminal from "../App/Terminal";
import { StoreContext } from "../../utils/Store";
import ValorantTab from "../App/ValorantTab";
import Fortnite from "../App/Fortnite";
import Startup from "./Startup";
import Portfolio from "../App/Portfolio";
function Background() {
  const { terminal, valorant, fortnite, startup, portfolio } =
    useContext(StoreContext);
  const [term, setTerm] = terminal;
  const [valo, setValo] = valorant;
  const [fn, setFn] = fortnite;
  const [startupMenu, setStartupMenu] = startup;
  const [portf, setPortf] = portfolio;

  return (
    <div className="relative" onClick={() => setStartupMenu(false)}>
      <img
        src="/images/back3.jpg"
        alt="background image"
        className="background"
      />
      {portf ? <Portfolio /> : <></>}
      {startupMenu ? <Startup /> : <></>}
      {valo ? <ValorantTab /> : <></>}
      {term ? <Terminal /> : <></>}
      {fn ? <Fortnite /> : <></>}
    </div>
  );
}

export default Background;
