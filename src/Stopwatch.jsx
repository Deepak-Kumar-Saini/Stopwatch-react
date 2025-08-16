import React, { useState, useEffect, useRef } from "react";
import './app.css'

function Stopwatch() {
    const [start, setStart] = useState(false)
    const [time, setTime] = useState(0)
    const intervalId = useRef(null)
    const startTime = useRef(0)

    useEffect(() => {
        if (start) {
            intervalId.current = setInterval(() => {
                setTime(Date.now() - startTime.current)
            }, 10)
        }
        return () => {
            clearInterval(intervalId.current)
        }
    }, [start])

    function letStart() {
        startTime.current = Date.now() - time;
        setStart(true)
    }

    function letStop() {
        setStart(false)
    }

    function letReset() {
        setTime(0)
        setStart(false)
    }

    function timeFormate() {
        let min = Math.floor(time / (1000 * 60) % 60)
        let sec = Math.floor(time / (1000) % 60)
        let miliSec = Math.floor((time % 1000) / 10)

        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        miliSec = miliSec < 10 ? "0" + miliSec : miliSec;

        return `${min}:${sec}:${miliSec}`
    }

    return <>
        <div className="stopwatch">
            <div className="screen">{timeFormate()}</div>
            <div className="buttons">
                <button className="button start-button" onClick={letStart}>Start</button>
                <button className="button stop-button" onClick={letStop}>Stop</button>
                <button className="button reset-button" onClick={letReset}>Reset</button>
            </div>
        </div>
    </>
}

export default Stopwatch;