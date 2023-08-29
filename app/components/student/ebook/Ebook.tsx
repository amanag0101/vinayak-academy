import { Box, Typography } from "@mui/material";
import { EbookNavbar } from "./NavBar";

export const Ebook = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box>
          <EbookNavbar />
        </Box>
        <Box sx={{ flex: 1 }}>
          <object
            data="http://africau.edu/images/default/sample.pdf"
            type="application/pdf"
            height="100%"
            width="100%"
          >
            <Typography variant="h3">Failed to load PDF!</Typography>
          </object>
        </Box>
      </Box>
    </Box>
  );
};
