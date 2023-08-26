import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Box sx={{ borderRightWidth: "2px" }}>
      <Box sx={{ height: "100%", padding: "4px" }}>
        <Box sx={{ fontWeight: "700" }}>
          <List disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SpaceDashboardIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ color: "blue" }}>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="My Classes" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ color: "blue" }}>
                <MenuBookIcon />
              </ListItemIcon>

              <ListItemText primary="Ebook" />
            </ListItemButton>
            <ListItemButton className="rounded-sm">
              <ListItemIcon sx={{ color: "blue" }}>
                <AccountBalanceWalletIcon />
              </ListItemIcon>

              <ListItemText primary="Transactions" />
            </ListItemButton>
            <ListItemButton className="rounded-sm">
              <ListItemIcon sx={{ color: "blue" }}>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
