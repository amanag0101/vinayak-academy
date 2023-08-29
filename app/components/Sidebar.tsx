import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  const handlePageChange = (page: string) => {
    router.push(page);
  };

  return (
    <Box sx={{ padding: "8px" }}>
      <IconButton onClick={() => setShowNavbar(!showNavbar)}>
        <MenuIcon />
      </IconButton>

      {showNavbar && (
        <List disablePadding>
          <ListItemButton onClick={() => handlePageChange("/student")}>
            <ListItemIcon>
              <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => handlePageChange("/student/analysis")}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Analysis" />
          </ListItemButton>

          <ListItemButton
            onClick={() => handlePageChange("/student/doubt-support")}
          >
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Doubt Support" />
          </ListItemButton>

          <ListItemButton onClick={() => handlePageChange("/student/ebooks")}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Ebooks" />
          </ListItemButton>

          {/* <ListItemButton>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="My Classes" />
          </ListItemButton>

          <ListItemButton className="rounded-sm">
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>

          <ListItemButton className="rounded-sm">
            <ListItemIcon>
              <SettingsSuggestIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton> */}
        </List>
      )}
    </Box>
  );
}
