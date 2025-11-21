import './App.css'

import {ChangeEvent, useState} from "react";
import {Button} from "./components/Button/Button.tsx";
import {ResultCounter} from "./components/ResultCounter/ResultCounter.tsx";
import {SettingsInputs} from "./components/SettingsInputs/SettingsInputs.tsx";


export const App = () => {
    const [count, setCount] = useState<number>(0);
    const [max, setMax] = useState(0);
    const [start, setStart] = useState(0);
    const [isSetPressed, setIsSetPressed] = useState(false)


    const startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
        setIsSetPressed(false)
    }

    const maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
        setIsSetPressed(false)
    }

    const setButton = () => {
        setCount(start);
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
        setIsSetPressed(true)
    }

    const disabled = max < 0 || start < 0 || start === max || isSetPressed

    return (
        <div className="app">
            <SettingsInputs
                max={max}
                start={start}
                disabled={disabled}
                startCounter={startCounter}
                maxCounter={maxCounter}
                setButton={setButton}
            />
            <div className="counter-box">
                <ResultCounter
                    count={count}
                    max={max}
                    start={start}
                    isSetPressed={isSetPressed}
                />
                <div className="buttons">
                    <Button className={`btn inc-btn ${count === max ? 'disabledStyleInc' : ''}`} onClick={resInc}
                            text={'Inc'}/>
                    <Button className="btn reset-btn" onClick={resReset} text={'Reset'}/>
                </div>
            </div>
        </div>
    )
}


