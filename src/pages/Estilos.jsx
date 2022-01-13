import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles({
  btn1: {
    background: 'linear-gradient(45deg, #FE6B88 30%,#FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 45,
    padding: '0, 30px'
  }
})

const Estilos = () => {

  const classes = useStyle()

  return ( 
    <div>
      <h3>Primero se debe instalar la siguiente dependencia:</h3>
      <p>npm install @mui/styles</p>
      <Button className={classes.btn1}>Mis estilos personalizados</Button>
    </div>
   );
}
 
export default Estilos;