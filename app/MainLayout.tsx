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
          boxShadow: 1
        }}
      >
        <Header />
      </Box>

      {/* Sidebar and Main Children */}
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box
          sx={{
            boxShadow: 2,
            borderTop: 0,
            borderBottom: 0,
            display: userAuthentication.isAuthenticated ? "block" : "none",
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          boxShadow: 4
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};
