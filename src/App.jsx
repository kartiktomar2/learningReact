import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Card from './components/Card'
import BgChanger from './components/BgChanger'
import PasswordGenerator from './components/PasswordGenerator'
import UseCallbackHook from './components/UseCallbackHook'
import Todos from './components/Todos'
import Currency from './components/currencyProject/Currency'
import AllRoutes from './components/router/AllRoutes'
import StopWatch from './components/StopWatch'
import Calculator from './components/Calculator'
import UserContextProvider from './components/context/UserContextProvider'
import Login from './components/context/Login'
import UserProfile from "./components/context/UserProfile"
import { ThemeContext } from './components/contextProject2/theme'
import ThemeBtn from './components/contextProject2/ThemeBtn'
import Card from './components/contextProject2/Card'
function App() {
  // let [count, setCount] = useState(0)
  // function incCount() {
  //   setCount(count + 1);
  //   console.log("count ", count)// this will print the value of count from the current render, because react will render the component only after incCount function is completely executed.
  //   // setCount only queues a state update not triggering the state update imediately.

  // }
  // function decCount() {
  //   setCount(count - 1);
  // }

  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  
  return (
    <>
      {/* <div>Count is: {count}</div>
         <button onClick={incCount}>inc count</button>
         <button onClick={decCount}>dec count</button> */}
      {/* <Card age={21} name="Kartik" title="developer" arr={[1,2,3]}/>
         <Card age={22} name="Kartik Tomar" title="SDE" arr={[4,5,6]}/> */}
      {/* <BgChanger/> */}
      {/* <PasswordGenerator/> */}
      {/* <UseCallbackHook/> */}
      {/* <Todos/> */}
      {/* <Currency/> */}
      {/* <AllRoutes/> */}
      {/* <StopWatch/> */}
      {/* <Calculator/> */}

      {/* First context project */}
      {/* <UserContextProvider>
               <Login/>
               <UserProfile/>
         </UserContextProvider> */}


      {/* Second context project */}
       <ThemeContext value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* theme changing button */}
                  <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
                 {/* card component that will response to theme changes  */}
                 <Card/>
          </div>
        </div>
      </div>
      </ThemeContext>

    </>
  )
}

export default App
