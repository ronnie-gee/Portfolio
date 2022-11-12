//Created by Ronnie Alfonso

import React, { useEffect, useState } from "react";
import { useRef } from "react";
const FORWARD = "forward";
const BACKWARD = "backward";

const Typing = ({ wordList, speed, backSpeed }) => {
  const [typed, setTyped] = useState("");
  const charPosition = useRef(0);
  const wordPointer = useRef(0);
  const direction = useRef(FORWARD);

  console.log(
    wordPointer.current,
    charPosition.current,
    wordList[wordPointer.current]
  );

  const currentWord = wordList[wordPointer.current];
  const currentWordLength = currentWord.length;

  const getCurrent = () => {
    if (wordPointer.current < wordList.length) {
      if (direction.current === FORWARD) {
        if (
          charPosition.current >= 0 &&
          charPosition.current < currentWordLength
        ) {
          setTyped(currentWord.substring(0, charPosition.current + 1));
          charPosition.current++;
        } else if (charPosition.current === currentWordLength) {
          direction.current = BACKWARD;
        }
      } else if (direction.current === BACKWARD) {
        if (charPosition.current >= 0) {
          setTyped(currentWord.substring(0, charPosition.current));
          charPosition.current--;
        } else {
          console.log("ELSE");
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
    const interval = setInterval(() => getCurrent(), 150);

    return () => clearInterval(interval);
  }, [typed]);

  return <div className="typing">{typed}</div>;
};

export default Typing;
