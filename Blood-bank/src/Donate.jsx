import React from 'react'
import styles from "./FirstView.module.css"

const Donate = () => {
  return (
    <div className={styles.outerdiv}>
         
  <form action="" className={styles.signdiv } >
  <h2 className={styles.fvh2}>BloodDonate </h2>
    <p>please register here </p>
    <input  className={styles.signinput} type="date" placeholder="Date" />
    <input className={styles.signinput} type="time" placeholder='Time'/>
    <input className={styles.signinput} type="text" placeholder='Time Needed'/>
    <input className={styles.signinput} type="password" placeholder='Confirm Password'/>
    <button className={styles.btnfv1}>Sign Up</button>
    </form> 
  </div>
  )
}

export default Donate