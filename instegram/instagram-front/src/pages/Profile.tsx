import { Alert, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import FullProfile from "../components/Profile/FullProfile";
import { useAuth, UserContext } from "../contexts/UserContext";
import { emptyAlertMsg, IAlertMsg } from "../interfaces/IAlertMsg";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { IUser, defaultUser } from "../interfaces/IUser";

function Profile() {
  const { state } = useLocation();
  const { user } = useAuth();
  const [userNotFoundAlert, setUserNotFoundAlert] =
    useState<IAlertMsg>(emptyAlertMsg);
  const [pUser, setPUser] = useState<IUser>(defaultUser);

  useEffect(() => {
    console.log(state);
    state ? setPUser(state.profileUser) : setPUser(user);
  }, []);

  return (
    <>
      {user ? (
        <FullProfile user={user} />
      ) : (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setUserNotFoundAlert(emptyAlertMsg);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={userNotFoundAlert.type}
        >
          {userNotFoundAlert.message}
        </Alert>
      )}
    </>
  );
}

export default Profile;
