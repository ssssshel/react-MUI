import { Typography, Hidden, Button } from "@mui/material";


const Oculto = (props) => {
  return ( 
    <div>
      <Hidden smDown>
        <Button variant="contained" color="primary">
          SM
        </Button>
      </Hidden>
      <Hidden mdDown>
        <Button variant="contained" color="primary">
          MD
        </Button>
      </Hidden>
      <Hidden only='lg'>
        <Button variant="contained" color="primary">
          LG
        </Button>
      </Hidden>
      <Hidden only={['lg', 'md']}>
        <Button variant="contained" color="primary">
          LG y MD
        </Button>
      </Hidden>
    </div>
   );
}
 
export default Oculto;