import { Box, Typography } from "@mui/material";
import React from "react";
import Animatedletters from "./Animatedletters";

const Home = () => {
  return (
    <Box
      component="section"
      id="home"
      px={8}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
  );
};

export default Home;
