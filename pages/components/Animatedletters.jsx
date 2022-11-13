import { Box, styled } from "@mui/material";
import React from "react";

const RubberBox = styled(Box)(({ hoverColor }) => ({
  userSelect: "none",
  display: "inline-block",
  "&:hover": {
    color: hoverColor,
    animation: "rubberBand 1s infinite ease",
  },
  "@keyframes rubberBand": {
    from: {
      transform: "scale3d(1, 1, 1)",
    },

    "30%": {
      transform: "scale3d(1.25, 0.75, 1)",
    },

    "40%": {
      transform: "scale3d(0.75, 1.25, 1)",
    },

    "50%": {
      transform: "scale3d(1.15, 0.85, 1)",
    },

    "65%": {
      transform: "scale3d(.95, 1.05, 1)",
    },

    "75%": {
      transform: "scale3d(1.05, .95, 1)",
    },

    to: {
      transform: "scale3d(1, 1, 1)",
    },
  },
}));

const Animatedletters = ({
  word = "Please add a word prop!",
  size,
  weight,
  color,
  hoverColor = "rgb(64,180,231)",
}) => {
  const wordArray = word.split("");

  return (
    <Box>
      {wordArray.map((char, index) => {
        if (char === " ") {
          char = "\u00A0";
        }
        return (
          <RubberBox
            sx={{ fontSize: size, fontWeight: weight, color: color }}
            key={index}
            component="div"
            hoverColor={hoverColor}
          >
            {char}
          </RubberBox>
        );
      })}
    </Box>
  );
};

export default Animatedletters;
