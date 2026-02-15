import React, {  useEffect, useRef, useState } from 'react'

const Calculator = () => {
   
   const [input,setInput]= useState("");
  
    
    const button=[
          {data: "AC", type:"btn-secondary", span:"col-span-2" },
          {data: "DEL", type:"btn-secondary" },
          {data: "÷", type:"btn-secondary" },
          {data: "7", type:"btn-primary" },
          {data: "8", type:"btn-primary" },
          {data: "9", type:"btn-primary" },
          {data: "*", type:"btn-secondary" },
          {data: "4", type:"btn-primary" },
          {data: "5", type:"btn-primary" },
          {data: "6", type:"btn-primary" },
          {data: "-", type:"btn-secondary" },
          {data: "1", type:"btn-primary" },
          {data: "2", type:"btn-primary" },
          {data: "3", type:"btn-primary" },
          {data: "+", type:"btn-secondary" },
          {data: "0", type:"btn-primary" },
          {data: ".", type:"btn-primary" },
          {data: "=", type:"btn-secondary", span:"col-span-2" },
    ]

    const hanndleDelete=()=>{
        console.log("handle delete working ")
         setInput(prev=>prev.substring(0,prev.length-1));
    }
    const calculate=()=>{
           console.log("calculating result");

           try {
             const ans= eval(input);
             setInput(ans);
           } catch (error) {
              setInput("Syntax error ")
           }
           
    }
    
 
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">

            <div className="w-[320px] bg-white/10  rounded-2xl p-6  border border-white/20">

                {/* Display */}
                <input 
                className="bg-black text-right text-white text-4xl font-light px-4 py-6 rounded-xl mb-4 overflow-x-auto outline-none w-full"
                 value={input}
                 readOnly={true}
                />
                 

                {/* Buttons */}
                  <div className='grid grid-cols-4 gap-3'>
                     {
                        button.map((btn,index)=>{
                              return <button 
                              key={index} 
                              className={` ${btn.type} ${btn.span} text-center  `}
                              onClick={()=>{
                                 if(btn.data==="AC")
                                  {
                                       setInput("");
                                       return;

                                  }
                                 if(btn.data==="DEL")
                                 {
                                     hanndleDelete();
                                     return;
                                 }
                                   if(btn.data==="=")
                                   {
                                     calculate();
                                     return;

                                   }
                                 setInput(prev=>{
                                  
                                    if((["÷","*","+","-"].includes(btn.data))&&(["÷","*","+","-"].includes(prev.charAt(prev.length-1))))
                                    {
                                       console.log("you have again  entered an operator");
                                       return prev;
                                    

                                    }
                                   return prev+ btn.data //  this line will change state with updated value 
                                
                                })
                              }}
                              >
                                      {btn.data}
                              </button>
                        })
                     }

                  </div>
            </div>
        </div>
    )
}

export default Calculator
