import { Box, Container } from "@mui/material";
import { BarChart } from "../charts/BarChart";
import { LineChart } from "../charts/LineChart";
import { PieChart } from "../charts/PieChart";

export const StudentDashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ flex: 0.7 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ height: "50vh", margin: "auto" }}>
              <LineChart />
            </Box>

            <Container
              sx={{
                display: "flex",
                height: "50vh",
                justifyContent: "center",
              }}
            >
              <Box>
                <PieChart />
              </Box>
              <Box sx={{ height: "25vh" }}>
                <BarChart />
                <LineChart />
              </Box>
            </Container>
          </Box>
        </Container>

        <Container
          sx={{
            flex: 0.3,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <BarChart />
          </Box>
          <Box>
            <LineChart />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
