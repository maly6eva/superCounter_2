import {ChangeEvent} from "react";

type InputBlockType = {
    label: string
    value: number
    hasError?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputBlock = (props: InputBlockType) => {
    const {label, value, hasError, onChange} = props
    return (
        <label>
            {label}
            <input type="number"
                   className={`input ${hasError? 'err' : ''} `}
                   value={value}
                   onChange={onChange}/>
        </label>
    );
};

