import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import AnimatedLetters from "./components/Animatedletters";
import Animatedletters from "./components/Animatedletters";
import Home from "./components/Home";

export default function Container() {
  return (
    <div>
      <main className={styles.main}></main>
      <Home></Home>
      <footer className={styles.footer}>
        <span className={styles.logo}></span>
      </footer>
    </div>
  );
}
