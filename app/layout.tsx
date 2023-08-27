"use client";

import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <Box
            sx={{
              height: "100vh",
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
                  position: "sticky",
                  top: 0,
                  flex: 0.2,
                }}
              >
                <Sidebar />
              </Box>
              <Box sx={{ flex: 0.8 }}>{children}</Box>
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
        </Provider>
      </body>
    </html>
  );
}
