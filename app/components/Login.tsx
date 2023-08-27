"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "../features/authentication/AuthenticationSlice";
import { useRouter } from "next/navigation";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

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

    dispatch(
      login({
        userId: email,
      })
    );

    router.push("/student");
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
        Sign In
      </Typography>
      <Box
        component="form"
        sx={{
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
          Sign In
        </Button>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        {"Don't have an account?"}
        <Link href={"register"}>
          <Button variant="text" color="primary" >
            Sign Up
          </Button>
        </Link>
      </Typography>
    </Box>
  );
};
