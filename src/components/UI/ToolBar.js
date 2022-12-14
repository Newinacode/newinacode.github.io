import { React, useState, useEffect, useContext } from "react";
import { FcLinux } from "react-icons/fc";
import { OpenApplication } from "../../actions/App";
import { useDispatch, useSelector } from "react-redux";
function ToolBar() {
  const [dateTime, setDateTime] = useState(new Date());

  const dispatch = useDispatch();

  const { terminal, valorant, fortnite } = useSelector((state) => state);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // const indexer = {
  //   terminal: 0,
  //   valorant: 1,
  //   fortnite: 2,
  //   startupMenu: 3,
  // };

  // const handleClick = (event, value) => {
  // if (value == "terminal") {
  //   setStartupMenu(false);
  //   setTerm(true);
  // }
  //   if (value == "valorant") {
  //     setValorant(true);
  //     setStartupMenu(false);
  //   }
  //   if (value == "fortnite") {
  //     setStartupMenu(false);
  //     setFn(true);
  //   }
  //   if (value == "startupMenu") {
  //     setStartupMenu(!startupMenu);
  //   }
  //   const max_zindex = Max(zindex);
  //   console.log(max_zindex);

  //   if (max_zindex >= 40) {
  //     setZindex(
  //       zindex.map((index, x) => {
  //         if (x == indexer[value]) {
  //           return 40;
  //         } else {
  //           return index - 10;
  //         }
  //       })
  //     );
  //   } else {
  //     setZindex(
  //       zindex.map((index, x) => {
  //         if (x == indexer[value]) {
  //           return max_zindex + 10;
  //         } else {
  //           return index;
  //         }
  //       })
  //     );
  //   }
  // };

  return (
    <div className="absolute bottom-0 w-full flex bg-cyan-900 h-14 items-center justify-between select-none">
      {/* right side icons menu  */}
      <div
        className="flex h-14 w-16 hover:bg-gray-50 items-center justify-center"
        onClick={() => dispatch(OpenApplication("startup"))}
      >
        <FcLinux size="50" className="hover:bg-gray-50 h-14" />
      </div>
      {/* center */}
      <div className="flex w-80 items-center">
        {/* terminal */}
        <div
          className={`flex h-14 w-16 hover:bg-gray-50 items-center justify-center ${
            terminal ? "bg-white border-b-4 border-indigo-500" : ""
          }`}
          onClick={() => dispatch(OpenApplication("terminal"))}
        >
          <img src="images/terminal.png" className="h-10" alt="console icon" />
        </div>
        {/* Brave */}
        <div className="flex h-14 w-16 hover:bg-gray-50 items-center justify-center">
          <img
            src="/images/brave.png"
            className="h-10"
            alt="brave browser icon"
          />
        </div>

        {/* Valorant */}
        <div
          className={`flex h-14 w-16 hover:bg-gray-50 items-center justify-center ${
            valorant ? "bg-white border-b-4 border-indigo-500" : ""
          }`}
          onClick={() => dispatch(OpenApplication("valorant"))}
        >
          <img
            src="/images/valo2.png"
            className="h-12"
            alt="valorant game icon"
          />
        </div>

        {/* fortnite */}
        <div
          className="flex h-14 w-16 hover:bg-gray-50 items-center justify-center"
          onClick={() => dispatch(OpenApplication("fortnite"))}
        >
          <img src="/images/fn.png" className="h-12" alt="discord icon" />
        </div>

        {/*Discord  */}
        <div
          className="flex h-14 w-16 hover:bg-gray-50 items-center justify-center"
          onClick={() => dispatch(OpenApplication("discord"))}
        >
          <img src="/images/discord.png" className="h-12" alt="discord icon" />
        </div>
      </div>

      {/* end */}
      <div class="flex items-center">
        {/* in */}
        <a
          className="cursor-default"
          href="https://www.linkedin.com/in/rupesh-acharya-b893921b4/"
          target="_blank"
        >
          <div className="flex h-14 w-10 hover:bg-gray-50 items-center justify-center">
            <img src="/images/in.png" className="h-6" />
          </div>
        </a>

        {/* github */}
        <a
          className="cursor-default"
          href="https://github.com/Newinacode"
          target="_blank"
        >
          <div className="flex h-14 w-10 hover:bg-gray-50 items-center justify-center">
            <img src="/images/github.png" className="h-6" />
          </div>
        </a>

        <div className="flex items-center justify-center hover:bg-gray-50 h-14 w-28 cursor-default tracking-tight px-2">
          {dateTime.toLocaleDateString("en", {
            hour: "numeric",
            hour12: true,
            minute: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
