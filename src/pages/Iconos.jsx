import AccessAlarm from '@mui/icons-material/AccessAlarm';
import Delete from '@mui/icons-material/Delete'
import FaceRetouchingOffRounded from '@mui/icons-material/FaceRetouchingOffRounded'
import { Button, IconButton } from '@mui/material';

const Iconos = () => {
  return ( 
    <div>
      <h3>Para hacer uso de los iconos SVG en MUI se debe instalar el siguiente paquete:</h3>
      <p>npm install @mui/icons-material</p>
      <AccessAlarm color='primary' fontSize='large' />
      <FaceRetouchingOffRounded color='secondary' fontSize='small'/>
      <Button variant='contained' color='secondary' startIcon={<Delete />}  >Combo</Button>
      <IconButton aria-label='Delete'><Delete color='primary' fontSize='large' /></IconButton>
    </div>
   );
}
 
export default Iconos;