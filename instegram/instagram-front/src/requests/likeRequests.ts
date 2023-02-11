import axios from "axios";

export const getPostLikesAmount = async (postId: number) => {
  try {
    return (
      await axios({
        method: "get",
        url: `http://localhost:3000/likes/post/${postId}`, //Endpoint goes here,
        params: {},
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};

export const isUserLikedPost = async (postId: number, userName: string) => {
  try {
    return (
      await axios({
        method: "get",
        url: `http://localhost:3000/likes/post/${postId}/user/${userName}`, //Endpoint goes here,
        params: {},
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
  }
};

export const addLike = async (postId: number, userName: string) => {
  try {
    return (
      await axios({
        method: "post",
        url: `http://localhost:3000/likes`, //Endpoint goes here,
        params: {},
        data: {
          username: userName,
          postId: postId,
        },
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
    throw new Error(e);
  }
};

export const removeLike = async (postId: number, userName: string) => {
  try {
    return (
      await axios({
        method: "delete",
        url: `http://localhost:3000/likes`, //Endpoint goes here,
        params: {},
        data: {
          username: userName,
          postId: postId,
        },
      })
    ).data;
  } catch (e: any) {
    console.log("error: " + e.message);
    throw new Error(e);
  }
};
