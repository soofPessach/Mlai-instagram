import { Alert, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import IPost from "../interfaces/IPost";
import { getAllPosts } from "../requests/postRequests";
import CloseIcon from "@mui/icons-material/Close";
import { emptyAlertMsg, IAlertMsg } from "../interfaces/IAlertMsg";
import Post from "../components/feed/post/post";

function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [postsNotFoundAlert, setPostsNotFoundAlert] =
    useState<IAlertMsg>(emptyAlertMsg);

  useEffect(() => {
    getAllPosts()
      .then((json) => {
        setPosts(json);
      })
      .catch((e: any) => {
        setPostsNotFoundAlert({
          type: "error",
          message: "no posts has been found",
        });
      });
  }, []);

  return (
    <>
      {postsNotFoundAlert.message === emptyAlertMsg.message ? (
        posts
          .slice(0)
          .reverse()
          .map((post) => <Post key={post.postId} post={post} />)
      ) : (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setPostsNotFoundAlert(emptyAlertMsg);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={postsNotFoundAlert.type}
        >
          {postsNotFoundAlert.message}
        </Alert>
      )}
    </>
  );
}

export default Feed;
