//Created by Ronnie Alfonso

import { Box, styled } from "@mui/material";
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

const Typing = ({ wordList, speed = 200, styleObject }) => {
  const [typed, setTyped] = useState("");
  const [isVowel, setIsVowel] = useState("");
  const charPosition = useRef(0);
  const wordPointer = useRef(0);
  const vowels = "AEIOU";

  const direction = useRef(FORWARD);

  const getCurrent = () => {
    const currentWord = wordList[wordPointer.current];
    const currentWordLength = currentWord?.length;

    if (wordPointer.current < wordList.length) {
      setTypedText(currentWord, currentWordLength);
    } else {
      wordPointer.current = 0;
      charPosition.current = 0;
    }
  };

  const setTypedText = (currentWord, currentWordLength) => {
    if (direction.current === FORWARD) {
      setIsVowel(vowels.search(currentWord[0].toUpperCase()) === -1 ? "" : "n");
      if (
        charPosition.current >= 0 &&
        charPosition.current < currentWordLength
      ) {
        setTyped(`${currentWord.substring(0, charPosition.current + 1)}`);
        charPosition.current++;
      } else if (charPosition.current === currentWordLength) {
        charPosition.current++;
      } else if (charPosition.current > currentWordLength) {
        charPosition.current--;
        direction.current = BACKWARD;
      }
    } else if (direction.current === BACKWARD) {
      if (charPosition.current >= 0) {
        setTyped(`${currentWord.substring(0, charPosition.current)}`);
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
  };

  useEffect(() => {
    const interval = setInterval(() => getCurrent(), speed);

    return () => clearInterval(interval);
  }, [typed]);

  return (
    <>
      <Box component="span">a{isVowel} </Box>
      <Box sx={styleObject} component="span">
        {typed}
        <Cursor component="span">|</Cursor>
      </Box>
    </>
  );
};

export default Typing;
