"use client";

import { Box, Container } from "@mui/material";
import { LineChartX } from "../chart/LineChartX";
import { PieChartX } from "../chart/PieChartX";
import { BarChartX } from "../chart/BarChartX";

export const StudentAnalysis = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex ",
      }}
    >
      {/* Col-1 */}
      <Box sx={{ flex: 0.7 }}>
        <Box sx={{ boxShadow: 8 }}>
          <LineChartX />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", boxShadow: 8 }}>
          <Box>
            <PieChartX />
          </Box>
          <Box>
            <BarChartX />
          </Box>
        </Box>
      </Box>

      {/* Col-2 */}
      <Box sx={{ height: "100%", flex: 0.3, boxShadow: 8 }}>
        <Box>
          <PieChartX />
        </Box>
        <Box>
          <LineChartX />
        </Box>
      </Box>
    </Box>
  );
};
