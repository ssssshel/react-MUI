import { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Divider, Drawer } from "@mui/material";

import Listas from "./Listas";

import windowType from "../pages/Ejemplo"


const drawerWidth = 240;


const estilos = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: {
      xs: 'block',
      sm: 'none'
    }

  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: 'border-box'
  },
  toolbar: theme.mixins.toolbar
}))

const Cajon = (props) => {


  const classes = estilos()

  return ( 
    <div>
      <Drawer 
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      // anchor='left'
      sx={{
          width: drawerWidth,
          // flexShrink: 0,
          display: {
            sm: 'block'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
      }}
      >
        <div className={classes.toolbar}/>

        <Divider />
        <Listas />
      </Drawer>
      </div>
   );
    
    
}
 
export default Cajon;