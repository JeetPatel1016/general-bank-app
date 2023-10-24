import * as React from 'react';
import { AppBar, Avatar, Box, Button, Container, Divider,  Drawer, IconButton,  List,  ListItem,  ListItemIcon,  ListItemText,  Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SavingsIcon from '@mui/icons-material/Savings';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PaymentIcon from '@mui/icons-material/Payment';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


const pages = ['Payments', 'Loans', 'Transactions'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DrawerHeader = styled('div')((({theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
})))

const drawerWidth = 240;

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme()
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SavingsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            OneBank
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

          </Box>
          <SavingsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            },
          }}
          variant="temporary"
          anchor="left"
          onClose={() => {
            handleDrawerClose()
          }}
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <CloseIcon /> : <LocalAtmIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map((link, index) => {
              return(
                <ListItem button
                component={Link}
                to={`/${link}`}
                key={index}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <PaymentIcon /> : <LocalAtmIcon />}
                  </ListItemIcon>
                  <ListItemText primary={link}/>
                </ListItem>
              )
            })}
          </List>
        </Drawer>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
