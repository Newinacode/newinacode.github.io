import { React, useContext } from "react";
import { AiOutlineDownload, AiFillCloseSquare } from "react-icons/ai";
import { StoreContext } from "../../utils/Store";

function Portfolio() {
  const { portfolio } = useContext(StoreContext);
  const [port, setPort] = portfolio;
  return (
    <div className="flex absolute bottom-1/4 left-1/4 w-3/6 h-2/3">
      {/*  */}
      <object
        className="h-full w-full"
        type="application/pdf"
        data="/documents/rupeshresume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"
      />
      {/* side button  */}
      <div className="mt-32 ml-4">
        {/* download */}
        <a
          href="/documents/rupeshresume.pdf"
          download
          className="cursor-default"
        >
          <div className="transition delay-75 h-10 w-10 hover:bg-green-600 hover:translate-y-1">
            <AiOutlineDownload color="white" size="40" />
          </div>
        </a>

        {/* close */}
        <div
          className="mt-2 transition delay-75 h-10 w-10 hover:bg-red-50 hover:translate-y-1"
          onClick={() => {
            setPort(false);
          }}
        >
          <AiFillCloseSquare color="red" size="40" />
          {/* <img src="images/close.png" className="h-8 w-8" /> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
