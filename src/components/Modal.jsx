import React, { useState,useContext } from "react";
import "../css/modal.css";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import {ThemeContext}  from "../util/ThemeContext";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => { 
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

  return (
    <>
        <div onClick={toggleModal} className={"menuIcon-"+ theme}>
            <MenuOutlined/>
        </div>
{modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                
                <h5>NotificationsNone</h5>
                <h5>ElectricBolt</h5>
                <h5> Widgets</h5>
                <h5>DateRange</h5>
                <h5>PersonOutline</h5>
                <h5>Usb</h5>
                <h5>Addchart</h5>
                <h5> Security</h5>
                <h5>SettingsOutlined</h5>
                <h5>LoginOutlined</h5>
                <h5>DriveFileMoveOutlined</h5>
                <button className="close-modal" onClick={toggleModal}>
                <CloseOutlined/>
                </button>
            </div>
        </div>
)}
    </>
    );
}