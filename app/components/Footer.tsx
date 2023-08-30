import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ padding: "8px", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Vinayak Academy
      </Typography>
      <Typography variant="body2">
        123 Main Street, Anytown USA 12345
      </Typography>
      <Typography variant="body2">Phone: (123) 456-7890</Typography>
      <Typography variant="body2" gutterBottom>
        Email: info@vinayakacademy.com
      </Typography>
    </Box>
  );
};
