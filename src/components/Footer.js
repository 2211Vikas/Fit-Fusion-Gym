import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import { Link } from 'react-router-dom'

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '250px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      A react project by 
      <Link to="https://2211vikas.github.io/Portfolio-Page/">
        Vikas Chaudhary
      </Link> 
    </Typography>
    
  </Box>
);

export default Footer;
