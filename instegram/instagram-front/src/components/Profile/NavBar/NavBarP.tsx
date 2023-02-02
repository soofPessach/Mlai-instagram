import { AppBar, Typography, Link } from "@mui/material";

interface INavBarP {
  userName: string;
}

function NavBarP({ userName }: INavBarP) {
  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Typography variant="h6" align="center">
          <b> {userName}</b>
        </Typography>
      </AppBar>
    </>
  );
}

export default NavBarP;
