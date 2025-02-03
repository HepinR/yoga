import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import EnrollmentForm from './components/EnrollmentForm';
import theme from './styles/theme';
import './styles/globalStyles.css';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}>
        <Header />
        <Box component="main" sx={{ 
          flexGrow: 1, 
          py: 4,
          px: { xs: 2, sm: 4 },
          maxWidth: 'lg',
          mx: 'auto',
          width: '100%'
        }}>
          <EnrollmentForm />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;