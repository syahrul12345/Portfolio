import React from 'react';
// Material UI components
import { Grid } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';

// Custom components
import NavBar from '../../components/navbar'
import Banner from '../../components/banner'
import ProjectView from '../../components/projectview'

// Styles
import './App.css';

function App() {
  return (
    <>
    <CssBaseline/>
    <Grid 
    container
    direction="row">
      <NavBar className="navbar"/>
      <Banner/>
      <ProjectView/>
    </Grid>
    </>
  );
}

export default App;
