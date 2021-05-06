import React, {useState} from 'react'
const { Typography, Paper, makeStyles } = require("@material-ui/core")
import { Line } from 'react-chartjs-2';


const useStyles = makeStyles(theme => ({
    chart:{
        height: '100%',
    }
  }));

const AdjustibleChart = (props) => {
    const {data} = props;
    const classes = useStyles();

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: { 
            x:{
                // scaleShowLabels: false,
                display : false, 
                // maxTicksLimit: 0,
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                },
            }
            // xAxes : [ {
            //     // scaleShowLabels: false,
            //     display : false, 
            //     // maxTicksLimit: 0,
            //     ticks: {
            //         display: false
            //     },
            //     gridLines: {
            //         display: false,
            //     },
            // },],
            
        },
    };



    return (<>
        <Typography>RIP SIGNAL</Typography>
        <Paper>
            <Line data={data} options={options} className={classes.chart}  />
        </Paper>
    </>);
}

export default AdjustibleChart;