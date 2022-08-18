import axios from "axios";
import { React, useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { CloseApplication } from "../../actions/App";
const apiCall = async ({ url }) => {
  let apiReturn = await axios.get(url).then((res) => {
    return res;
  });
  return apiReturn;
};

function ValorantTab() {
  const dispatch = useDispatch();
  const puuid = "aad0f584-33a6-5127-b540-4fd558ad2992";
  const [userData, setUserData] = useState();
  const [recentMatches, setRecentMatches] = useState();

  useEffect(() => {
    const url = `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/ap/${puuid}`;
    const recentGamesUrl = `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr-history/ap/${puuid}`;
    const fetchData = async (url) => {
      let response = await apiCall({ url: url });
      return setUserData(response.data);
    };
    setUserData(fetchData(url));

    const fData = async (url) => {
      let response = await apiCall({ url: url });
      return setRecentMatches(response.data);
    };

    setRecentMatches(fData(recentGamesUrl));
  }, []);

  const [home, setHome] = useState(true);

  return (
    <div className={`z-0 absolute bottom-24 left-1/4 h-3/4 w-2/4`}>
      <IoArrowBackCircle
        color="rgba(255,70,84,255)"
        size="50"
        className="absolute left-full bottom-2/4 hover:border-2 rounded-r-3xl border-valored"
        onClick={() => {
          setHome(true);
        }}
      />
      <img
        src="/images/valorant/close.png"
        className="absolute left-full bottom-3/4 hover:border-2 rounded-r-3xl border-valored"
        onClick={() => {
          dispatch(CloseApplication("valorant"));
        }}
      />
      {home ? (
        <div className="relative">
          <img src="/images/valorant/sage2.png" />

          <button className="absolute bottom-8 left-1/4 bg-valored p-2 hover:bg-valoblue duration-300">
            <span
              className="text-white"
              onClick={() => {
                setHome(false);
              }}
            >
              WATCH MY STATS
            </span>
          </button>

          <button className="absolute bottom-8 left-2/4 bg-valored p-2 hover:bg-valoblue duration-300 opacity-95">
            <a
              href="https://playvalorant.com/"
              className="text-white"
              target="_blank"
            >
              PLAY VALORANT
            </a>
          </button>
        </div>
      ) : (
        <div className="h-4/5 relative bg-gradient-to-r from-valoblue to-valored">
          {userData.data && recentMatches.data ? (
            <div>
              <div className="flex justify-between">
                <div className="flex m-2 items-center">
                  <img
                    src="images/valo2.png"
                    className="h-10 w-10"
                    alt="valorant logo"
                  />
                  <span className="ml-1 text-2xl text-white">
                    {userData.data.name}
                  </span>

                  <div className="ml-2 bg-white opacity-40">
                    <span className="text-2xl mx-2 text-zinc-400">
                      #{userData.data.tag}
                    </span>
                  </div>
                </div>
                <div className="flex m-4">
                  <img src={userData.data.images.small} alt="rank account" />
                  <div>
                    <p className="text-xl text-stone-300 font-semibold">
                      Rating
                    </p>
                    <span className="text-xl text-white font-black">
                      {userData.data.currenttierpatched}
                    </span>
                  </div>
                </div>
              </div>
              {/*recent 20 games  */}
              <div className="m-2 text-2xl text-white font-black mt-10">
                Recent Games Played
              </div>
              <div className="ml-2 flex justify-around w-1/2 items-center mb-3">
                {recentMatches.data.map((match) => (
                  <div
                    className={`text-white w-1/12 ${
                      match["mmr_change_to_last_game"] > 0
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    <span className="px-2 font-semibold">
                      {match["mmr_change_to_last_game"] > 0 ? " W " : " L "}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ValorantTab;
