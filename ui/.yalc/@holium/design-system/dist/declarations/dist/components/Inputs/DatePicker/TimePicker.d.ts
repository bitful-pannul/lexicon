import React from 'react';
import { UseDatepickerProps, FormatFunction } from '@datepicker-react/hooks';
export interface DatepickerProps extends UseDatepickerProps {
    displayFormat?: string | FormatFunction;
    onClose?(): void;
    showResetDates?: boolean;
    showSelectedDates?: boolean;
    showClose?: boolean;
    vertical?: boolean;
    rtl?: boolean;
    initialVisibleMonth?: Date;
    dayLabelFormat?(date: Date): string;
    weekdayLabelFormat?(date: Date): string;
    monthLabelFormat?(date: Date): string;
    onDayRender?(date: Date): React.ReactNode;
    unavailableDates?: Date[];
}
export declare const DateTimePicker: ({ startDate, endDate, minBookingDate, maxBookingDate, focusedInput, onDatesChange, dayLabelFormat, weekdayLabelFormat, monthLabelFormat, initialVisibleMonth, vertical, rtl, exactMinBookingDays, isDateBlocked, minBookingDays, numberOfMonths: numberOfMonthsProp, firstDayOfWeek: firstDayOfWeekProp, unavailableDates, }: DatepickerProps, ref?: React.Ref<unknown>) => JSX.Element;
declare const _default: React.ForwardRefExoticComponent<DatepickerProps & React.RefAttributes<unknown>>;
export default _default;
