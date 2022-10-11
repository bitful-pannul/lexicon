import { FC } from 'react';
export declare type AppType = {
    name: string;
    icon?: any;
    color?: string;
    onClick?: (...args: any) => any;
};
declare type AppDockProps = {
    selectedApp: string;
    apps: AppType[];
};
export declare const AppDock: FC<AppDockProps>;
declare type DockButtonProps = {
    app: AppType;
    isSelected?: boolean;
};
export declare const DockButton: FC<DockButtonProps>;
export {};
