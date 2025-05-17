import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: isScrolled 
          ? 'rgb(20, 20, 20)' 
          : 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
        boxShadow: 'none',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          sx={{
            width: '92px',
            height: 'auto',
            cursor: 'pointer'
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 