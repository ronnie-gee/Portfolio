import { Box } from '@mui/system'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import styles from '../../styles/NavBar.module.css';
import Link from 'next/link'

const navItems = ['Home', 'About', 'Projects','Contact'];


const NavBar = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <AppBar component="nav" sx = {{backgroundColor: "background.main"}}>
        <Toolbar>
        <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              paddingLeft: 0,
              textAlign: 'left'
            }}
          >
            <Link href="/">
            <img width='50' src = '/rLogo.png' alt="My Happy SVG"/>
            </Link>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { lg: 'none', sm: 'none'} }}
          >
            I'm a Responsive NavBar
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: 'text.primary' }}>
              <Link href='/'>Home</Link>
            </Button>
            <Button sx={{ color: 'text.primary' }}>
              <Link href='/about'>About</Link>
            </Button>
            <Button sx={{ color: 'text.primary' }}>
              <Link href='/blogs'>blogs</Link>
            </Button>
            <Button sx={{ color: 'text.primary' }}>
              <Link href='/projects'>Projects</Link>
            </Button>
            <Button sx={{ color: 'text.primary' }}>
              <Link href='/contact'>Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar

// <Box component="span">HOME</Box>
//           <Box component="span">ABOUT</Box>
//           <Box component="span">VIDEOS</Box>
//           <Box component="span">CONTACT</Box>