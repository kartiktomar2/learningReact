import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import BgChanger from './components/BgChanger'
import PasswordGenerator from './components/PasswordGenerator'
import UseCallbackHook from './components/UseCallbackHook'

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
         {/* <div>Count is: {count}</div>
         <button onClick={incCount}>inc count</button>
         <button onClick={decCount}>dec count</button> */}
         {/* <Card age={21} name="Kartik" title="developer" arr={[1,2,3]}/>
         <Card age={22} name="Kartik Tomar" title="SDE" arr={[4,5,6]}/> */}
         {/* <BgChanger/> */}
         {/* <PasswordGenerator/> */}
         <UseCallbackHook/>
    </>
  )
}

export default App
