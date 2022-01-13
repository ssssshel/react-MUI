import { Button } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles"; 
import theme from '../components/temaConfig';

const TemaGlobal = () => {
  return ( 
    <div>
      <h3>Para el uso de temas globales se require importar los siguientes modulos:</h3>
      <h4>Para el page:</h4>
      <p>import { "ThemeProvider" } from "@mui/material/styles";</p> 
      <h4>Para el component:</h4>
      <p>import { "createTheme" } from "@mui/material/styles";</p>
      <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        boton
      </Button>
      <Button variant="contained" color="secondary">
        boton
      </Button>
    </ThemeProvider>
    </div>
    
   );
}
 
export default TemaGlobal;