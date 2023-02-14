import { Avatar, Box } from "@mui/material";
import { useEffect } from "react";
import { IUser } from "../../../../interfaces/IUser";
import IUSerUnitData from "../../../../interfaces/IUserUnitData";
import "./info.css";
import UserData from "./userData/userFullData/userFullData";

interface IInfo {
  profile: IUser;
  postsAmount: number;
}

const defaultDetails: IUSerUnitData[] = [
  { header: "Post", quantity: 6 },
  { header: "Followers", quantity: 152 },
  { header: "Following", quantity: 117 },
];

function Info({ profile, postsAmount }: IInfo) {
  useEffect(() => {
    defaultDetails[0].quantity = postsAmount;
  }, [postsAmount]);

  return (
    <>
      <Box className="infoBox">
        {profile.userImg ? (
          <Avatar src={profile.userImg} className="userAvatar"></Avatar>
        ) : (
          <Avatar className="userAvatar">{profile.userName[0]}</Avatar>
        )}

        <UserData details={defaultDetails}></UserData>
      </Box>
    </>
  );
}

export default Info;
