import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import AnimatedLetters from "./components/Animatedletters";
import Animatedletters from "./components/Animatedletters";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Container() {
  return (
    <div>
      <Box
        className="container"
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Home />
        <About />
        <Contact />
      </Box>
      <footer className={styles.footer}>
        <span className={styles.logo}></span>
      </footer>
    </div>
  );
}
