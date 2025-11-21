import {Button} from "../Button/Button.tsx";
import {ChangeEvent} from "react";
import {InputBlock} from "./InputBlock.tsx";

type SettingsInputsType = {
    max: number
    start: number
    disabled: boolean
    startCounter: (e: ChangeEvent<HTMLInputElement>) => void
    maxCounter: (e: ChangeEvent<HTMLInputElement>) => void
    setButton: () => void
}



export const SettingsInputs = (props: SettingsInputsType) => {
    const {max, start, disabled, startCounter, maxCounter, setButton} = props


    return (
        <div className="settings-box">
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
                className={`btn set-btn ${disabled ? 'disabledStyleSet' : ''}`}
                onClick={setButton}
                disabled={disabled}
                text={'Set'}
            />
        </div>
    );
};

