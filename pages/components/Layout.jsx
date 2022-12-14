import React, { useEffect, useState } from "react";
import Head from "next/head";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Box, Typography } from "@mui/material";
import NavBar from "./NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      main: "#000",
      light: "#303030",
      contrastText: "#FFF",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      main: "#FFF",
      light: "#FAFAFA",
      contrastText: "#303030",
    },
    primary: {
      main: "#254A7B",
      light: "rgb(80,10,149)",
      dark: "rgb(25,51,86)",
    },
    accent: {
      main: "#11A2E1",
      light: "rgb(64,180,231)",
      dark: "rgb(11,113,157)",
    },
  },
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Layout = ({ children }) => {
  /**
   * Get system theme if no theme found in local storage. Use toggleTheme to switch theme
   */
  const localStorageKey = "ronniePortfolioTheme";
  const getTheme = () => {
    if (localStorage.getItem(localStorageKey) === undefined) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        document.documentElement.setAttribute("theme-selector", "dark");
        console.log(localStorage.getItem(localStorageKey));
        return "dark";
      } else {
        document.documentElement.setAttribute("theme-selector", "light");
        localStorage.setItem(localStorageKey, "light");
        return "light";
      }
    } else {
      let themeFromLocalStorage = localStorage.getItem(localStorageKey);
      document.documentElement.setAttribute(
        "theme-selector",
        themeFromLocalStorage
      );
      return themeFromLocalStorage;
    }
  };

  const toggleTheme = () => {
    if (localStorage.getItem(localStorageKey) === "dark") {
      document.documentElement.setAttribute("theme-selector", "light");
      localStorage.setItem(localStorageKey, "light");
    } else {
      document.documentElement.setAttribute("theme-selector", "dark");
      localStorage.setItem(localStorageKey, "dark");
    }
  };

  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(getTheme());
    return () => {};
  }); //no second parameter means it will run every re render

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <NavBar />
      {/* <Box component='div' sx={{minHeight: 64, backgroundColor:'transparent'}}></Box> */}
      <Head>
        <title>Ronnie Alfonso</title>
        <meta name="Ronnie Alfonso Portfolio" content="My portfolio" />
        <link rel="icon" href="/rLogo.png" />
      </Head>

      {children}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 20,
          right: 30,
          color: "primary.contrastText",
          backgroundColor: "secondary.main",
        }}
      >
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Switch to {theme === "dark" ? "Light" : "Dark"} mode
        </Typography>
        <MaterialUISwitch
          checked={theme === "dark" ? true : false}
          onChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            toggleTheme();
          }}
        >
          Switch
        </MaterialUISwitch>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
