"use client";

import { Box } from "@mui/material";
import { DoubtSidebar } from "./DoubtSidebar";
import { useSelector } from "react-redux";
import { CreateDoubt } from "./CreateDoubt";
import Chat from "../../chat/Chat";
import { Doubt } from "@/app/features/page/doubtsSlice";

export const DoubtSupport = () => {
  const selectedDoubt = useSelector(
    (state: Doubt) => state.doubts.selectedDoubt
  );

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <Box sx={{ borderRight: "1px solid #ccc" }}>
          <DoubtSidebar />
        </Box>
        <Box sx={{ flex: 1 }}>{selectedDoubt ? <Chat /> : <CreateDoubt />}</Box>
      </Box>
    </Box>
  );
};
