import Post from "../components/Post/Post";
import IPost from "../interfaces/IPost";
import { IUser } from "../interfaces/IUser";

const user: IUser = { userName: "SoofPess" };

const posts: IPost[] = [];

function UserPosts() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </>
  );
}

export default UserPosts;
