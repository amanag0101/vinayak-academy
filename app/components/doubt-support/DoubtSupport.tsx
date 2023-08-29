"use client";

import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import { CreateDoubt } from "./CreateDoubt";
import { DoubtSidebar } from "./DoubtSidebar";
import { useSelector } from "react-redux";
import Chat from "../chat/Chat";
import { Doubt } from "@/app/features/page/doubtsSlice";

export const DoubtSupport = () => {
  const selectedDoubt = useSelector(
    (state: Doubt) => state.doubts.selectedDoubt
  );
  return (
    <Box>
      <Grid container item>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Doubts
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        component={Paper}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <DoubtSidebar />
        {selectedDoubt ? <Chat /> : <CreateDoubt />}
      </Grid>
    </Box>
  );
};
