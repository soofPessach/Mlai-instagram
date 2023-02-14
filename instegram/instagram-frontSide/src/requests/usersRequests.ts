import axios from "axios";

export const getAllUsers = async () => {
  try {
    return (
      await axios({
        method: "get",
        url: "http://localhost:3000/users", //Endpoint goes here,
        params: {},
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};

export const getUser = async (userName: string) => {
  try {
    return (
      await axios({
        method: "get",
        url: `http://localhost:3000/users/${userName}`, //Endpoint goes here,
        params: {},
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};
