import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

export const PieChartX = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={350}
        height={300}
      />
      <Typography sx={{ textAlign: "center" }}>Total Improvement</Typography>
    </Box>
  );
};
