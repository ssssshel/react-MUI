import { createTheme } from "@mui/material/styles";
import { lightGreen, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700]
    },
    secondary: {
      main: lightGreen[500]
    }
  }
})

export default theme