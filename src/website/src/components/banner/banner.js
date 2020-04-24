import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Banner(props) {
  return(
    <Grid
    container
    direction="row"
    className="banner"
    >
      <Grid xs={12} item style={{textAlign:'center'}}>
        <Typography
        style={{
          marginTop:'10vh',
          marginBottom:'25px',
          fontWeight:'700'
        }} 
        className="title"
        variant="h1"> Portfolio </Typography>
      </Grid>
      <Grid xs={12} item style={{textAlign:'center'}}>
        <Typography
        style={{
          marginTop:'1vh',
          fontWeight:'400'
        }} 
        variant="h5"> I'm a Software Engineer with a keen interest in Blockchain & DevOps.</Typography>
        <Typography
        style={{
          marginTop:'1vh'
        }} 
        variant="h5"> Take a look at my projects below.</Typography>
      </Grid>
    </Grid>
  )
}