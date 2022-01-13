import {Button} from '@mui/material';

const Botones = () => {
  return ( 
    <div>
      <Button color="secondary">
        Hola mundo
      </Button>
      <Button 
      color="secondary"
      variant='outlined'
      >
        Hola mundo
      </Button>
      <Button 
      color="primary"
      variant='contained'
      disableElevation
      href='https://google.com'
      >
        Hola mundo
      </Button>
      <Button 
      color="primary"
      variant='contained'
      fullWidth
      >
        Hola mundo
      </Button>
      <Button 
      color="secondary"
      variant='contained'
      size='large'
      >
        Hola mundo
      </Button>
    </div>
   );
}
 
export default Botones;