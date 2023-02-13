import { AppBar, Typography, Link, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

interface INavBarP {
  userName?: string;
}

function UpperNavBar({ userName }: INavBarP) {

  const [upperBarValue, setUpperBarValue] = useState<string | undefined>('');

  const findComponent = () => {

    const currPath = window.location.pathname;

    switch (currPath.split("/")[1]) {
      case "Profile":
        return currPath.split("/")[2];
      case "AddPost":
        return "New Post";
      default:
        return "Instagram";
    }
  };
  useEffect(() => {
    setUpperBarValue(findComponent());
  }, [window.location.pathname]);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        {
          <Typography variant="h6" align="center">
            <b>{upperBarValue}</b>
          </Typography>
        }
      </AppBar>
    </>
  );
}

export default UpperNavBar;
