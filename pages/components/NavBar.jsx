import { Box } from "@mui/system";
import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";

const navItems = ["Home", "About", "Projects", "Contact"];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar component="nav" sx={{ backgroundColor: "background.main" }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            paddingLeft: 0,
            textAlign: "left",
          }}
        >
          <Link href="#home">
            <img width="50" src="/rLogo.png" alt="My Happy SVG" />
          </Link>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "text.primary",
            display: { lg: "none", sm: "none" },
          }}
        >
          I'm a Responsive NavBar
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: "text.primary" }}>
            <a href="#home">Home</a>
          </Button>
          <Button sx={{ color: "text.primary" }}>
            <a href="#about">About</a>
          </Button>
          <Button sx={{ color: "text.primary" }}>
            <a href="#blogs">blogs</a>
          </Button>
          <Button sx={{ color: "text.primary" }}>
            <a href="#projects">Projects</a>
          </Button>
          <Button sx={{ color: "text.primary" }}>
            <a href="#contact">Contact</a>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
