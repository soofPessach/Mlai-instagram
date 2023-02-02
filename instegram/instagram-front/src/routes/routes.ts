import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";

export interface IRoute {
  path: string;
  component: () => JSX.Element;
  navLinkIcon: typeof HomeOutlinedIcon;
}

const routes: IRoute[] = [
  {
    component: Feed,
    path: "/",
    navLinkIcon: HomeOutlinedIcon,
  },
  {
    component: Profile,
    path: "/Profile",
    navLinkIcon: AccountCircleOutlinedIcon,
  },
];

export default routes;
