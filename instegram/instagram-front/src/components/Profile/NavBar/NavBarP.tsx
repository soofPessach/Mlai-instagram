import { AppBar, Typography, Link, Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

interface INavBarP {
  userName?: string;
}

function UpperNavBar({ userName }: INavBarP) {

  const findComponent = () => {
    switch (window.location.pathname.split('/')[1]) {
      case 'Profile':
        return userName;
      case 'AddPost':
        return 'New Post'
      default:
        return 'Instagram'
    }
  }
  return (
    <>
      <AppBar position="sticky" color="inherit">
        {
          <Typography variant="h6" align="center">
            <b> {findComponent()}</b>
          </Typography>
        }
      </AppBar>
    </>
  );
}

export default UpperNavBar;
