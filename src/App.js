import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Technologies from './components/Technologies.js';

const theme = createMuiTheme({
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
  },
  palette: {
    primary: {
      main: '#0e63d3',
    },
    secondary: {
      //not in use
      main: '#000000',
    },
    textPrimary: {
      main: '#000000',
      second: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
        <AboutMe />
        <Technologies />
      </div>
    </ThemeProvider>
  );
}

export default App;
