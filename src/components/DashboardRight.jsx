
import NavBar from "../components/NavBar";
import "../css/dashboard.css";
import "../css/modal.css";

import DashboardChart from "../components/DashboardChart";
import DashboardFooter from "../components/DashboardBottom";
import DashboardCard from "./DashboardCards";


function DashboardRight(){
   

    return(
    <>  
       <div className="containerRight">
            <NavBar/>
            <DashboardCard/>
            <DashboardChart/>
            <DashboardFooter/>
        </div>
    </>
    );
} 
export default DashboardRight;

