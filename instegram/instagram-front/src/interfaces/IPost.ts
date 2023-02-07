import IUser from "./IUser";

interface IPost {
  postId: number;
  postOwner: IUser;
  imgSrc: string;
  location?: string;
  description?: string;
}

export default IPost;
