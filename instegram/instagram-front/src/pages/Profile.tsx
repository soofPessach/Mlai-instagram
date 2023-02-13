import { Alert, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import FullProfile from "../components/Profile/FullProfile";
import { useAuth, UserContext } from "../contexts/UserContext";
import { emptyAlertMsg, IAlertMsg } from "../interfaces/IAlertMsg";
import CloseIcon from "@mui/icons-material/Close";
import { IUser, defaultUser } from "../interfaces/IUser";
import { getUser } from "../requests/usersRequests";

function Profile() {
  const { user } = useAuth();
  const [userNotFoundAlert, setUserNotFoundAlert] =
    useState<IAlertMsg>(emptyAlertMsg);
  const [pUser, setPUser] = useState<IUser>(defaultUser);

  useEffect(() => {
    const urlUserName: string = window.location.pathname.split("/")[2];

    urlUserName !== ':profileName' ?
      getUser(urlUserName).then((newUser) => {
        setPUser(newUser);
      })
      :
      setPUser(user);
  }, [user]);

  return (
    <>
      {user ? (
        <FullProfile user={pUser} />
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
