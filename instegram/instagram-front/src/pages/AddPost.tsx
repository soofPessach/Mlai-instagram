import {
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/UserContext";
import { addPost } from "../requests/postRequests";

function AddPost() {
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const { user } = useAuth();
  const [urlErrorMsg, setUrlErrorMsg] = useState("");
  const [addErrorMsg, setAddErrorMsg] = useState("");


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
      }
      catch (e: any) {
        setAddErrorMsg(e)
      }
    } else {
      setUrlErrorMsg("please put a valid url image");
    }
  };

  return (
    <>
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
