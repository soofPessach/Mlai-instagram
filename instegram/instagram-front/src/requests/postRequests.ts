import axios from "axios";
import IUser from "../interfaces/IUser";

export const getAllPosts = async () => {
  try {
    return (
      await axios({
        method: "get",
        url: `http://localhost:3000/posts`, //Endpoint goes here,
        params: {},
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};

export const getUserPosts = async (userName: string) => {
  try {
    return (
      await axios({
        method: "get",
        url: `http://localhost:3000/posts/user/${userName}`, //Endpoint goes here,
        params: {},
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};

export const addPost = async (
  imgSrc: string,
  user: IUser,
  location?: string,
  description?: string
) => {
  try {
    return (
      await axios({
        method: "post",
        url: `http://localhost:3000/posts`, //Endpoint goes here,
        params: {},
        data: {
          postOwner: user,
          imgSrc: imgSrc,
          location: location,
          description: description,
        },
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};