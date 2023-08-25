"use client";

import { Button, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

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
        </Box>
      </Box>
    </Box>
  );
};
