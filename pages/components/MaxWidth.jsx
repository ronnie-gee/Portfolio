import { Box } from "@mui/material";
import React from "react";

const MaxWidth = ({ children }) => {
  return <Box sx={{ maxWidth: 1500, margin: "0 auto" }}>{children}</Box>;
};

export default MaxWidth;
