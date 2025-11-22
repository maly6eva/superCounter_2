import './App.css'

import {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./components/Button/Button.tsx";
import {ResultCounter} from "./components/ResultCounter/ResultCounter.tsx";
import {SettingsInputs} from "./components/SettingsInputs/SettingsInputs.tsx";
import button from "./components/Button/Button.module.css"


export const App = () => {
    const [count, setCount] = useState<number>(0);
    const [max, setMax] = useState(0);
    const [start, setStart] = useState(0);
    const [isSetPressed, setIsSetPressed] = useState(false)


    useEffect(() => {
        const counterMax = localStorage.getItem('counter-max')
        const counterStart = localStorage.getItem('counter-start')
        const counterCount = localStorage.getItem('counter-count')
        const counterIsSet = localStorage.getItem('counter-isSet')

        if (counterMax) {
            const newMax = JSON.parse(counterMax)
            setMax(newMax)
        }
        if (counterStart) {
            const newStart = JSON.parse(counterStart)
            setStart(newStart)
        }
        if (counterCount) {
            const newCount = JSON.parse(counterCount)
            setCount(newCount)
        }
        if (counterIsSet) {
            const isSet = JSON.parse(counterIsSet)
            setIsSetPressed(isSet)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counter-max', JSON.stringify(max))
        localStorage.setItem('counter-start', JSON.stringify(start))
        localStorage.setItem('counter-count', JSON.stringify(count))
        localStorage.setItem('counter-isSet', JSON.stringify(isSetPressed))
    }, [max, start, count, isSetPressed])


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
                <div className={button.buttons}>
                    <Button
                        className={`${button.btn} ${button.incBtn} ${count === max ? button.disabledStyleInc : ''}`}
                        onClick={resInc}
                        disabled={count === max}
                        text={'Inc'}
                    />
                    <Button
                        className={`${button.btn} ${button.resetBtn}`}
                        onClick={resReset}
                        text={'Reset'}
                    />
                </div>
            </div>
        </div>
    )
}


