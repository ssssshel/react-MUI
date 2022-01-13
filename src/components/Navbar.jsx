import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import {makeStyles} from "@mui/styles"

import RestaurantMenu from '@mui/icons-material/RestaurantMenu'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  
  title:{
    flexGrow: 1
  },
  // appBar: {
  //   [theme.breakpoints.down('sm')]: {
  //     width: 100,
  //   }
    
  // }
}))

const Navbar = (props) => {


  // const container = window !== undefined ? () => window().document.body : undefined

  const classes = useStyles()

  return ( 
    <AppBar 
      className={classes.appBar}
      sx={{
        width: {
          sm: "calc(100% - 240px)",
        },
        ml: {
          sm: "240px"
        }
      }} 
    >
      <Toolbar>
        <IconButton 
          color="inherit" 
          aria-label="menu" 
          edge='start'
          sx={{
            display: {
              sm: 'none'
            }
          }}
          className={classes.menuButton}
          onClick={() => props.accionAbrir()}
          >
          <RestaurantMenu />
        </IconButton>
        <Typography variant='h6' className={classes.title} >
          annDev
        </Typography>
        <Button variant='text' color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
   );
}
 
export default Navbar;