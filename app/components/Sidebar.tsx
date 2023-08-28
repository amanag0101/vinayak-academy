import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
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
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handlePageChange = (page: string) => {
    router.push(page);
  };

  return (
    <Box sx={{ borderRightWidth: "2px" }}>
      <Box sx={{ height: "100%", padding: "4px" }}>
        <Box sx={{ fontWeight: "700" }}>
          <List disablePadding>
            <ListItemButton onClick={() => handlePageChange("/student")}>
              <ListItemIcon>
                <SpaceDashboardIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton
              onClick={() => handlePageChange("/student/analysis")}
            >
              <ListItemIcon>
                <BarChartIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
            </ListItemButton>

            <ListItemButton
              onClick={() => handlePageChange("/student/doubt-support")}
            >
              <ListItemIcon>
                <ChatIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              <ListItemText primary="Doubt Support" />
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
