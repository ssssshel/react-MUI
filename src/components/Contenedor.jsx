import { Hidden } from "@mui/material";
import { 
  makeStyles

} from "@mui/styles";
import { useState } from "react";
import Cajita from "./Cajita";
import Cajon from "./Cajon";
import GridResp from "./GridResp";
import Navbar from "./Navbar";


const estilos = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }

}))

const Contenedor = () => {

  const classes = estilos()

  const [abrir, setAbrir] = useState(false)

  const accionAbrir = () => {
    setAbrir(!abrir)
  }

  return ( 
    <div className={classes.root}>
      <Navbar accionAbrir={accionAbrir} />
      <Hidden smDown>
        <Cajon 
          variant='permanent'
          open={true}
        />
      </Hidden>

      <Hidden smUp>
        <Cajon 
          variant='temporary'
          open={abrir}
          onClose={accionAbrir}
        />
      </Hidden>

      <div className={classes.content}>
      <div className={classes.toolbar}></div>
        <Cajita />
        <GridResp />
      </div>
    </div>
   );
}
 
export default Contenedor;