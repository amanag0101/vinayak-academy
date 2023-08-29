"use client";

import { Box, Container } from "@mui/material";
import { LineChartX } from "../chart/LineChartX";
import { PieChartX } from "../chart/PieChartX";
import { BarChartX } from "../chart/BarChartX";

export const StudentAnalysis = () => {
  return (
    <Box sx={{ width: "100%", borderRight: "1px solid #ccc" }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* Col-1 */}
        <Box sx={{ borderRight: "1px solid #ccc" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ margin: "auto" }}>
              <LineChartX />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderTop: "1px solid #ccc",
              }}
            >
              <Box>
                <PieChartX />
              </Box>
              <Box sx={{ borderLeft: "1px solid #ccc" }}>
                <Box>
                  <BarChartX />
                </Box>
                <Box sx={{ borderTop: "1px solid #ccc" }}>
                  <LineChartX />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Col-2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <BarChartX />
          </Box>
          <Box sx={{ borderTop: "1px solid #ccc" }}>
            <LineChartX />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
