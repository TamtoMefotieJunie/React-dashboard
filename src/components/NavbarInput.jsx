
import "../css/dashboard.css";
import {Search} from "@mui/icons-material";
import {ThemeContext}  from "../util/ThemeContext";
import { useContext } from "react";

function Input1({type,name,value,placeholder,onchange}){
    const { theme, setTheme } = useContext(ThemeContext)
    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }
    return(
    <>  
       <div className={"navbarInput-"+ theme}>
             <Search/>
            <input type={type} name={name} placeholder={placeholder} id="" />
       </div>
    </>
    );
} 
export default Input1;

