"use client";

import { Box } from "@mui/material";
import { DoubtSidebar } from "./DoubtSidebar";
import { useSelector } from "react-redux";
import { Doubt } from "@/app/features/page/doubtsSlice";
import { CreateDoubt } from "./CreateDoubt";
import Chat from "../../chat/Chat";

export const DoubtSupport = () => {
  const selectedDoubt = useSelector(
    (state: Doubt) => state.doubts.selectedDoubt
  );

  return (
    <Box sx={{ height: "100%", width: "90%" }}>
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Box sx={{ border: "1px solid #ccc" }}>
          <DoubtSidebar />
        </Box>
        <Box sx={{ height: "auto", width: "100%", border: "1px solid #ccc" }}>
          {selectedDoubt ? <Chat /> : <CreateDoubt />}
        </Box>
      </Box>
    </Box>
  );
};
