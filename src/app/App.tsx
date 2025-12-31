import s from './App.module.css'
import {CounterPage} from "@/features/counter/ui/CounterPage/CounterPage.tsx";

export type CounterTypes = {
    count: number
    max: number
    start: number
    isSetPressed: boolean
}

export const App = () => {
    return (
        <div className={s.app}>
            <CounterPage/>
        </div>
    )
}


