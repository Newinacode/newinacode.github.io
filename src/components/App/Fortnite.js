import { React, useEffect, useState, useContext } from "react";
import { apiCall } from "../../utils/APICall";
import { StoreContext } from "../../utils/Store";
function Fortnite() {
  const [userData, setUserData] = useState();
  const { z_index, fortnite } = useContext(StoreContext);
  const [zindex, setZindex] = z_index;
  const [fn, setFn] = fortnite;
  useEffect(() => {
    const fetchData = async (url) => {
      let response = await apiCall({ url: url });
      return setUserData(response.data);
    };
    const url = "https://fortnite-api.com/v2/stats/br/v2/";
    setUserData(fetchData(url));
  }, []);

  return (
    <div className={`z-${zindex[2]} absolute bottom-24 left-1/4 h-3/4 w-2/4`}>
      {userData ? (
        <div>
          <img src={userData.image} alt="account image" />

          <img
            src="/images/valorant/close.png"
            className="absolute left-full bottom-3/4 hover:border-2 rounded-r-3xl border-fortnite"
          />

          <img
            src="/images/close-fn.png"
            className="absolute left-full bottom-3/4 hover:border-2 rounded-r-3xl border-fortnite"
            onClick={() => {
              setFn(false);
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Fortnite;
