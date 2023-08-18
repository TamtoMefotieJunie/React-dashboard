
import React from "react";

import { Line } from "react-chartjs-2";
import {RadioButtonUncheckedOutlined, TuneOutlined} from "@mui/icons-material"


function LineChart ({ chartData }) {
 
  return (
    <div>
     <div className="Linechart-heading"> 
       <p >Attendance Comparison Chart </p>
       <div className="lineChart-icons">
       <div className="daily"><RadioButtonUncheckedOutlined fontSize="extremely small"/> <span>Daily</span></div>
       <div><RadioButtonUncheckedOutlined fontSize="extremely small"/> <span>Weekly</span></div>
       <div><RadioButtonUncheckedOutlined fontSize="extremely small"/> <span>Monthly</span></div>
       <span><TuneOutlined/></span>
       </div>
     </div>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
        />
    </div>
  );
};

export default LineChart;