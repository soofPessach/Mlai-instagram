import { Avatar, Box } from "@mui/material";
import { useEffect } from "react";
import IDetailsP from "../../../interfaces/IDetailsP";
import {IUser} from "../../../interfaces/IUser";
import StatisticsList from "../Statistics/StatisticsList/StatisticsList";

interface IInfo {
  profile: IUser;
  postsAmount: number;
}

const details: IDetailsP[] = [
  { header: "Post", quantity: 6 },
  { header: "Followers", quantity: 152 },
  { header: "Following", quantity: 117 },
];

function Info({ profile, postsAmount }: IInfo) {
  useEffect(() => {
    details[0].quantity = postsAmount;
  }, [postsAmount]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        {profile.userImg ? (
          <Avatar
            src={profile.userImg}
            sx={{ width: "20vw", height: "20vw" }}
          ></Avatar>
        ) : (
          <Avatar sx={{ width: "20vw", height: "20vw" }}>
            {profile.userName[0]}
          </Avatar>
        )}

        <StatisticsList details={details}></StatisticsList>
      </Box>
    </>
  );
}

export default Info;
