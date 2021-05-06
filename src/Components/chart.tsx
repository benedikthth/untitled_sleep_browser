import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Grid, Typography, Paper, makeStyles, GridList, GridListTile } from '@material-ui/core';
import './../App.global.css';

import AdjustibleChart from './AdjustibleChart/AdjustibleChart'; 

const useStyles = makeStyles(theme => ({
    signalContainer:{
        width: '100%',
        height: "50vh",
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: '10px'
    }
  }));


const Chart = () => {

    const classes = useStyles();

    let l1 = [];
    // secondos
    let max = 100;
    let min = 20;
    // fs
    //
    for(var i = 0; i < (max-min); i++){
        let cx = i;
        let cy = Math.sin(cx);
        l1.push({x:cx, y:cy});
    }
  


    const data = {
        labels: l1.map(x=>x.y),
        datasets: [
            {
                
                label: null,
                data: l1,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    

    let name = "steven";

    return ( <Grid container direction="column" spacing={2} justify="center" alignItems="center" alignContent="center">
        <Grid item xs={12} container direction="row">
            <Grid item xs={1}>
                <Paper>
                    <Typography>Sleep Data for {name}</Typography>
                </Paper>
            </Grid>
        </Grid>
        {/* <Grid item xs={12} container  spacing={2} className={classes.signalContainer}> */}
           
        <GridList cols={1} className={classes.signalContainer}>
        <GridListTile>
               <AdjustibleChart data={data} />
            </GridListTile><GridListTile>
               <AdjustibleChart data={data} />
            </GridListTile><GridListTile>
               <AdjustibleChart data={data} />
            </GridListTile><GridListTile>
               <AdjustibleChart data={data} />
            </GridListTile><GridListTile>
               <AdjustibleChart data={data} />
            </GridListTile><GridListTile>
               <AdjustibleChart data={data} />
            </GridListTile>
            {/* <GridListTile>
                
            </GridListTile>
            <GridListTile>
                
            </GridListTile>
            <GridListTile>
                
            </GridListTile> */}
        </GridList>
           
        {/* </Grid> */}
    </Grid>
    );
  };

export default Chart;  