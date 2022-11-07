import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      px={8}
      pt={12}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      About
    </Box>
  );
};

export default About;
