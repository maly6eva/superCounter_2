type ButtonProps = {
    text: string
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export const Button = (props:ButtonProps) => {
    const {
        text,
        onClick,
        className = '',
        disabled = false
    } = props
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};


// import s from './Button.module.css';
// import type {ButtonHTMLAttributes} from 'react';
//
// type ButtonProps = {
//     text?: string;
//     onClick?: () => void;
//     numb?: 'one' | 'two' | 'three';
//     size?: 'small' | 'medium' | 'large';
// } & ButtonHTMLAttributes<HTMLButtonElement>;
//
// export const Button = ({
//                            text = 'Click me!',
//                            onClick,
//                            numb = 'one',
//                            size = 'medium',
//                            type = 'button',
//                        }: ButtonProps) => {
//     return (
//         <button
//             className={`${s.button} ${s[numb]} ${s[size]}`}
//             onClick={onClick}
//             type={type}
//         >
//             {text}
//         </button>
//     );
// };
