import React from 'react'
import styles from "./FirstView.module.css"

const SignUp = () => {
  return (
    <div className={styles.outerdiv}>
  <form action="" className={styles.signdiv } >
    <h2 className={styles.fvh2}>Sign Up </h2>
    <p>please register here </p>
    
    <input  className={styles.signinput} type="text" placeholder='Name' />
    <input className={styles.signinput} type="email" placeholder='Email'/>
    <input className={styles.signinput} type="password" placeholder='Password'/>
    <input className={styles.signinput} type="password" placeholder='Confirm Password'/>
    <button className={styles.btnfv1}>Sign Up</button>
    </form> 
  </div>
  )
}

export default SignUp