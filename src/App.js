import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Technologies from './components/Technologies.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const theme = createMuiTheme({
  primary: '#0e63d3',
  secondary: '#000000',
  textPrimary: '#000000',
  textSecondary: '#ffffff',
  cardBackground: 'rgb(240, 240, 240)',
  
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Poppins',
      },
    },
    MuiTypography: {
      root: {
        fontFamily: 'Poppins',
      },
      body1: {
        fontFamily: 'Poppins',
      },
      body2: {
        fontFamily: 'Poppins',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.6)'
      }
    },
    MuiCardContent: {
      root: {
        padding: '12px 24px!important'
      }
    },
    MuiTypography: {
      root: {
        fontFamily: 'Poppins, sans-serif!important'
      }
    }
  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="app">
          <Header />
          <AboutMe />
          <Technologies />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
  );
}

export default App;
