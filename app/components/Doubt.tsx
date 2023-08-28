"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import DoubtSidebar from "./doubt/DoubtSidebar";
import CreateDoubt from "./doubt/CreateDoubt";
import Chat from "./doubt/Chat";

function Doubt() {
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
        <CreateDoubt/>
      </Grid>

    </Box>
  );
}

export default Doubt;