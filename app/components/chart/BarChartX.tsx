import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

export const BarChartX = () => {
  return (
    <Box sx={{ backgroundColor: "" }}>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={450}
        height={300}
      />
      <Typography sx={{ textAlign: "center" }}>Weekly Spent Hours</Typography>
    </Box>
  );
};
