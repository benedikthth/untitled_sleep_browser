import { AppBar, Grid, Toolbar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import React,  { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import Chart from './Components/chart'
import MenuIcon from '@material-ui/icons/Menu';

import MainDrawer from './Components/MainDrawer'

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        
        <Link
          to="/ chart"
        >
        Skibidi
        </Link>
      </div>
    </div>
  );
};



export default function App() {


  return ( <Grid container direction="column">
    <BrowserRouter>  
    <Grid item xs={12} >

    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container>
          {/* Menu  */}
          <Grid item xs={2}>
            <MainDrawer />
          </Grid>
        </Grid>
        {/*  */}

      </Toolbar>
    </AppBar>
    </Grid>

      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </BrowserRouter> 
  </Grid>
  );
}
