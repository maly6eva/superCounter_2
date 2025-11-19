import './App.css'

import {ChangeEvent, useState} from "react";

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const [max, setMax] = useState(0);
    const [start, setStart] = useState(0);
    const [isSetPressed, setIsSetPressed] = useState(false)
    // const [error, setError] = useState<string | null>('')


    const startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
        setIsSetPressed(false)
    }

    const setButton = () => {
        const startValue = start;
        setCount(prev => prev + startValue)
        setIsSetPressed(true)
    }

    const resInc = () => {
        setCount(prev => {
            const next = prev + 1
            return next > max ? max : next
        })
    }

    const resReset = () => {
        setCount(start)
        setIsSetPressed(false)
    }

    const disabled = start < 0 || max < 0 || start === max || isSetPressed
    return (
        <div className="app">
            <div className="settings-box">
                <label>
                    Max value:
                    <input type="number" className={`input ${start < 0 ? 'err' : ''} `} value={max}
                           onChange={e => setMax(+e.currentTarget.value)}/>
                </label>

                <label>
                    Start value:
                    <input type="number" className={`input ${start < 0 ? 'err' : ''}`} value={start}
                           onChange={startCounter}/>
                </label>

                <button className={`btn set-btn ${disabled ? 'disabledStyleSet' : ''}`} onClick={setButton}
                        disabled={disabled}>Set
                </button>
            </div>

            <div className="counter-box">
                <h2 className={`count-value ${count === max ? 'count-red' : ''}`}>  {count ? count : "Enter values and press 'set'"}</h2>
                <div className="buttons">
                    <button className={`btn inc-btn ${count === max ? 'disabledStyleInc' : ''}`} onClick={resInc}>Inc
                    </button>
                    <button className="btn reset-btn" onClick={resReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}
