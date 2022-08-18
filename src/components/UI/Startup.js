import React from "react";
import { OpenApplication } from "../../actions/App";
import { useDispatch } from "react-redux";
function Startup() {
  const dispatch = useDispatch();
  return (
    <div className="flex absolute bottom-0 left-1/12 h-3/4 w-1/4 bg-slate-600">
      {/* side icons */}
      <div className="flex flex-col justify-between items-center bg-slate-800 h-5/6 w-1/6 mt-6 ml-2">
        <div
          className="flex justify-center w-full hover:bg-white"
          onClick={() => dispatch(OpenApplication("brave"))}
        >
          <img
            src="/images/brave.png"
            alt="brave icons"
            className="w-10 h-10 p-1"
          />
        </div>
        <div
          className="flex justify-center w-full hover:bg-white"
          onClick={() => dispatch(OpenApplication("discord"))}
        >
          <img
            src="/images/discord.png"
            alt="discord icons"
            className="w-12 h-12 p-1"
          />
        </div>
        <div
          className="flex justify-center w-full hover:bg-white"
          onClick={() => dispatch(OpenApplication("fortnite"))}
        >
          <img
            src="/images/fn.png"
            alt="fortnite icons"
            className="w-12 h-12 p-1"
          />
        </div>
        <div
          className="flex justify-center w-full hover:bg-white"
          onClick={() => dispatch(OpenApplication("valorant"))}
        >
          <img
            src="/images/valo2.png"
            alt="valorant icons"
            className="w-10 h-10 p-1"
          />
        </div>
        <div
          className="flex justify-center w-full hover:bg-white"
          onClick={() => dispatch(OpenApplication("portfolio"))}
        >
          <img
            src="/images/portfolio.png"
            alt="portfolio icons"
            className="w-10 h-10 p-1"
          />
        </div>

        <div className="flex justify-center w-full hover:bg-white">
          <img
            src="/images/reloading.png"
            alt="shutdown icons"
            className="w-10 h-10 p-1"
          />
        </div>
        <div className="flex justify-center w-full hover:bg-white">
          <img
            src="/images/shutdown.png"
            alt="shutdown icons"
            className="w-10 h-10 p-1"
          />
        </div>
      </div>
      {/* main */}
      <div class="flex flex-col m-2 justify-start">
        {/* <input className="w-full" placeholder="Search" /> */}
        <div className="grid gap-x-2 gap-y-2 grid-cols-2 h-1/3 mt-2">
          <div className="flex justify-center items-center h-2/3 hover:bg-white cursor-default">
            <img
              src="/images/brave.png"
              alt="brave icons"
              className="w-8 h-8"
            />
            <span>Brave Browser</span>
          </div>
          <div className="flex justify-start items-center h-2/3 hover:bg-white cursor-default">
            <img
              src="/images/discord.png"
              alt="discord icons"
              className="w-10 h-10"
            />
            <span>Discord</span>
          </div>

          <div className="flex justify-start items-center h-2/3 hover:bg-white cursor-default">
            <img
              src="/images/fn.png"
              alt="fortnite icons"
              className="w-10 h-10"
            />
            <span>Fortnite</span>
          </div>

          <div className="flex justify-start items-center h-2/3 hover:bg-white cursor-default">
            <img
              src="/images/valo2.png"
              alt="valorant icons"
              className="w-10 h-10"
            />
            <span>Valorant</span>
          </div>

          <div className="flex justify-start items-center h-2/3 hover:bg-white cursor-default">
            <img
              src="/images/portfolio.png"
              alt="portfolio icons"
              className="w-10 h-10"
            />
            <span>Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup;
