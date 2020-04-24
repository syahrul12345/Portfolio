import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core'
import projects from '../../projects.json'

const CustomCard = (props) => {
  const { project } = props
  return(
    <Card elevation={3}>
      <CardContent style={{paddingBottom:'5px'}}>
        <Typography variant="h4" style={{marginBottom:'8px',fontWeight:'600'}}>{project.title}</Typography>
        <Typography variant="subtitle1" style={{color:'rgb(153,153,153)',minHeight: '70px'}}>{project.about}</Typography>
        <Grid container justify="space-between" style={{paddingBottom:'-5vh'}}direction="row">
          <Grid item xs={2}>
              <Button color="white" href={project.link}> Github</Button>
          </Grid>
          {project.website !== "" ? 
            (<Grid 
            item 
            xs={2}>
              <Button color="white" href={project.website} > Try it </Button>
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