import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  TextField,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { selectDoubt } from "@/app/features/page/doubtsSlice";
import { CreateDoubt } from "./CreateDoubt";

export const DoubtSidebar = () => {
  const dispatch = useDispatch();

  const handleDoubtClick = (doubt: any) => {
    dispatch(selectDoubt(doubt)); // Dispatch the action with the selected doubt
  };
  const doubts = [{ title: " First Doubt", guide: "Vishal" }];
  return (
    <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0" }}>
      <List>
        <Divider />
        <Grid item xs={12} style={{ padding: "10px" }}>
          <TextField
            id="outlined-basic-email"
            label="Search"
            variant="outlined"
          />
        </Grid>
        <Divider />
        <List>
          <ListItemButton onClick={() => dispatch(selectDoubt(null))}>
            Create Doubt
          </ListItemButton>
          <Divider />
          {doubts.map((doubt) => (
            <ListItemButton onClick={() => handleDoubtClick(doubt)}>
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary={doubt.title + "/" + doubt.guide} />
              <ListItemText
                secondary="online"
                sx={{ textAlign: "right" }}
              ></ListItemText>
            </ListItemButton>
          ))}
        </List>
      </List>
    </Grid>
  );
};
