import { Alert, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import Info from "./info/Info";
import CloseIcon from "@mui/icons-material/Close";
import { defaultUser, IUser } from "../../../interfaces/IUser";
import { emptyAlertMsg, IAlertMsg } from "../../../interfaces/IAlertMsg";
import { getUserPosts } from "../../../requests/postRequests";
import ProfilePostsList from "./profilePostsList/profilePostsList";

interface IFullProfile {
  user: IUser;
}

function GenericProfile({ user }: IFullProfile) {
  const [userPosts, setUserPosts] = useState([]);
  const [userPostsAmount, setUserPostsAmount] = useState(0);
  const [postsNotFoundAlert, setPostsNotFoundAlert] =
    useState<IAlertMsg>(emptyAlertMsg);

  useEffect(() => {
    if (user.userName !== defaultUser.userName) {
      getUserPosts(user.userName)
        .then((data) => {
          setUserPosts(data);
          setUserPostsAmount(data.length);
        })
        .catch((e) => {
          setPostsNotFoundAlert({
            type: "error",
            message: `${user.userName} does not have any posts yet...`,
          });
        });
    }
  }, [user]);

  return (
    <>
      <Info profile={user} postsAmount={userPostsAmount}></Info>
      {postsNotFoundAlert.message === emptyAlertMsg.message ? (
        <ProfilePostsList posts={userPosts}></ProfilePostsList>
      ) : (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setPostsNotFoundAlert(emptyAlertMsg);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={postsNotFoundAlert.type}
        >
          {postsNotFoundAlert.message}
        </Alert>
      )}
    </>
  );
}

export default GenericProfile;
