import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  function incCount()
  {
       setCount(count+1);
       console.log("count ", count)// this will print the value of count from the current render, because react will render the component only after incCount function is completely executed.
       // setCount only queues a state update not triggering the state update imediately.

      }


    function decCount()
    {
         setCount(count-1);
    }  
  return (
    <>
         <div>Count is: {count}</div>
         <button onClick={incCount}>inc count</button>
         <button onClick={decCount}>dec count</button>
    </>
  )
}

export default App
