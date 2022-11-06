import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import AnimatedLetters from "./components/Animatedletters";
import Animatedletters from "./components/Animatedletters";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Box
          id="homepage"
          mx={8}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography>Hi, I'm</Typography>
            <Animatedletters
              word="Ronnie Alfonso"
              size={120}
              weight={600}
              color={"grey.900"}
            ></Animatedletters>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img width="100%" src="/landingPage.png" alt="My Happy SVG" />
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}></span>
      </footer>
    </div>
  );
}
