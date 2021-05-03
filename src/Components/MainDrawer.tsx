import React, {useState }  from 'react';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {Inbox, Mail, Home} from "@material-ui/icons";


const MainDrawer = () =>{


  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>

        <ListItem button key='home'>
          <ListItemIcon> <Home /> </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );


    return (<>
        <Button onClick={toggleDrawer(true)} variant="contained" color="primary">Menu</Button>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {list()}
        </Drawer>
    </>);


};


export default MainDrawer;