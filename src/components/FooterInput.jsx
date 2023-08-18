
import "../css/dashboard.css";
import {Search} from "@mui/icons-material";
import {ThemeContext}  from "../util/ThemeContext";
import { useState ,useContext} from "react";

function Input2({type,name,value,placeholder,onchange}){
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

    return(
    <>  
       <div className={"FooterInput-" + theme}>
             <Search/>
            <input type={type} name={name} placeholder={placeholder} id="" />
       </div>
    </>
    );
} 
export default Input2;

