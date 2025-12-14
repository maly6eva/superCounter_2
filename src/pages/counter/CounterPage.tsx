import {useAppSelector} from "@/shared/lib/hooks/useAppSelector.ts";
import {CounterPanel} from "@/features/counter/ui/CounterPanel/CounterPanel.tsx";
import {SettingsInputs} from "@/features/counter/ui/SettingsInputs/SettingsInputs.tsx";
import {selectCounter} from "@/entities/counter/model/counter-selectors.ts";
import s from "./CounterPage.module.css"


export const CounterPage = () => {
    const counter = useAppSelector(selectCounter)

    // useEffect(() => {
    //     const counterMax = localStorage.getItem('counter-max')
    //     const counterStart = localStorage.getItem('counter-start')
    //     const counterCount = localStorage.getItem('counter-count')
    //     const counterIsSet = localStorage.getItem('counter-isSet')
    //
    //     if (counterMax) {
    //         const newMax = JSON.parse(counterMax)
    //         setMax(newMax)
    //     }
    //     if (counterStart) {
    //         const newStart = JSON.parse(counterStart)
    //         setStart(newStart)
    //     }
    //     if (counterCount) {
    //         const newCount = JSON.parse(counterCount)
    //         setCount(newCount)
    //     }
    //     if (counterIsSet) {
    //         const isSet = JSON.parse(counterIsSet)
    //         setIsSetPressed(isSet)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counter-max', JSON.stringify(max))
    //     localStorage.setItem('counter-start', JSON.stringify(start))
    //     localStorage.setItem('counter-count', JSON.stringify(count))
    //     localStorage.setItem('counter-isSet', JSON.stringify(isSetPressed))
    // }, [max, start, count, isSetPressed])

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

