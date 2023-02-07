import { useContext } from "react";
import FullProfile from "../components/Profile/FullProfile";
import { useAuth, UserContext } from "../contexts/UserContext";
import IPost from "../interfaces/IPost";
import IUser from "../interfaces/IUser";

const user: IUser = { userName: "SoofPess" };

const posts: IPost[] = [];

function Profile() {
  const { user } = useAuth();

  console.log('ue ' + user);

  return (
    <>{user ? <FullProfile user={user} /> : <h4>no user is connected.</h4>}</>
  );
}

export default Profile;
