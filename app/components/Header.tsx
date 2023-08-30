"use client";

import { Button, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  UserAuthentication,
  logout,
} from "../features/authentication/AuthenticationSlice";

export const Header = () => {
  const router = useRouter();
  const userAuthentication = useSelector((state: UserAuthentication) => {
    return state.authentication;
  });
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: "8px" }}>
      <Box
        sx={{ cursor: "pointer", flexBasis: "30%" }}
        onClick={() => router.push("/")}
      >
        <h2>Vinayak Academy</h2>
      </Box>

      <Box sx={{ marginLeft: "auto" }}>
        {!userAuthentication.isAuthenticated ? (
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
          <>
            <Button
              variant="contained"
              sx={{ marginRight: "4px" }}
              onClick={logoutUser}
            >
              Logout
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
