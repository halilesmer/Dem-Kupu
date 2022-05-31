import * as React from 'react';
import "./styles.css";
import {
Box, Toolbar,
  Container,
  Tooltip,
  Button,
  Avatar,
  Menu,
    MenuItem,
  Typography,
  IconButton,
  AppBar,

} from "@mui/material";
import {MenuIcon,AdbIcon} from '@mui/icons-material';

import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Hamburger from 'hamburger-react'
import ThemeToggle from './ThemeToggle.js';
import LanguageMenu from "./Language";
import data from "./data";
import logo from "./assets/DemKupuLogo.png";


const Nav = ({ language }) => {
  const [isOpen, setOpen] = React.useState(false)

  const about = data[language].aboutNav;
  const prepare = data[language].prepareNav;
  const contact = data[language].contactNav;

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const pages = [about, prepare, contact];
  // const [language, setLanguage] = useState(0);
  /* const handleChange = (e) => {
    setLanguage(e.target.value);
  }; */


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setOpen(false)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" style={{ background: '#00000000'}}>
      <Container maxWidth="xl">
        
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              <img src={logo} alt="logo-dem-kupu" width={55} />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />


            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}  >
                <Typography textAlign="center">
                  <AnchorLink href="#about">
                    {data[language].aboutNav}
                  </AnchorLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <Typography textAlign="center">
                  <AnchorLink href="#prepare">
                    {data[language].prepareNav}
                  </AnchorLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <Typography textAlign="center">
                  <AnchorLink href="#mail">
                    {data[language].contactNav}
                  </AnchorLink>
                </Typography>
              </MenuItem>

              {/* Menu Item Toggle */}
              <MenuItem component={'div'} onClick={handleCloseNavMenu}  >
                <ThemeToggle onClick={handleCloseNavMenu} />

              </MenuItem>


            </Menu>
          </Box>
          <Typography 
            variant="h5"
            noWrap
            component="div"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

            <Link to="/">
              <img src={logo} alt="logo-dem-kupu" width={50} />
            </Link>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <AnchorLink href="#about">
                {data[language].aboutNav}
              </AnchorLink>
            </Button>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <AnchorLink href="#prepare">
                {data[language].prepareNav}
              </AnchorLink>
            </Button>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <AnchorLink href="#mail">
                {data[language].contactNav}
              </AnchorLink>
            </Button>

          </Box>
          {/* Navbar Toggle */}
          <Typography component={'div'}>
            <ThemeToggle className="toggle-wrapper"/>
          </Typography>


        </Toolbar>
      </Container>
    </AppBar>


    /*  <div className="Nav">
       <Navbar>
         <div>
           {" "}
           <Link to="/">
             <img src={logo} alt="logo-dem-kupu" />
           </Link>
         </div>
 
         <ThemeToggle />
         <ul>
           <AnchorLink href="#about">
             <li>{data[language].aboutNav}</li>
           </AnchorLink>
           <AnchorLink href="#prepare">
             <li>{data[language].prepareNav}</li>
           </AnchorLink>
           <AnchorLink href="#mail">
             <li>{data[language].contactNav}</li>
           </AnchorLink>
 
         </ul>
         <LanguageMenu change={handleChange} language={language} />
 
 
       </Navbar>
     </div> */
  );
};

export default Nav;

/*     <div className="Nav">
      <div>
        {" "}
        <Link to="/">
          <img src={logo} alt="logo-dem-kupu" />
        </Link>
      </div>
      
      <ThemeToggle />
      <ul>
        <AnchorLink href="#about">
          <li>{data[language].aboutNav}</li>
        </AnchorLink>
        <AnchorLink href="#prepare">
          <li>{data[language].prepareNav}</li>
        </AnchorLink>
        <AnchorLink href="#mail">
          <li>{data[language].contactNav}</li>
        </AnchorLink>
      </ul>
    </div> */