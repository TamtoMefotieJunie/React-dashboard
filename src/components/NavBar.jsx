import { FormControlLabel, FormGroup, Stack, Switch, Typography } from "@mui/material";
import "../css/dashboard.css";
import "../css/modal.css";
import Input1 from "./NavbarInput";
import { useState ,useContext} from "react";
import {MenuOutlined, NearMe,Search,SpeakerNotes} from "@mui/icons-material";
import {ThemeContext}  from "../util/ThemeContext";
import Modal from "./Modal";

function NavBar(){
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }
    return(
    <>  
        <div className={"navbar-"+ theme }>
            <div className={"navbarLeft-" + theme }>
                <p>Dashboard</p>
                <span className="navbarIcon"><NearMe/></span>
            </div>
          
            <FormGroup>
                    <Stack direction="row" className={"switchLabel-"+ theme }>
                    <Typography className={"colorMode-" + theme}>Light mode</Typography>
                        <Switch 
                        onChange={handleChange}
                        checked={theme === 'light'}
                         />
                        <Typography className={"colorMode-" + theme}> Dark mode</Typography>
                    </Stack>
                    </FormGroup>
                   
                    <Modal/>

            <div className="part2">
                <div className={"navbarMiddle-"+ theme }>
                    <Input1 name="search" type="text" placeholder="Quick search..."/>
                    <div><SpeakerNotes/></div>
                </div>
                <div className={"navbarRight-"+ theme }>
                    <div className="userImage"></div>
                    <div className="userRole">
                    Admin
                    admin@domain.ae
                    </div>
                </div>
            </div>
        </div>
    </>
    );
} 
export default NavBar;

