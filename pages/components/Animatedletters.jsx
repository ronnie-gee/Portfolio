import { Typography, Box, styled } from '@mui/material';
import React from 'react'

const RubberBox = styled(Box)(({theme})=>({
  userSelect:'none',
  display: "inline-block",
  '&:hover':{
    color: 'red',
    animation: "rubberBand 1s infinite ease"
  },
  "@keyframes rubberBand": {
    from: {
      transform: "scale3d(1, 1, 1)"
    },
  
    "30%": {
      transform: "scale3d(1.25, 0.75, 1)"
    },
  
    "40%": {
      transform: "scale3d(0.75, 1.25, 1)"
    },
  
    "50%": {
      transform: "scale3d(1.15, 0.85, 1)"
    },
  
    "65%": {
      transform: "scale3d(.95, 1.05, 1)"
    },
  
    "75%": {
      transform: "scale3d(1.05, .95, 1)"
    },
  
    to: {
      transform: "scale3d(1, 1, 1)"
    }
  },
}));


const Animatedletters = ({ word = "Please add a word prop!", variant}) => {

  const wordArray = word.split('');

  return (
    <Typography variant={variant}>
      {wordArray.map((char)=>{
        if(char===' '){
          char='\u00A0';
        }
        return (
          <RubberBox component='div'>{char}</RubberBox>
        )
      })}
    </Typography>
  )
}

export default Animatedletters