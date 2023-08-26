"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: implement sign in logic
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Register
      </Typography>
      <Box
        component="form"
        sx={{
          width: "80%",
          maxWidth: 400,
          padding: 4,
          borderRadius: 2,
          boxShadow: 1,
          backgroundColor: "#ffffff",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        {"Already have an account?"}
        <Link href="login">
          <Button variant="text" color="primary">
            Sign In
          </Button>
        </Link>
      </Typography>
    </Box>
  );
};
