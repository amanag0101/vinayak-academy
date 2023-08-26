import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Paper,
  Divider,
  TextField,
  Grid,
  Fab,
  Typography,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return (
    <Box sx={{}}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} sx={{ width: "100%" }}>
        <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0" }}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="Profile"
                  src="https://material-ui.com/static/images/avatar/1.jpg" //demo image
                />
              </ListItemIcon>
              <ListItemText primary="Aman Gandu" />
            </ListItemButton>
            <Divider />
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Divider />
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Vishal" />
                <ListItemText secondary="online"></ListItemText>
              </ListItemButton>
            </List>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List sx={{ height: "60vh", overflowY: "auto" }}>
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{textAlign:"right"}}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{textAlign:"right"}}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{textAlign:"right"}}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{textAlign:"right"}}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{textAlign:"right"}}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
            <ListItemButton key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{textAlign:"right"}}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItemButton>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Enter Your Doubt  "
                fullWidth
              />
            </Grid>
            <Grid xs={1} sx={{textAlign:"right"}}>
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
