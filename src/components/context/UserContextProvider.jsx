import React, { useState } from 'react'
import UserContext from './userContext'
const UserContextProvider = ({children}) => {


    // console.log("type of childen prop is: ", typeof children)
    // console.log("children is: ",children) // array 
    console.log("provider rendered ")
    const [user, setUser]= useState(null)

  return (
    <UserContext.Provider value={{user,setUser}}>
           {children}
           // here react will apply optimisation and will not re-render the children components if the value provided by the context provider does not change, even if the provider component itself re-renders. This is because React uses a reference equality check to determine if the context value has changed. If the reference to the value remains the same, React will skip re-rendering the consuming components.
           Moreover if a children is not consuming the context value, it will not re-render when the context value changes, because it is not subscribed to the context. React will only re-render the components that are consuming the context value when it changes. So if a child component does not use the context value (via useContext), it will not be affected by changes to the context and will not re-render when the context value changes.
    </UserContext.Provider>
  )
}

export default UserContextProvider
