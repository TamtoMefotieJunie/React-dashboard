import "../css/modal.css";
import "../css/dashboard.css";
import {SignalCellular4Bar,
    LightModeOutlined,
    SettingsOutlined,
    GroupOutlined,
    AddOutlined,EventRepeatOutlined,
    DarkModeOutlined,
    WatchLaterOutlined,
    FilterDramaOutlined,
    TimerOutlined,
    MovingOutlined,
    TrendingDownOutlined
} from "@mui/icons-material";
import Cards from "../components/Card";
import { useContext } from "react";
import {ThemeContext}  from "../util/ThemeContext";

function DashboardCard(){

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }
    return(
    <>  
    <p><span className={"dashboard-"+ theme}>Dashboard </span>
            <span className="triangle"><SignalCellular4Bar fontSize="extremely small"/></span> 
            <span className="afternavbar"> Attendance Insights</span>
            <span className="triangle"><SignalCellular4Bar fontSize="extremely small"/></span></p>

            <div  className="containerRightMiddle">
                <div className={"containerRightMiddle-left-"+ theme}>
                    <div className="containerRightMiddle-left-top">
                        <div>
                           <span > <LightModeOutlined fontSize="large" /></span>
                        </div>
                        <div className="time-description">
                           <span className="time"> 8:02:09 AM</span> <br />
                            <span className="description">Realtime Insight</span>
                        </div>
                    </div>
                    <div className="containerRightMiddle-left-part2" >
                            <div className={"containerRightMiddle-left-middle-" + theme}>
                                <p>Today: <br />
                                2nd August 2023</p>
                            </div>
                            <div className="containerRightMiddle-left-bottom">
                                <div><SettingsOutlined/></div>
                                <div className="bottom-text">Advanced Configuration</div>
                            </div>
                    </div>
                </div>
                <div className="containerRightMiddle-right">
                    <div className="containerRightMiddle-right-top">

                        <Cards value="400" 
                        statdescription="2 new employees added!" 
                        title="Total Employees" 
                        icon= {<GroupOutlined fontSize="medium" className="icon"/>}
                         staticon={<AddOutlined fontSize="extremely small" className="plus"/>}/>

                         <Cards value="360"
                          statdescription="-10% Less than yesterday"
                           title="On Time" 
                           icon= {<TimerOutlined fontSize="medium" className="icon"/>} 
                           staticon={<MovingOutlined
                            fontSize=" extremely small" className="plus"/>}/>

                           <Cards value="30"
                           statdescription="+3% Increase than yesterday"
                           title="Absent" 
                           icon= {<FilterDramaOutlined className="icon" fontSize="medium"/>} 
                           staticon={<MovingOutlined
                            fontSize="extremely small" className="arrowdown"/>}/>
                    </div>
                    <div className="containerRightMiddle-right-bottom">
                    <Cards value="62"
                        statdescription="+3% Increase than yesterday"
                        title="Late Arrival" 
                        icon= {<WatchLaterOutlined fontSize="medium" className="icon" />} 
                        staticon={<TrendingDownOutlined fontSize="extremely small" className="arrowdown"/>}/>
                    <Cards value="6"
                        statdescription="-10% Less than yesterday"
                        title="Early departure" 
                        icon= {<DarkModeOutlined fontSize="medium" className="icon"/>} 
                        staticon={<TrendingDownOutlined
                            fontSize="extremely small" className="plus"/>}/>
                    <Cards value="42"
                           statdescription="2% Increase than yesterday"
                           title="Time-Off" 
                           icon= {<EventRepeatOutlined fontSize="medium" className="icon"/>} 
                           staticon={<MovingOutlined
                            fontSize="extremely small"id="arrowup"/>}/>
                    </div>
                </div>
            </div>
        
    </>
    );
} 
export default DashboardCard;

