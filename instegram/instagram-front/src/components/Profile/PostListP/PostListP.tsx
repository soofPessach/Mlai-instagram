import { autocompleteClasses, Avatar, Box } from "@mui/material";
import { height } from "@mui/system";
import { resolvePath } from "react-router-dom";
import IDetailsP from "../../../interfaces/IDetailsP";
import IPost from "../../../interfaces/IPost";
import IUser from "../../../interfaces/IUser";
import StatisticsList from "../Statistics/StatisticsList/StatisticsList";

interface IPostListP {
  posts: IPost[];
}

function PostListP({ posts }: IPostListP) {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,auto)",
          justifyContent: "center",
          paddingLeft: '15px',
          paddingRight: '15px',
        }}
      >
        {posts.map((post) => (
          <img
            src={post.imgSrc}
            width='99%'
            height='99%'
            style={{ padding: "5px" }}
          />
        ))}
      </Box>
    </>
  );
}

export default PostListP;
