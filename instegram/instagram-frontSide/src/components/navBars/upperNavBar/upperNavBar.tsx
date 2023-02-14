import { AppBar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./upperNavBar.css";

function UpperNavBar() {
  const [upperBarValue, setUpperBarValue] = useState<string>("");

  const findByPath = (currPath: string) => {
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
    setUpperBarValue(findByPath(window.location.pathname));
  }, []);

  return (
    <>
      <AppBar>
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
