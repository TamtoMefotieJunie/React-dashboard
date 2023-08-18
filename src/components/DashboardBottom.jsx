
import "../css/dashboard.css";
import Input2 from "../components/FooterInput";
import {CalendarTodayOutlined,TuneOutlined,ArrowDropDown} from "@mui/icons-material";
import { useContext } from "react";
import {ThemeContext}  from "../util/ThemeContext";


function DashboardFooter(){

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }
    return(
    <>  
    <div className={"bottom-container-"+ theme}>
        <div className={"bottom-navbar-" + theme}>
            <div className={"bottom-navbar-heading-" + theme}>
                <p>Attendance Overview</p>
            </div>
            <div className="bottom-navbar-right">
                <div>
                <Input2 name="search2" type="text" placeholder="Quick search..."/>
                </div>
                <div className={"calendar-"+ theme}>
                    <span><CalendarTodayOutlined/></span>
                    <span>29 July 2023</span>
                </div>
                <div className="filters">
                    <span><TuneOutlined/></span>
                    <span>Advanced Filters</span>
                </div>
            </div>

        </div>
        <table>
            <th className={"header-"+ theme}> ID</th>
            <th className={"header-"+ theme}>Employee </th>
            <th className={"header-"+ theme}>Role <span className="arrowmenu"><ArrowDropDown/></span></th>
            <th className={"header-"+ theme}>Department <span className="arrowmenu"><ArrowDropDown/></span></th>
            <th className={"header-"+ theme}>Date</th>
            <th className={"header-"+ theme}>Status <span className="arrowmenu"><ArrowDropDown/></span></th>
            <th className={"header-"+ theme}>Check-in <span className="arrowmenu"><ArrowDropDown/></span></th>
            <th className={"header-"+ theme}>Check-out <span className="arrowmenu"><ArrowDropDown/></span></th>
            <th className={"header-"+ theme}>Work hours <span className="arrowmenu"><ArrowDropDown/></span></th>
        </table>
    </div> 
    </>
    );
} 
export default DashboardFooter;

