import { useState, React, useContext } from "react";
import Terminal from "../App/Terminal";
import { StoreContext } from "../../utils/Store";
import ValorantTab from "../App/ValorantTab";
import Fortnite from "../App/Fortnite";
import Startup from "./Startup";
import { useSelector } from "react-redux";
import Portfolio from "../App/Portfolio";
import { useDispatch } from "react-redux";
import { CloseApplication } from "../../actions/App";
function Background() {
  const dispatch = useDispatch();
  const { terminal, valorant, fortnite, portfolio, startup } = useSelector(
    (state) => state
  );
  return (
    <div
      className="relative"
      onClick={() => {
        if (startup) {
          dispatch(CloseApplication("startup"));
        }
      }}
    >
      <img
        src="/images/back3.jpg"
        alt="background image"
        className="background"
      />
      {portfolio ? <Portfolio /> : <></>}
      {startup ? <Startup /> : <></>}
      {valorant ? <ValorantTab /> : <></>}
      {terminal ? <Terminal /> : <></>}
      {fortnite ? <Fortnite /> : <></>}
    </div>
  );
}

export default Background;
