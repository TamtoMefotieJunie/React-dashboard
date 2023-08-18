import "../css/dashboard.css";
import Input1 from "./NavbarInput";
import {NearMe,Search,SpeakerNotes} from "@mui/icons-material";
import { useContext } from "react";
import {ThemeContext}  from "../util/ThemeContext";

function Cards({value,icon,staticon,title,statdescription}){
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

    return(
    <>  
      <div className={"main-" + theme}>
            <div className="card-top">
                <div className={"card-value-" + theme}>{value}</div>
                <div className={"card-icon-" + theme}>{icon}</div>
            </div>
            <div className="card-bottom">
                <div className={"card-title-" + theme}>{title}</div>
                <div className="card-statistics">
                    <div className="statsicon">{staticon}</div>
                    <div className={"statsdecription-" + theme}>{statdescription}</div>
                </div>
            </div>
      </div>   
    </>
    );
} 
export default Cards;

