import { Alert, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { emptyAlertMsg, IAlertMsg } from "../interfaces/IAlertMsg";
import CloseIcon from "@mui/icons-material/Close";
import { IUser, defaultUser } from "../interfaces/IUser";
import { getUser } from "../requests/usersRequests";
import { useAuth } from "../contexts/authContext";
import GenericProfile from "../components/profile/genericProfile/genericProfile";

function Profile() {
  const { logInUser } = useAuth();
  const [userNotFoundAlert, setUserNotFoundAlert] =
    useState<IAlertMsg>(emptyAlertMsg);
  const [pUser, setPUser] = useState<IUser>(defaultUser);

  useEffect(() => {
    const urlUserName: string = window.location.pathname.split("/")[2];

    urlUserName !== ":profileName"
      ? getUser(urlUserName).then((newUser) => {
          setPUser(newUser);
        })
      : setPUser(logInUser);
  }, [logInUser]);

  return (
    <>
      {logInUser ? (
        <GenericProfile user={pUser} />
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
