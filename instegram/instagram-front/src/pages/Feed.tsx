import { useEffect, useState } from "react";
import Post from "../components/Post/Post";
import { UserContext } from "../contexts/UserContext";
import IPost from "../interfaces/IPost";
import IUser from "../interfaces/IUser";
import { getAllPosts } from "../requests/postRequests";

function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getAllPosts().then((json) => {
      setPosts(json);
    });
  });

  return (
    <>
      {posts ? (
        posts.map((post) => <Post post={post} />)
      ) : (
        <h4>no data was found.</h4>
      )}
    </>
  );
}

export default Feed;
