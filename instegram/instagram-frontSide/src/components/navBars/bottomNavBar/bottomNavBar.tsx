import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useAuth } from "../../../contexts/authContext";
import routes from "../../../routes/routes";
import "./bottomNavBar.css";

function NavBar() {
  const [value, setValue] = React.useState("feed");
  const { logInUser } = useAuth();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const updatePath = (path: string) => {
    if (path === routes.find((route) => route.name === "profile")?.path) {
      return `profile/${logInUser.userName}`;
    } else {
      return path;
    }
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation value={value} onChange={handleChange}>
        {routes.map((route) => (
          <BottomNavigationAction
            href={updatePath(route.path)}
            key={route.name}
            label={route.name}
            value={route.name}
            icon={React.createElement(route.navLinkIcon)}
          ></BottomNavigationAction>
        ))}
      </BottomNavigation>
    </Paper>
  );
}

export default NavBar;
