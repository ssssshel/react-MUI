import { Box } from "@mui/system";

const Cajita = () => {
  return ( 
    <div>
      <h3>Box</h3>
      <Box
        color='primary.main'
      >
        djsakfnjifa
      </Box>
      
      <Box
        color='white'
        bgcolor='primary.main'
      >
        kkkkkkk
      </Box>

      <Box
        color='warning.main'
        bgcolor='primary.main'
        my={2} //MARGIN
        px={5} //PADDING
      >
        kkkkkkk
      </Box>
      
      <Box
        color='error.main'
        m={2} //MARGIN
        p={5} //PADDING
        border={2}
        borderColor='error.main'
      >
        kkkkkkk
      </Box>

    </div>
   );
}
 
export default Cajita;