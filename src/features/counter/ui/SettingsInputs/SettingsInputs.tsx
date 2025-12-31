import {Button} from "@/common/components/Button/Button.tsx";
import {ChangeEvent} from "react";
import {InputBlock} from "@/common/components/InputBlock/InputBlock.tsx";
import s from './SettingsInputs.module.css';
import button from '@/common/components/Button/Button.module.css'
import {setCountAC, setIsSetPressedAC, setValuesAC} from "@/features/counter/model/counter-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectCounter} from "@/features/counter/model/counter-selectors.ts";


export const SettingsInputs = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)
    const startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC({max: counter.max, start: +e.currentTarget.value}))
        dispatch(setIsSetPressedAC({value: false}))
    }

    const maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValuesAC({max: +e.currentTarget.value, start: counter.start}))
        dispatch(setIsSetPressedAC({value: false}))
    }

    const setButton = () => {
        dispatch(setCountAC({count: counter.start}));
        dispatch(setIsSetPressedAC({value: true}))
    }


    const disabled = counter.max < 0 || counter.start < 0 || counter.start === counter.max
    return (
        <div className={s.settingsBox}>
            <InputBlock
                label={'Max value:'}
                hasError={counter.max < 0 || counter.start === counter.max}
                value={counter.max}
                onChange={maxCounter}
            />
            <InputBlock
                label={'Start value:'}
                hasError={counter.start < 0 || counter.start === counter.max}
                value={counter.start}
                onChange={startCounter}
            />
            <Button
                className={`${button.btn} ${button.setBtn} ${disabled ? button.setBtnDisabled : ''}`}
                onClick={() => {
                    setButton()
                    dispatch(setIsSetPressedAC({value: true}))
                } }
                disabled={disabled}
                text={'Set'}
            />
        </div>
    );
};

