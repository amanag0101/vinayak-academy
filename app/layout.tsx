import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Box sx={{ flex: 0.1 }}>
            <Header />
          </Box>
          <Box sx={{ display: "flex", flex: 0.8 }}>
            <Box sx={{ position: "sticky", top: 0 }}>
              <Sidebar />
            </Box>
            <Box sx={{ flex: 1 }}>{children}</Box>
          </Box>
          <Box sx={{ flex: 0.1 }}>
            <Footer />
          </Box>
        </Box>
      </body>
    </html>
  );
}
