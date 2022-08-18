import { React, useState, useContext } from "react";
import { StoreContext } from "../../utils/Store";

function Terminal() {
  const { terminal, z_index } = useContext(StoreContext);
  const [term, setTerm] = terminal;
  const [zindex, setZindex] = z_index;

  return (
    <div
      className={`absolute z-${zindex[0]} bg-stone-900  bottom-24 left-1/4 box-border h-3/4 w-2/4 border-2 select-none`}
    >
      {/* terminal heading */}
      <div className="flex h-6 bg-white items-center justify-between">
        <div className="flex items-center">
          <img src="/images/terminal.png" className="h-6" />
          <span className="mx-2">Terminal</span>
        </div>
        {/* close and minimize  */}
        <div className="flex">
          <div className="flex justify-center items-center w-6 h-6 hover:bg-gray-100">
            <img className="h-4" src="/images/mini.png" alt="minimize icon" />
          </div>
          <div
            className="flex items-center justify-center w-6 h-6 hover:bg-gray-100"
            onClick={() => setTerm(false)}
          >
            <img className="h-4" src="/images/close.png" />
          </div>
        </div>
      </div>
      {/* body of the terminal */}
      <div className="flex flex-col mt-2 mx-2">
        <div className="flex">
          <span className="text-sm text-green-200">RUPESH@HOME :</span>
          <input className="terminal-input text-white bg-transparent border-none focus:outline-transparent focus:ring-0 caret-white caret-block" />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
