import React, { useEffect, useState } from "react";
import "./Post.css";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IPost from "../../interfaces/IPost";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link, useNavigate } from "react-router-dom";
import {
  addLike,
  getPostLikesAmount,
  isUserLikedPost,
  removeLike,
} from "../../requests/likeRequests";
import { useAuth } from "../../contexts/UserContext";

interface IPostFun {
  post: IPost;
}

function Post({ post }: IPostFun) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesAmount, setLikesAmount] = useState<number>(0);
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    getPostLikesAmount(post.postId).then(setLikesAmount);
  }, [isLiked]);

  useEffect(() => {
    isUserLikedPost(post.postId, user.userName).then(setIsLiked);
  }, []);

  const likePost = () => {
    isLiked
      ? removeLike(post.postId, user.userName).then(() => setIsLiked(false))
      : addLike(post.postId, user.userName).then(() => setIsLiked(true));
  };

  return (
    <Card>
      <CardHeader
        avatar={
          post.postOwner.userImg ? (
            <Avatar
              src={post.postOwner.userImg}
              onClick={() => {
                { console.log(post.postOwner.userName) }
                navigate(`/profile/${post.postOwner.userName}`);
              }}
            ></Avatar>
          ) : (
            <Avatar
              onClick={() => {
                { console.log(post.postOwner.userName) }
                navigate(`/profile/${post.postOwner.userName}`);
              }}
            >
              {post.postOwner.userName[0]}
            </Avatar>
          )
        }
        title={<b> {post.postOwner.userName} </b>}
        subheader={post.location ? post.location : ""}
      />

      <img src={post.imgSrc} className="img-Post" />

      <CardActions className="CardActions">
        <IconButton onClick={likePost}>
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <IconButton>
          <ModeCommentOutlinedIcon />
        </IconButton>

        <IconButton>
          <SendOutlinedIcon />
        </IconButton>

        <IconButton className="AlignRight">
          <BookmarkBorderOutlinedIcon />
        </IconButton>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{likesAmount} likes</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>{post.postOwner.userName}</b> {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
