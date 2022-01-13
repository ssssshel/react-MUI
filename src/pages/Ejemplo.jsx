
import { ThemeProvider } from "@mui/material/styles"; 
import Contenedor from "../components/Contenedor";
import theme from '../components/temaConfig';




const Ejemplo = (props) => {

  return ( 
    <ThemeProvider theme={theme}>
      <Contenedor/>
      
      {/* <Button variant="contained" color="primary">
        boton
      </Button>
      <Button variant="contained" color="secondary">
        boton
      </Button>
      
      <Oculto /> */}
    </ThemeProvider>
   );
}
 
export default Ejemplo;