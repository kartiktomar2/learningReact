import React, { useEffect, useState } from 'react'

const BgChanger = () => {
   
    const [color,setColor]= useState("white");
    console.log("rendered ")
    function changeColor(color)
    {   
        console.log("color changed to: ",color)
         setColor(color)
          
    }

    useEffect(()=>{
           console.log("effect runs ")
        document.body.style.backgroundColor=color;
    },[color])
  return (
    <div className={`flex justify-center w-screen h-screen items-center   `}>
           <div className='flex bg-white border p-4 '>
            <div className='border m-2 '
              onClick={()=>{changeColor("red")}}
            >Red</div>
            <div className='border m-2 '
            onClick={()=>{changeColor("blue")}}
            >Blue</div>
            <div className='border m-2 '
            onClick={()=>{changeColor("green")}}
            >Green</div>
           </div>
    </div>
  )
}

export default BgChanger
