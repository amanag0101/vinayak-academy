"use client";

import { Button } from "@mui/material";
import styles from "./styles/header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.branding} onClick={() => router.push("/")}>
          <h2>Vinayak Academy</h2>
        </div>

        <div className={styles.nav}>
          <Link href={"login"}>
            <Button variant="contained">Login</Button>
          </Link>
          <Link href={"register"}>
            <Button variant="contained">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
