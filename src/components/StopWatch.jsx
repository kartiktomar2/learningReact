import { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isTimerPaused, setIsTimerPaused] = useState(false);
    const [shouldDisplayPause, setShouldDisplayPause] = useState(false);
    let secRef = useRef(null)
    let minRef = useRef(null)
    let hourRef = useRef(null)


    function start() {
        setIsTimerPaused(false)
        setShouldDisplayPause(true);
        secRef.current = setInterval(() => {
            setSeconds(prev => ((prev + 1) % 60));
        }, 1000)


        console.log("start func runs ")

    }

    function pauseTimer() {
        clearInterval(secRef.current)
        clearInterval(minRef.current)
        setIsTimerPaused(true);
        setShouldDisplayPause(false)

        secRef.current = null;
        minRef.current = null;

        console.log("pause function runs and cleared intervals ");
    }

    function reset() {
        clearInterval(secRef.current)
        clearTimeout(minRef.current)
        setIsTimerPaused(false)
        setSeconds(0)
        setHours(0)
        setMinutes(0)
    }

    useEffect(() => {
        if (seconds == 59 && !isTimerPaused) {
            console.log("timer started to increase minute state ");
            minRef.current = setTimeout(() => {
                setMinutes(prev => prev + 1);
            }, 1000)
        }

        // just for safety, clearing old timeout
     return ()=>clearTimeout(minRef.current)
    },[seconds, isTimerPaused])

    
    return (
        <div className='flex w-screen h-screen justify-center items-center'>
            <div className='flex flex-col border h-30 w-50 items-center justify-center'>
                {/* timer  */}
                <div> {hours} : {minutes} : {seconds} </div>
                {/* start stop button */}
                <div className='flex gap-2'>
                    <button
                        className='border p-1'
                        onClick={shouldDisplayPause ? pauseTimer : start}
                    >{shouldDisplayPause ? "pause" : "start"}</button>
                    <button
                        className='border p-1'
                        onClick={reset}
                    > reset </button>
                </div>
            </div>
        </div>
    )
}

export default StopWatch
