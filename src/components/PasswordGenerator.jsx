import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [isNumberIncluded, setIsNumberIncluded] = useState(false);
    const [isCharIncluded, setIsCharIncluded] = useState(false);

    let generatePassword=useCallback(function() {
         let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
         if(isNumberIncluded)
         {
             str+="1234567890";
         }
         if(isCharIncluded)
         {
          str+="!@#$%^&*(){}?/|";   
         }
         let ans="";
         for(let i=0;i<length;i++)
         {
            //max number from 0 to str.length-1;
            //append in the ans ;
            //set ans in the state 
            let randomIndex=Math.floor(Math.random() * (str.length - 0)) + 0;
            ans+=str.charAt(randomIndex);
         }
         setPassword(ans);
    },[length,isNumberIncluded,isCharIncluded])

    let passRef= useRef()

    let copyPassword=useCallback(function()
    {     
        passRef.current.select();
          console.log("password to copy is: ", password);
        window.navigator.clipboard.writeText(password)
          
    },[password])
    
    useEffect(() => {
         generatePassword();
    }, [length, isNumberIncluded, isCharIncluded])


// if I called generate function outside useEffect then this will happen 
// What actually happens
// React starts rendering the component
// generatePassword() is called during render
// Inside it, setPassword() is called
// setPassword() schedules a re-render
// React re-renders the component
// During the new render, generatePassword() is called again
// It calls setPassword() again
// Repeat forever → “Too many re-renders”
// React can never reach commit phase 
//🚨 The render phase never completes, so:
// No commit
// No DOM update
// No effects
// No paint
// React is stuck in render → abort → render → abort.


// more explanation of why I should not call generatePassword() outside useEffect 
// Render phase starts
// → generatePassword() runs
// → setPassword() called
// → React aborts current render
// → schedules a new render
// → render phase starts again
// → generatePassword() runs again
// → setPassword() called again


// if I called generate function inside useEffect 
//What happens on initial mount
// React renders the component (NO state updates yet)
// JSX is committed to the DOM
// useEffect runs after commit
// generatePassword() is called
// setPassword() is called
// React schedules one re-render
// So far so good.
// What happens on the re-render
// React re-renders the component
// Dependencies are checked:
// length ❌ unchanged
// isNumberIncluded ❌ unchanged
// isCharIncluded ❌ unchanged
// Effect is NOT re-run
// No more state updates
// Render loop stops
// ✅ No infinite loop


    return (
        <div className='w-screen h-screen bg-black flex justify-center '>
            <div className='bg-slate-900 h-30 w-120 mt-20 rounded  p-4 ' >
                {/* // text and copy button */}
                <div className='flex w-full '>
                    <input
                       value={password}
                       readOnly={true}
                      ref={passRef}
                    className='bg-white w-3/4 h-10 rounded-l overflow-x-auto text-orange-600 p-2 '/>
                   
                    <div 
                    className='bg-blue-700 w-1/4 cursor-pointer text-white text-center p-1 rounded-r '
                    onClick={copyPassword}
                    >Copy</div>
                </div>

                {/* //length, Number, CHar  */}
                <div className='flex text-orange-600 justify-between'>
                    <div>
                        <input type="range"
                            min={1}
                            value={length}
                            onChange={(e)=>setLength(e.target.value)}
                            max={100}
                            name=""
                            id="" />
                        <span>Length: {length}</span>
                    </div>
                    <div>
                        <input type="checkbox"
                         name="" 
                         id="" 
                         checked={isNumberIncluded}
                         onChange={()=>setIsNumberIncluded(!isNumberIncluded)}
                         />
                        Number
                    </div>
                    <div>
                        <input type="checkbox" 
                        name="" 
                        id=""
                        checked={isCharIncluded}
                        onChange={()=>setIsCharIncluded(!isCharIncluded)}
                        />
                        Char
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator
