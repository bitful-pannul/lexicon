import React from 'react';
export declare const datepickerContextDefaultValue: {
    focusedDate: any;
    isDateFocused: (_date: Date) => boolean;
    isDateSelected: (_date: Date) => boolean;
    isDateHovered: (_date: Date) => boolean;
    isDateBlocked: (_date: Date) => boolean;
    isFirstOrLastSelectedDate: (_date: Date) => boolean;
    onDateFocus: (_date: Date) => void;
    onDateHover: (_date: Date) => void;
    onDateSelect: (_date: Date) => void;
};
declare const _default: React.Context<{
    focusedDate: any;
    isDateFocused: (_date: Date) => boolean;
    isDateSelected: (_date: Date) => boolean;
    isDateHovered: (_date: Date) => boolean;
    isDateBlocked: (_date: Date) => boolean;
    isFirstOrLastSelectedDate: (_date: Date) => boolean;
    onDateFocus: (_date: Date) => void;
    onDateHover: (_date: Date) => void;
    onDateSelect: (_date: Date) => void;
}>;
export default _default;
