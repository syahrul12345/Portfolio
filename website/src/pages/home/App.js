import React from 'react';
// Material UI components
import { Grid } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Custom components
import NavBar from '../../components/navbar'
import Banner from '../../components/banner'
import ProjectView from '../../components/projectview'

// Styles
import './App.css';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        primary: {
          main: 'rgba(0,0,0,0.87)',
        },
        type: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <Grid 
      container
      direction="row">
        <NavBar className="navbar"/>
        <Banner/>
        <ProjectView/>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
