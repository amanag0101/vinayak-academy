import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { selectDoubt, Doubt } from "@/app/features/page/doubtsSlice";
import { v4 as uuidv4 } from "uuid";

export const DoubtSidebar = () => {
  const dispatch = useDispatch();

  const handleDoubtClick = (doubt: Doubt) => {
    dispatch(selectDoubt(doubt));
  };
  const doubts = [
    { title: " First Doubt", guide: "Vishal" },
    { title: " First Doubt", guide: "Vishal" },
  ];
  return (
    <Box sx={{ padding: "8px"}}>
      <TextField label="Search" fullWidth />

      {doubts.map((doubt: any) => (
        <ListItemButton
          sx={{ marginTop: "8px" }}
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
            sx={{ textAlign: "right" }}
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
  );
};
