
import BarChart  from "../components/BarChart";
import LineChart from "./LineChart";
import "../css/dashboard.css";
import React from 'react';
import { useState,useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../util/Data.js";
import { LineData } from "../util/LineData.js";
import {ThemeContext}  from "../util/ThemeContext";



Chart.register(CategoryScale);

function DashboardChart(){
  const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.label), 
        datasets: [
            {
              
              data: Data.map((data) => data.percentage),
              backgroundColor: [
                "#E6EEF5",
                "#E6EEF5",
                "#3354F4",
                "#E6EEF5",
                "#E6EEF5"
              ],
              borderColor: "none",
        borderWidth: 0,
        borderRadius:7 
       
      }
    ]
  });

  const [ChartData , setLineData] = useState({
    labels: LineData.map((data) => data.label), 
    datasets: [
        {
          
          data: LineData.map((data) => data.percentage),
          backgroundColor: [
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#3354F4",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
          ],
          borderColor: "none",
   
  }
]
});

    return(
    <>  
    <div className="graph">
        <div className={"line-chart-"+ theme}>
        <LineChart chartData={ChartData}/>
        </div>
        <div className={"bar-chart-" + theme}>
        <BarChart chartData={chartData} />
        </div>
    </div>
    
    </>
    );
} 
export default DashboardChart;

