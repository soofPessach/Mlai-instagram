import { useEffect, useState } from "react";
import IPost from "../../interfaces/IPost";
import IUser from "../../interfaces/IUser";
import { getUserPosts } from "../../requests/postRequests";
import Info from "./info/Info";
import PostListP from "./PostListP/PostListP";

const user: IUser = { userName: "SoofPess" };

interface IFullProfile {
  user: IUser;
}

function Profile({ user }: IFullProfile) {
  const [userPosts, setuserPosts] = useState([]);

  useEffect(() => {
    getUserPosts(user.userName).then((data) => {
      if (data) {
        setuserPosts(data);
      }
    });
  });

  return (
    <>
      <Info profile={user}></Info>
      {userPosts ? (
        <PostListP posts={userPosts}></PostListP>
      ) : (
        <h4>no posts was found.</h4>
      )}
    </>
  );
}

export default Profile;
