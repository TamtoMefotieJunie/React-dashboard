import React from "react"
import { useState } from "react";
import "../css/cv.css";
import { useForm } from "react-hook-form"; 
import Input from "./input";



export  function CreateCv (){
    const [name,setName] = useState("");
    const [Surname,setSurName] = useState("");
    const [date,setDate] = useState("");
    const [status,setStatus] = useState("");
    const [nationality,setNationality] = useState("");
    const [address,setAddress] = useState("");
return(
    <>
    
    <h1>Curriculum Vitae</h1>
    <div className="cvContainer">
        
        <div className="container-left">
           <label htmlFor="name">Name : </label>
           &ensp;
           <textarea className="text-area"
           value={name}
           onChange={(e) => setName(e.target.value)}
           />
           <br />
           <label htmlFor="surname">Surname : </label>
           &ensp;
           <textarea className="text-area"
           value={Surname}
           onChange={(e) => setSurName(e.target.value)}
           />

            <br />
           <label htmlFor="surname">Date and Place of birth: </label>
           &ensp;
           <textarea className="text-area"
           value={date}
           onChange={(e) => setDate(e.target.value)}
           />
            <br />
           <label htmlFor="status">Marital Status: </label>
           &ensp;
           <textarea className="text-area"
           value={status}
           onChange={(e) => setStatus(e.target.value)}
           />
            <br />
           <label htmlFor="nationality">Nationality: </label>
           &ensp;
           <textarea className="text-area"
           value={nationality}
           onChange={(e) => setNationality(e.target.value)}
           />
            <br />
           <label htmlFor="address">Address: </label>
           &ensp;
           <textarea className="text-area"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
           />
        </div>


        <div className="container-right">
            <p >My Name is :{name} </p>

            <p>My Surame is : {Surname}</p>
            <p>I was born on the : {date} </p>
        
            <p>I am:{status} </p>
            <p>I am a : {nationality} </p>
            <p>I live in : {address} </p>
        
        </div>
    </div>
    
    </>
)
}