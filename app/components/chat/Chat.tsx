import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  TextField,
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
    <Box>
      <List>
        {chatMessages.map((message, index) => (
          <ListItemButton key={index}>
            <Box>
              <Box>
                <ListItemText
                  sx={{ textAlign: message.align }}
                  primary={message.content}
                />
              </Box>
              <Box>
                <ListItemText
                  sx={{ textAlign: message.align }}
                  secondary={message.time}
                />
              </Box>
            </Box>
          </ListItemButton>
        ))}
      </List>

      <Divider />

      <Box sx={{ display: "flex", alignItems: "center", padding: "8px" }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            label="Enter Your Doubt"
            fullWidth
            value={newMessage}
            onChange={handleChange}
            onKeyDown={handleChange}
          />
        </Box>

        <Box sx={{ padding: "4px" }}>
          <Fab color="primary" aria-label="add" onClick={handleSendClick}>
            <SendIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}
