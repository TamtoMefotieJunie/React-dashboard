import "../css/dashboard.css";
import {NotificationsNone,
    ElectricBolt,
    Widgets,
    DateRange,
    PersonOutline,
    Usb,
    Addchart,
    Security,
    SettingsOutlined,
    LoginOutlined,
    DriveFileMoveOutlined
} from "@mui/icons-material";
import { useContext } from "react";
import {ThemeContext}  from "../util/ThemeContext";


function Sidebar(){

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }
    return(
    <>  
        <div className={"sidebar-"+ theme}>
            <div className="sidebarTop">
                <div className={"sidebarIcons-"+ theme}><NotificationsNone/></div>
                <div className={"sidebarIcons-"+ theme}><DriveFileMoveOutlined/></div>
            </div>

            <div className="sidebarMiddle">
                <div className={"sidebarIcons-"+ theme}><Widgets/></div>
                <div className={"sidebarIcons-"+ theme}><ElectricBolt/></div>
                
                <div className="iconFocus">
                    <PersonOutline />
                    <div className="iconOnfocus"></div>
                </div>
                <div className={"sidebarIcons-"+ theme}><Usb/></div>
                <div className={"sidebarIcons-"+ theme}><Addchart/></div>
                <div className={"sidebarIcons-"+ theme}><DateRange/></div>
            </div>

            <div className="sidebarbottom">
                <div className={"sidebarIcons-"+ theme}><SettingsOutlined/></div>
                <div className={"sidebarIcons-"+ theme}><Security/></div>
            </div>
            <div className="sidebarfoot">
                <div className={"sidebarIcons-"+ theme}><LoginOutlined/></div>
                
            </div>

        </div>
    </>
    );
} 
export default Sidebar;

