import { FC } from 'react';
export declare const TimeInputBox: any;
declare type DayProps = {
    onTimeSelect: (time: Date) => void;
    is24?: boolean;
    showSeconds?: boolean;
    date: Date;
};
export declare const TimeInput: FC<DayProps>;
export default TimeInput;
