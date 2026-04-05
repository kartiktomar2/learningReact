import React, { useContext, useState } from 'react'
import userContext from './userContext'
const Login = () => {
    const [username, setUsername]= useState('')
    // const value= useContext(userContext);
    // console.log("type of value from context is: ",typeof value)
    // console.log("value is: ", value)
    console.log("login rendered")
    const {setUser}= useContext(userContext);


  return (
   <>
       <h1>Login </h1>   
       <input type="text"
         value={username}
         onChange={(e)=>{
            setUsername(e.target.value)
         }}
       />
       <button
        onClick={(e)=>{
               e.preventDefault();
               setUser({username})
        }}
       >Submit </button>
   </>
  )
}

export default Login
