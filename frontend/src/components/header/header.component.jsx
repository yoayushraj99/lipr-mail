import React from 'react';
import {
  Button,
  Box,
  Grid,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006400',
    },
    secondary: {
      main: '#ffa500',
    },
  },
});

function Navbar() {
  const navBar = {
    paddingLeft: '55px',
    paddingRight: '55px',
    backgroundColor: 'white',
    height: '81px',
  };

  const responsiveImg = {
    Width: '100%',
    maxWidth: '78px',
    height: 'auto',
  };

  return (
    <>
      <div className="row" style={navBar}>
        <Grid container alignItems="center">
          <Grid item lg={3} md={3}>
            <Box display="flex" justifyContent="center">
              <img
                src="https://clipartcraft.com/images/email-logo-png-us-4.png"
                alt="mailLogo"
                style={responsiveImg}
              ></img>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            <Box display="flex" justifyContent="center">
              <Box component="span" px={2}>
                Home
              </Box>
              <Box component="span" px={2}>
                About Us
              </Box>
              <Box component="span" px={2}>
                Products
              </Box>
              <Box component="span" px={2}>
                Contact Us
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3}>
            <Box display="flex" justifyContent="center">
              <Box component="span" px={2} pt={0.58}>
                <SearchIcon />
              </Box>
              <Box component="span" px={2}>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" color="primary">
                    Login
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Navbar;
