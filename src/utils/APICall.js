import axios from "axios";
export const apiCall = async ({ url }) => {
  let apiReturn = await axios
    .get(url, {
      headers: { Authorization: process.env.REACT_APP_FORTNITE_TRACKER_API },
      params: { name: "anka_lunaticnoob", image: "all" },
    })
    .then((res) => {
      return res.data;
    });
  return apiReturn;
};
