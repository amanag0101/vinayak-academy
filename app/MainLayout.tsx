"use client";

import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { UserAuthentication } from "./features/authentication/AuthenticationSlice";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const userAuthentication = useSelector((state: UserAuthentication) => {
    return state.authentication;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          border: "1px solid #ccc",
          flex: 0.1,
        }}
      >
        <Header />
      </Box>
      <Box sx={{ display: "flex", flex: 0.8 }}>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderTop: 0,
            borderBottom: 0,
            flex: userAuthentication.isAuthenticated ? 0.2 : 0,
            display: userAuthentication.isAuthenticated ? "block" : "none",
          }}
        >
          <Sidebar />
        </Box>
        <Box sx={{ flex: userAuthentication.isAuthenticated ? 0.8 : 1 }}>
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          flex: 0.1,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};
