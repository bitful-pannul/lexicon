import React, { FC } from 'react';
import { FormatFunction, FirstDayOfWeek } from '@datepicker-react/hooks';
export interface OnDateChangeProps {
    date: Date | null;
    showDatepicker: boolean;
}
export interface DateSingleInputProps {
    date: Date | null;
    tabIndex?: number;
    minBookingDate?: Date;
    maxBookingDate?: Date;
    numberOfMonths?: number;
    firstDayOfWeek?: FirstDayOfWeek;
    displayFormat?: string | FormatFunction;
    showCalendarIcon?: boolean;
    showResetDate?: boolean;
    showClose?: boolean;
    placement?: 'top' | 'bottom';
    initialVisibleMonth?: Date;
    onDateChange: (data: OnDateChangeProps) => void;
    onFocusChange: (focusInput: boolean) => void;
    isDateBlocked?: (date: Date) => boolean;
    onClose?: () => void;
    dayLabelFormat?: (date: Date) => string;
    weekdayLabelFormat?: (date: Date) => string;
    monthLabelFormat?: (date: Date) => string;
    onDayRender?: (date: Date) => React.ReactNode;
    inputId?: string;
    unavailableDates?: Date[];
}
export declare const DateSingleInput: FC<DateSingleInputProps>;
export default DateSingleInput;
