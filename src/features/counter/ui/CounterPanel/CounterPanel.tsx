import {incrementAC, resetAC, setIsSetPressedAC} from "@/entities/counter/model/counter-reducer.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/shared/lib/hooks/useAppSelector.ts";

import {ResultCounter} from "@/entities/counter/ui/ResultCounter/ResultCounter.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
import button from "./CounterPanel.module.css"
import {selectCounter} from "@/entities/counter/model/counter-selectors.ts";

export const CounterPanel = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)
    const resInc = () => {
        dispatch(incrementAC())
    }

    const resReset = () => {
        dispatch(resetAC())
    }
    const disabled = counter.max < 0 || counter.start < 0 || counter.start === counter.max

    return (
        <>
            <ResultCounter
                count={counter.count}
                max={counter.max}
                start={counter.start}
                isSetPressed={counter.isSetPressed}
            />
            <div className={button.buttons}>
                <Button
                    className={`${button.btn} ${button.incBtn} ${counter.count === counter.max ? button.disabledStyleInc : ''}`}
                    onClick={resInc}
                    disabled={counter.count === counter.max}
                    text={'Inc'}
                />
                <Button
                    className={`${button.btn} ${button.resetBtn}`}
                    onClick={resReset}
                    text={'Reset'}
                />
                <Button
                    className={`${button.btn} ${button.setBtn} ${disabled ? button.setBtnDisabled : ''}`}
                    onClick={() => dispatch(setIsSetPressedAC({value: false}))}
                    text={'Set'}
                />
            </div>

        </>
    );
};

