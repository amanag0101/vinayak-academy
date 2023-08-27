"use client";

import { Button, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Authentication } from "../features/authentication/AuthenticationSlice";
import { useEffect } from "react";

export const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: Authentication) => state.isAuthenticated
  );

  useEffect(() => {
    console.log(`isLoggedIn: ${isLoggedIn}`);
  }, [dispatch, isLoggedIn]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", padding: "8px" }}>
        <Box
          sx={{ cursor: "pointer", flexBasis: "30%" }}
          onClick={() => router.push("/")}
        >
          <h2>Vinayak Academy</h2>
        </Box>

        <Box sx={{ flexBasis: "70%", textAlign: "right" }}>
          {!isLoggedIn ? (
            <>
              <Link href={"login"}>
                <Button variant="contained" sx={{ marginRight: "4px" }}>
                  Login
                </Button>
              </Link>
              <Link href={"register"}>
                <Button variant="contained" sx={{ marginRight: "4px" }}>
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <>Student</>
          )}
        </Box>
      </Box>
    </Box>
  );
};
