import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  TextField,
  Grid,
  Fab,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";

export default function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { content: "How is the study going", time: "9:00 pm", align: "left" },
  ]);

  const handleChange = (e: any) => {
    setNewMessage(e.target.value);
    if (e.key === "Enter" && newMessage.trim() !== "") {
      handleSendClick();
    }
  };
  const handleSendClick = () => {
    if (newMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newChatMessage = {
        content: newMessage,
        time: currentTime,
        align: "right",
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage("");
    }
  };
  return (
    <Box sx={{ minWidth: "70%" }}>
      <Grid >
        <List sx={{ minHeight: "60vh", overflowY: "auto" }}>
          {chatMessages.map((message, index) => (
            <ListItemButton key={index}>
              <Grid container item>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: message.align }}
                    primary={message.content}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: message.align }}
                    secondary={message.time}
                  />
                </Grid>
              </Grid>
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Grid container sx={{ padding: "20px" }} item>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Enter Your Doubt"
              fullWidth
              value={newMessage}
              onChange={handleChange}
              onKeyDown={handleChange}
            />
          </Grid>
          <Grid item xs={1} sx={{ textAlign: "right" }}>
            <Fab color="primary" aria-label="add" onClick={handleSendClick}>
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
