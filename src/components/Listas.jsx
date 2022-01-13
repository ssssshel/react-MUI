import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";

import DeckIcon from "@mui/icons-material/Deck";
import CloudQueueIcon from "@mui/icons-material/CloudQueue"

const Listas = () => {
  return ( 
    <div>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <CloudQueueIcon/>
          </ListItemIcon>
          <ListItemText primary='Mi primer elemento'/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DeckIcon/>
          </ListItemIcon>
          <ListItemText primary='Mi segundo elemento'/>
        </ListItem>

        <Divider />
      </List>
    </div>
   );
}
 
export default Listas;