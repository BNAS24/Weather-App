import './App.css';
import * as React from 'react';
import WeatherCard from './Components/WeatherCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Components/styles/weathercard.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="App">
          <WeatherCard />
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
