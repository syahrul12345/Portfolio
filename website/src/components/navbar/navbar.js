import React from 'react'
import { Grid, Button } from '@material-ui/core'
// Custom components
import Dialog from '../dialog'
const menu = [
  {title:"About",content:[
    "I'm a full stack engineer, with a keen interest in Blockchain and Deployment pipelines. I love JavaScript and Go, and am always experimenting with new technologies.",
    "I've graduated from The National Univeristy of Singapore (NUS) with a degree in Engineering.", 
    "I am highly driven to learn new things which are often out of the scope of my day job. For example, to futher understand ECDSA used in Bitcoin, I've reimplemented secp256k1 in Go.",
    "To further expand my knowledge, I especially enjoy creating low-level projects, such as designing my own database and creating my own basic P2P client. Low level projects have given me a better understanding of computer science concepts.",
    "Higher-level projects often involve me deploying smart contracts.",
    "As a professional working for AcePointer, a startup based in Singapore, I am well versed in Agile methodologies. My work involves creation of anti-fraud tools for e-commerce platforms.",
  ]},
  {title:"Contact",content:[
    "You can contact me via email at muhdsyahrulnizam123@gmail.com or drop me a phone call at +65 91892107",

  ]},
]
export default function NavBar(props) {
  return(
    <Grid
    container
    direction="row"
    justify="flex-end"
    className="navbar">
      {menu.map((data,index) => {
        return(
          <Dialog key={index} data={data}/>
        )
      })}

      <Button variant="contained" color="primary" href="//github.com/syahrul12345"> Github </Button>
    </Grid>
  )
}