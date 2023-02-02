import Post from "../components/Post/Post";
import IPost from "../interfaces/IPost";
import IUser from "../interfaces/IUser";

const user: IUser = { userName: "SoofPess" };
const post: IPost = {
  imgSrc:
    "https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg",
  postOwner: user,
  likes: 3,
  description: "dskfhskfh skdfhsdkfh ksdfgsdkf ksfhskdf",
};

const post2: IPost = {
  imgSrc:
    "https://media.istockphoto.com/id/1077741064/photo/tel-aviv-skyline.jpg?s=612x612&w=0&k=20&c=4GqVLwnp3zsh8f9kJtIXzMClTvz2r5-6pNilFSd855s=",
  postOwner: user,
  likes: 4,
  description: "dskfhskfh skdfhsdkfh ksdfgsdkf ksfhskdf",
};
const post3: IPost = {
  imgSrc:
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  postOwner: user,
  likes: 5,
  description: "dskfhskfh skdfhsdkfh ksdfgsdkf ksfhskdf",
};

const posts: IPost[] = [post, post2, post3];

function Feed() {
  return (
    <>
      {
      posts.map((post)=>
        <Post post={post}/>
      )
      }
    </>
  );
}

export default Feed;
