import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Feed from "../pages/feed";
import AddPost from "../pages/addPost";
import Profile from "../pages/profile";

export interface IRoute {
  path: string;
  name: string;
  component: () => JSX.Element;
  navLinkIcon: typeof HomeOutlinedIcon;
}

const routes: IRoute[] = [
  {
    component: Feed,
    name: "feed",
    path: "/",
    navLinkIcon: HomeOutlinedIcon,
  },
  {
    component: AddPost,
    name: "add post",
    path: "/AddPost",
    navLinkIcon: AddAPhotoIcon,
  },
  {
    component: Profile,
    name: "profile",
    path: `/Profile/:profileName`,
    navLinkIcon: AccountCircleOutlinedIcon,
  },
];

export default routes;
