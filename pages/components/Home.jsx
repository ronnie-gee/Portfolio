import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import Animatedletters from "./Animatedletters";
import Typing from "./Typing";
import { LinkedIn, GitHub, YouTube } from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      component="section"
      id="home"
      px="3rem"
      pt={12}
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
        {/* <Typography
          sx={{
            fontSize: 50,
          }}
        >
          It's me,
        </Typography> */}
        <Animatedletters
          word="Ronnie Alfonso"
          size={{ xs: 30, sm: 80, md: 50, lg: 80 }}
          weight={600}
          color="background.contrastText"
        ></Animatedletters>
        <Typography
          sx={{
            fontSize: 50,
            color: "background.contrastText",
          }}
        >
          I'm{" "}
          <Typing
            wordList={["Web Developer", "Engineer", "Cute Person"]}
            speed={100}
            styleObject={{
              color: "primary.main",
              fontSize: 50,
              fontWeight: 600,
            }}
          ></Typing>
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Typography>

        <Box
          component="div"
          my={2}
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/ronnie-gee-alfonso/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedIn />
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/ronnie-gee"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHub />
          </Button>
          <Button
            variant="outlined"
            target="_blank"
            href="https://www.youtube.com/channel/UCECBSLSFHXIb7TMS_55-TnA"
            rel="noreferrer noopener"
          >
            <YouTube />
          </Button>
          <Button variant="contained" href="#contact">
            Say Hi👋
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <img
          className="my-picture"
          width="100%"
          src="/landingPage.png"
          alt="My picture"
        />
      </Box>
    </Box>
  );
};

export default Home;
