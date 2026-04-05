import React, { useContext } from 'react'
import userContext from './userContext'
const UserProfile = () => {
     const {user}= useContext(userContext);
     console.log("user profile rendered")
  return (
    <div>
         {
              user? <div>Username is: {user.username}</div> : <div>Please Login</div>
         }
    </div>
  )
}

export default UserProfile
