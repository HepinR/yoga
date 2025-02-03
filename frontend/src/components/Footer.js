import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3,
        mt: 'auto',
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 2 
        }}>
          <SelfImprovementIcon 
            sx={{ 
              fontSize: 30,
              color: '#2196f3',
              filter: 'drop-shadow(0 0 10px rgba(33, 150, 243, 0.3))'
            }} 
          />
          
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            mb: 2 
          }}>
            <Link 
              href="#" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#2196f3',
                  textShadow: '0 0 10px rgba(33, 150, 243, 0.3)'
                }
              }}
            >
              About Us
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#2196f3',
                  textShadow: '0 0 10px rgba(33, 150, 243, 0.3)'
                }
              }}
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#2196f3',
                  textShadow: '0 0 10px rgba(33, 150, 243, 0.3)'
                }
              }}
            >
              Privacy Policy
            </Link>
          </Box>

          <Divider 
            sx={{ 
              width: '100%', 
              maxWidth: '200px',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              my: 2
            }} 
          />

          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              textAlign: 'center',
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}
          >
            © {new Date().getFullYear()} Yoga Class Enrollment. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;