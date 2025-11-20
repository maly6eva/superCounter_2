type ResultCountertype = {
    count: number
    max: number
    start: number
    isSetPressed: boolean
}

export const ResultCounter = (props: ResultCountertype) => {
    const {count, max, start, isSetPressed} = props
    const errorMaxOrStart = max < 0 || start < 0 || start === max
    return (
        <h2 className={`count-value ${count === max || errorMaxOrStart ? 'count-red' : ''}`}>   {
            errorMaxOrStart
                ? "Incorrect value!"
                : isSetPressed
                    ? count
                    : "Enter values and press 'Set'"}
        </h2>
    );
};

// export const ResultCounter = ({count, max, start, isSetPressed}: ResultCountertype) => {
//     const error = max < 0 || start < 0 || start === max;
//
//     let text;
//     if (error) text = "Incorrect value!";
//     else if (!isSetPressed) text = "Enter values and press 'Set'";
//     else text = count;
//
//     return (
//         <h2 className={`count-value ${error || count === max ? 'count-red' : ''}`}>
//             {text}
//         </h2>
//     );
// };