import { Box } from "@mui/material";
import IPost from "../../../../interfaces/IPost";
import "./profilePostsList.css";
interface IProfilePostsList {
  posts: IPost[];
}

function ProfilePostsList({ posts }: IProfilePostsList) {
  return (
    <>
      <Box className="postsListBox">
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <img key={post.postId} alt={post.imgSrc} src={post.imgSrc} className="postImg" />
          ))}
      </Box>
    </>
  );
}

export default ProfilePostsList;
