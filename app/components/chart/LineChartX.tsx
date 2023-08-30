import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export const LineChartX = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={450}
        height={300}
      />
      <Typography sx={{ textAlign: "center" }}>Monthly Grade Report</Typography>
    </Box>
  );
};
