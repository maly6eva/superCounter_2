import {Button} from "../Button/Button.tsx";
import {ChangeEvent} from "react";
import {InputBlock} from "./InputBlock.tsx";
import s from './SettingsInputs.module.css';
import button from '../Button/Button.module.css'


type SettingsInputsType = {
    max: number
    start: number
    disabled: boolean
    startCounter: (e: ChangeEvent<HTMLInputElement>) => void
    maxCounter: (e: ChangeEvent<HTMLInputElement>) => void
    setButton: () => void
    setIsSetPressed: (isSet: boolean) => void
}

export const SettingsInputs = (props: SettingsInputsType) => {
    const {max, start, disabled, startCounter, maxCounter, setButton, setIsSetPressed} = props
    return (
        <div className={s.settingsBox}>
            <InputBlock
                label={'Max value:'}
                hasError={max < 0 || start === max}
                value={max}
                onChange={maxCounter}
            />
            <InputBlock
                label={'Start value:'}
                hasError={start < 0 || start === max}
                value={start}
                onChange={startCounter}
            />
            <Button
                className={`${button.btn} ${button.setBtn} ${disabled ? button.setBtnDisabled : ''}`}
                onClick={() => {
                    setButton()
                    setIsSetPressed(true)
                } }
                disabled={disabled}
                text={'Set'}
            />
        </div>
    );
};

