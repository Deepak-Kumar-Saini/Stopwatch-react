import React, { useState, useEffect, useRef } from "react";
import './app.css'

function Stopwatch() {
    const [start,setStart] = useState(false)
    const [time, setTime] =useState(0)
    const intervalId = useRef(null)
    const startTime = useRef(0)

    useEffect(()=>{
        startTime.current = new Date().getTime()
        if(start){
            intervalId.current = setInterval(()=>{
                setTime((new Date().getTime())-startTime.current)
            },10)
        }
    },[start])

    function letStart(){
        setStart(true)
    }
    
    function letStop(){
        clearInterval(intervalId.current)
        setStart(false)
    }
    
    function letReset(){
        clearInterval(intervalId.current)
        setStart(false)
    }

    return <>
        <div className="stopwatch">
            <div className="screen">{`00:00:00`}</div>
            <div className="buttons">
                <button className="button start-button" onClick={letStart}>Start</button>
                <button className="button stop-button" onClick={letStop}>Stop</button>
                <button className="button reset-button" onClick={letReset}>Reset</button>
            </div>
        </div>
    </>
}

export default Stopwatch;