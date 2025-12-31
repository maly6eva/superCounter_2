import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {CounterPanel} from "@/features/counter/ui/CounterPanel/CounterPanel.tsx";
import {SettingsInputs} from "@/features/counter/ui/SettingsInputs/SettingsInputs.tsx";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";
import s from "./CounterPage.module.css"
import {useAppDispatch} from "@/common/hooks";
import {useEffect} from "react";
import {setCountAC, setIsSetPressedAC, setValuesAC} from "@/features/counter/model/counter-reducer.ts";


export const CounterPage = () => {
    const counter = useAppSelector(selectCounter)

        const dispatch = useAppDispatch()
        useEffect(() => {
            const counterMax = localStorage.getItem('counter-max')
            const counterStart = localStorage.getItem('counter-start')
            const counterCount = localStorage.getItem('counter-count')
            const counterIsSet = localStorage.getItem('counter-isSet')

            if (counterMax && counterStart) {
                dispatch(setValuesAC({max: JSON.parse(counterMax), start: JSON.parse(counterStart)}))
            }
            if (counterCount) {
                dispatch(setCountAC({count: JSON.parse(counterCount)}))

            }

            if (counterIsSet) {
                dispatch(setIsSetPressedAC({value: JSON.parse(counterIsSet)}))
            }
        }, [])


        useEffect(() => {
            localStorage.setItem('counter-max', JSON.stringify(counter.max))
            localStorage.setItem('counter-start', JSON.stringify(counter.start))
            localStorage.setItem('counter-count', JSON.stringify(counter.count))
            localStorage.setItem('counter-isSet', JSON.stringify(counter.isSetPressed))
        }, [counter.max, counter.start, counter.count, counter.isSetPressed])

    return (
        <>
            {counter.isSetPressed ?
                (<div className={s.counter_box}>
                    <CounterPanel/>
                </div>)
                : (<SettingsInputs/>)}
        </>
    );
};

