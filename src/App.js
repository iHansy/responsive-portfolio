import './App.css';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#303030',
        color: '#ffffff',
      },
    },
  },
  palette: {
    primary: {
      main: 'rgb(136, 136, 143)',
    },
    secondary: {
      main: '#01FF70',
    },
    textPrimary: {
      main: '#ffffff',
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
