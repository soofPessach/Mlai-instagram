import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import UserPosts from "../pages/UserPosts";
import AddPost from "../pages/AddPost";

export interface IRoute {
  path: string;
  component: () => JSX.Element;
  navLinkIcon?: typeof HomeOutlinedIcon;
}

const routes: IRoute[] = [
  {
    component: Feed,
    path: "/",
    navLinkIcon: HomeOutlinedIcon,
  },
  {
    component: AddPost,
    path: "/AddPost",
    navLinkIcon: AddAPhotoIcon,
  },
  {
    component: Profile,
    path: `/Profile/:profileName`,
    navLinkIcon: AccountCircleOutlinedIcon,
  },


];

export default routes;
