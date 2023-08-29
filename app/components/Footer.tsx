import { Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container sx={{ padding: "8px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Vinayak Academy
      </Typography>
      <Typography variant="body2" align="center">
        123 Main Street, Anytown USA 12345
      </Typography>
      <Typography variant="body2" align="center">
        Phone: (123) 456-7890
      </Typography>
      <Typography variant="body2" align="center">
        Email: info@vinayakacademy.com
      </Typography>
    </Container>
  );
};
