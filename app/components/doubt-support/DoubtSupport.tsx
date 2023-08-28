"use client";

import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import { CreateDoubt } from "./CreateDoubt";
import { DoubtSidebar } from "./DoubtSidebar";

export const DoubtSupport = () => {
  return (
    <Box sx={{}}>
      <Grid container item>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Doubts
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper}>
        <DoubtSidebar />
        <CreateDoubt />
      </Grid>
    </Box>
  );
};
