import { AppBar, Grid, Toolbar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import React,  { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import Chart from './Components/chart'
import MenuIcon from '@material-ui/icons/Menu';

import MainDrawer from './Components/MainDrawer'

const Hello = () => {
  return (
    <Grid container>
      <Typography>I guess this is the main screen</Typography>
    </Grid>
  );
};



export default function App() {


  return ( <Grid container direction="column">
    <BrowserRouter>  
    <Grid item xs={12} >

    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container spacing={2}>
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
