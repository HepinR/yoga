import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <SelfImprovementIcon 
            sx={{ 
              mr: 2, 
              color: '#2196f3',
              filter: 'drop-shadow(0 0 10px rgba(33, 150, 243, 0.3))'
            }} 
          />
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              color: '#fff',
              fontWeight: 600,
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
          >
            Yoga Class Enrollment
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;