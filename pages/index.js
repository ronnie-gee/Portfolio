import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MaxWidth from "./components/MaxWidth";

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
        <MaxWidth>
          <Home />
        </MaxWidth>

        <MaxWidth>
          <About />
        </MaxWidth>

        <MaxWidth>
          <Contact />
        </MaxWidth>
      </Box>
      <footer className={styles.footer}>
        <span className={styles.logo}></span>
      </footer>
    </div>
  );
}
