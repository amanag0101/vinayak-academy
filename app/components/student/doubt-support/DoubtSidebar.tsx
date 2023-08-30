import React, { useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { selectDoubt, Doubt } from "@/app/features/page/doubtsSlice";
import { v4 as uuidv4 } from "uuid";

export const DoubtSidebar = () => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleDoubtClick = (doubt: Doubt) => {
    dispatch(selectDoubt(doubt));
  };

  const doubts = [
    { title: " First Doubt", guide: "Vishal" },
    { title: " Second Doubt", guide: "Rohan" },
  ];

  return (
    <Box sx={{ padding: "8px" }}>
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={() => setShowSidebar(!showSidebar)}>
          <MenuIcon />
        </IconButton>
        {showSidebar && <TextField label="Search" fullWidth />}
      </Box>

      {showSidebar && (
        <Box>
          {doubts.map((doubt: any) => (
            <ListItemButton
              sx={{ marginTop: "12px", boxShadow: 1 }}
              key={uuidv4()}
              onClick={() => handleDoubtClick(doubt)}
            >
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary={doubt.title + "/" + doubt.guide} />
              <ListItemText
                secondary="active"
                sx={{ textAlign: "right", marginTop: "24px", padding: "4px" }}
              ></ListItemText>
            </ListItemButton>
          ))}

          <Button
            sx={{
              width: "100%",
              marginTop: "8px",
            }}
            variant="contained"
            onClick={() => dispatch(selectDoubt(null))}
          >
            Ask Doubt
          </Button>
        </Box>
      )}
    </Box>
  );
};
