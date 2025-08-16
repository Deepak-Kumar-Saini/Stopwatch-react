import React, { useState, useEffect } from "react";
import './app.css'

function Stopwatch() {
    return <>
        <div className="stopwatch">
            <div className="screen">00:00:00</div>
            <div className="buttons">
                <button className="button start-button">Start</button>
                <button className="button stop-button">Stop</button>
                <button className="button reset-button">Reset</button>
            </div>
        </div>
    </>
}

export default Stopwatch;