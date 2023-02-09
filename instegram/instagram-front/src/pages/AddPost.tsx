import {
  Alert,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/UserContext";
import IAlertMsg from "../interfaces/IAlertMsg";
import { addPost } from "../requests/postRequests";
import CloseIcon from "@mui/icons-material/Close";

function AddPost() {
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const { user } = useAuth();
  const [urlErrorMsg, setUrlErrorMsg] = useState("");
  const [addActionAlert, setAddActionAlert] = useState<IAlertMsg>({
    message: "",
    type: "info",
  });

  function isImgUrl(url: string) {
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
    });
  }

  const add = async () => {
    if (await isImgUrl(imgUrl)) {
      setUrlErrorMsg("");
      try {
        await addPost(imgUrl, user, location, description);
        setAddActionAlert({
          message: "the post was uploaded successfully",
          type: "success",
        });
      } catch (e: any) {
        setAddActionAlert({
          message: "uploading failed.. please try again",
          type: "error",
        });
      }
    } else {
      setUrlErrorMsg("please put a valid url image");
    }
  };

  return (
    <>
      {addActionAlert.message !== "" ? (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAddActionAlert({ message: "", type: "info" });
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={addActionAlert.type}
        >
          {addActionAlert.message}
        </Alert>
      ) : (
        <></>
      )}
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <TextField
            fullWidth
            variant="standard"
            required
            multiline
            value={imgUrl}
            label="image url"
            helperText={urlErrorMsg}
            error={urlErrorMsg !== "" ? true : false}
            onChange={(event) => setImgUrl(event.target.value)}
          ></TextField>
          <img height="30%" width="30%" src={imgUrl}></img>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={description}
            label="Write a caption...."
            onChange={(event) => setDescription(event.target.value)}
          ></TextField>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <TextField
            multiline
            fullWidth
            value={location}
            label="Add location"
            onChange={(event) => setLocation(event.target.value)}
          ></TextField>
        </ListItem>
        <ListItem>
          <Stack direction="row" spacing={1}>
            <Chip label="Herut" />
            <Chip color="primary" label="Tzrifin" />
            <Chip label="Tel Mond" />
            <Chip label="Tel Aviv" />
          </Stack>
        </ListItem>

        <Divider variant="middle" component="li" />
        <ListItem>
          <Button onClick={add}>{"Share"}</Button>
        </ListItem>
      </List>
    </>
  );
}

export default AddPost;
