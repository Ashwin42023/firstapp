import React from  'react';
import styles from './button.module.css'; 

export  default  function Button (props)
{
     const buttonVarient = `${styles.button} ${styles[props.variant]}`
     
       return (
        <button className = {buttonVarient} onClick ={props.onClick} >
             click me 
        </button>
       )

}