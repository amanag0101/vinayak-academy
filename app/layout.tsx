import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Box sx={{ height: "100vh" }}>
          <Box sx={{ height: "10vh" }}>
            <Header />
          </Box>

          <Box sx={{ height: "80vh", display: "flex" }}>{children}</Box>

          <Box sx={{ height: "10vh" }}>
            <Footer />
          </Box>
        </Box>
      </body>
    </html>
  );
}
