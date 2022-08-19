import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CloseApplication } from "../../actions/App";
function Discord() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center absolute bottom-24 left-1/4 h-3/4 w-2/4">
      <div className="relative">
        <img src="/images/discordbg.jpg" />
        <a href="https://discord.gg/KMMCEWsw6G" target="_blank">
          <button className="absolute bottom-1/4 left-72 bg-white p-2 rounded transition delay-75 hover:bg-blue-600 hover:translate-y-1 hover:text-white">
            Join Our Channel
          </button>
        </a>
      </div>

      <div
        className="mt-2 transition delay-75 h-10 w-10 hover:bg-red-50 hover:translate-y-1"
        onClick={() => {
          dispatch(CloseApplication("discord"));
        }}
      >
        <AiFillCloseSquare color="red" size="40" />
      </div>
    </div>
  );
}

export default Discord;
