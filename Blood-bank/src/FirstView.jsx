import React from 'react'
import styles from "./FirstView.module.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const FirstView = () => {

    const [isActive, setIsActive] = useState(false);
    const handleClickbtn = e => {
        
        setIsActive(current => !current);
      };

  return (
    <div className={styles.outerdiv} >
        <div >
        <h2 >Please select the one applicable to you</h2> 
         <div >  <button className={ styles.btnfv1 } onClick={handleClickbtn}>Health Worker </button> </div>
    <div> 
        <NavLink to = "/SignUp">
     <button className={isActive ? styles.btnfv2 : styles.btnfv1} onMouseOver={handleClickbtn}>Donor</button> </NavLink></div>
   <div>
  </div> 
  </div>
  
 
    </div>
  )
}

export default FirstView
