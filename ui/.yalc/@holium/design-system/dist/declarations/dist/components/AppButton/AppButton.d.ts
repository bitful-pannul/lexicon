import { FC } from 'react';
export declare type AppButtonProps = {
    id?: any;
    buttonRef?: any;
    name: string;
    tooltip?: boolean;
    expanded?: boolean;
    disabled?: boolean;
    selected?: boolean;
    onAppClick: (...args: any) => void;
    icon: any;
};
export declare const AppButton: FC<AppButtonProps>;
