import './App.css';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

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
      }
    },
    MuiListItemText: {
      root: {
        fontFamily: 'Poppins',
      }
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
      </div>
    </ThemeProvider>
  );
}

export default App;
