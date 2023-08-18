

import DashboardRight from "../components/DashboardRight";
import Sidebar from "../components/DashboardSidebar";
import NavBar from "../components/NavBar";
import "../css/dashboard.css";
import { useState ,useContext} from "react";
import { ThemeContext } from "../util/ThemeContext";

function Dashboard(){
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

    return(
    <>  
       <div className={"container-" + theme}>
        <Sidebar/>
        <DashboardRight/>
        </div> 
    </>
    );
} 
export default Dashboard;

