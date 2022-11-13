//Created by Ronnie Alfonso

import { Box, styled, useStepContext } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
const FORWARD = "forward";
const BACKWARD = "backward";

const Cursor = styled(Box)(({ theme }) => ({
  animation: "blink 1s infinite linear",
  "@keyframes blink": {
    from: {
      opacity: 1,
    },

    "49%": {
      opacity: 1,
    },

    "50%": {
      opacity: 0,
    },

    to: {
      opacity: 0,
    },
  },
}));

const Typing = ({ wordList, speed = 200 }) => {
  const [typed, setTyped] = useState("");
  const charPosition = useRef(0);
  const wordPointer = useRef(0);

  const direction = useRef(FORWARD);

  const getCurrent = () => {
    const currentWord = wordList[wordPointer.current];
    const currentWordLength = currentWord?.length;

    if (wordPointer.current < wordList.length) {
      if (direction.current === FORWARD) {
        if (
          charPosition.current >= 0 &&
          charPosition.current < currentWordLength
        ) {
          setTyped(currentWord.substring(0, charPosition.current + 1));
          charPosition.current++;
        } else if (charPosition.current === currentWordLength) {
          charPosition.current++;
        } else if (charPosition.current > currentWordLength) {
          charPosition.current--;
          direction.current = BACKWARD;
        }
      } else if (direction.current === BACKWARD) {
        if (charPosition.current >= 0) {
          setTyped(currentWord.substring(0, charPosition.current));
          charPosition.current--;
        } else if (charPosition.current === -1) {
          setTyped("");

          charPosition.current--;
        } else {
          wordPointer.current++;
          charPosition.current = 0;
          direction.current = FORWARD;
        }
      }
    } else {
      wordPointer.current = 0;
      charPosition.current = 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getCurrent(), speed);

    return () => clearInterval(interval);
  }, [typed]);

  return (
    <Box component="span" className="typing">
      {typed}
      <Cursor component="span">|</Cursor>
    </Box>
  );
};

export default Typing;
