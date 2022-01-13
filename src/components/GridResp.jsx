import {Box, Grid } from "@mui/material";

const GridResp = () => {
  return ( 
    <div>
      <h3>Grid</h3>
      <Grid container>
        <Grid item xs={12} sm={9} md={6} >
          <Box border={2}>
            xs12
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={3} md={6}>
          <Box border={2}>
            xs12
          </Box>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default GridResp;