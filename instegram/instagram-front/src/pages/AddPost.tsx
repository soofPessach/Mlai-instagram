import { Button, Chip, Divider, Input, List, ListItem, ListItemAvatar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Post from "../components/Post/Post";
import IPost from "../interfaces/IPost";
import IUser from "../interfaces/IUser";

function AddPost() {
    const [imgUrl, setImgUrl] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')

    return (
        <>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem>
                    <TextField fullWidth variant="standard" required multiline value={imgUrl} label="image url" onChange={(event) => setImgUrl(event.target.value)} ></TextField>
                    <img height='50%' src={imgUrl}></img>
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                    <TextField fullWidth multiline rows={4}
                        value={description} label="Write a caption...." onChange={(event) => setDescription(event.target.value)} ></TextField>
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                    <TextField multiline fullWidth value={location} label="Add location" onChange={(event) => setLocation(event.target.value)} ></TextField>
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
                    <Button>{'Share'}</Button>
                </ListItem>

            </List>
        </>
    );
}

export default AddPost;
