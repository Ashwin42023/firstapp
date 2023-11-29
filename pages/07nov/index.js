import React from "react";
import Button from "./button";

export default function User ()
{  
    const handleclick = () =>
    {
        alert("Button clicked !");
    }
    return(
        <>
          <Button  onClick = {handleclick} variant = "success"/>
          <Button  onClick ={handleclick} variant = "failure"/>
          <Button  onClick ={handleclick} variant = "alert" />
          <Button  onClick ={handleclick}   variant ="warning" />
        </>
    )
}