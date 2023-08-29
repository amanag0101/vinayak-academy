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
      {/* Header */}
      <Box
        sx={{
          border: "1px solid #ccc",
        }}
      >
        <Header />
      </Box>

      {/* Sidebar and Main Children */}
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderTop: 0,
            borderBottom: 0,
            display: userAuthentication.isAuthenticated ? "block" : "none",
          }}
        >
          <Sidebar />
        </Box>

        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          border: "1px solid #ccc",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};
