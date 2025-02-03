import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#81d4fa',
      light: '#b6ffff',
      dark: '#4ba3c7',
      contrastText: '#000',
    },
    secondary: {
      main: '#ff80ab',
      light: '#ffb2dd',
      dark: '#c94f7c',
      contrastText: '#000',
    },
    background: {
      default: '#0A1929',
      paper: '#132F4C',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(129, 212, 250, 0.12)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#1E90FF',
      marginBottom: '1rem',
      textShadow: '0 0 10px rgba(30, 144, 255, 0.3)',
    },
    subtitle1: {
      fontSize: '1.1rem',
      color: '#1E90FF',
      marginBottom: '2rem',
    },
    h6: {
      color: '#1E90FF',
      fontWeight: 500,
      textShadow: '0 0 10px rgba(30, 144, 255, 0.3)',
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '2rem',
          borderRadius: '12px',
          backgroundColor: 'rgba(19, 47, 76, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(129, 212, 250, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          textTransform: 'none',
          fontSize: '1rem',
        },
        contained: {
          background: 'linear-gradient(45deg, #81d4fa 30%, #4ba3c7 90%)',
          boxShadow: '0 3px 5px rgba(129, 212, 250, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #4ba3c7 30%, #81d4fa 90%)',
          },
        },
        outlined: {
          borderColor: '#81d4fa',
          color: '#81d4fa',
          '&:hover': {
            borderColor: '#b6ffff',
            color: '#b6ffff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#ffffff',
            '&.Mui-focused': {
              color: '#ffffff'
            }
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: 'rgba(129, 212, 250, 0.05)',
            '& input': {
              color: '#81d4fa'
            },
            '&:hover': {
              backgroundColor: 'rgba(129, 212, 250, 0.08)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(129, 212, 250, 0.08)',
            },
            '& fieldset': {
              borderColor: 'rgba(129, 212, 250, 0.3)'
            },
            '&:hover fieldset': {
              borderColor: 'rgba(129, 212, 250, 0.5)'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#81d4fa'
            }
          },
          '& .MuiFormHelperText-root': {
            color: '#ffffff'
          }
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: '#ffffff !important',
          '&.Mui-active': {
            color: '#1E90FF !important',
            fontWeight: 600,
            textShadow: '0 0 10px rgba(30, 144, 255, 0.3)',
          },
          '&.Mui-completed': {
            color: '#4caf50 !important',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-focused': {
            color: '#ffffff'
          }
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#81d4fa',
        },
        icon: {
          color: '#ffffff'
        }
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#81d4fa',
          '&.Mui-selected': {
            backgroundColor: 'rgba(129, 212, 250, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(129, 212, 250, 0.12)',
            }
          },
          '&:hover': {
            backgroundColor: 'rgba(129, 212, 250, 0.05)',
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(19, 47, 76, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(129, 212, 250, 0.1)',
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(211, 47, 47, 0.1)',
          border: '1px solid rgba(211, 47, 47, 0.3)',
        },
        icon: {
          color: '#ff1744'
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    }
  },
});

export default theme;