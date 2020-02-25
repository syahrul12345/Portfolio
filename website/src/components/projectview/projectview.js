import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import projects from '../../projects.json'

const CustomCard = (props) => {
  const { project } = props
  return(
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h4" style={{marginBottom:'8px',fontWeight:'600'}}>{project.title}</Typography>
        <Typography variant="subtitle1" style={{color:'rgb(153,153,153)'}}>{project.about}</Typography>
        <Grid container justify="space-between" direction="row">
          <Grid item xs={2}>
              <Typography variant="subtitle2" style={{color:'rgb(153,153,153)'}}>
              <a 
              style={{textDecoration:'none'}}
              href={project.link}>Github</a>
            </Typography>
          </Grid>
          {project.website !== "" ? 
            (<Grid 
            item 
            xs={2}>
              <Typography variant="subtitle2" style={{color:'rgb(153,153,153)',textAlign:'right'}}>
                <a 
                style={{textDecoration:'none'}}
                href={project.website}>Try it</a>
              </Typography>
            </Grid>)
            :
            (<></>)
          }
          
        </Grid>
        
      </CardContent>
    </Card>
  )
}

export default function ProjectView(props) {
  return(
    <Grid
    container
    spacing={2}
    className="projectsGrid"
    >
      {projects.map((project,index) => {
        return(
          <Grid
          item
          key={index}
          xs={12}
          md={4}>
            <CustomCard project={project}/>
          </Grid>
        )
      })}
    </Grid>
  )
}