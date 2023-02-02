import { AppBar, Toolbar, Link } from "@mui/material";
import React from "react";
import routes from "../../routes/routes";
import "./NavBar.css";

function NavBar() {
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: "0" }}>
      <Toolbar className="Toolbar">
        {routes.map((route) => (
          < Link href={route.path} >
            {
              React.createElement(route.navLinkIcon ? route.navLinkIcon : '', {
                style: { color: "black", width: "40px", height: "auto" },
              })
            }
          </Link>
        ))}
      </Toolbar>
    </AppBar >
  );
}

export default NavBar;
