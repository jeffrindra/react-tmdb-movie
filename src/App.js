import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import movieJson from './data/movies.json';
import { Box, ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import theme from './themes/theme';
import MovieCard from './components/MovieCard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Box sx={{ marginTop:20 }}>
          {
            movieJson.results.map((movie) => {
              return <MovieCard movie={movie}/>
            })
          }
        </Box>
    
      </div>
    </ThemeProvider>
  );
}

export default App;
