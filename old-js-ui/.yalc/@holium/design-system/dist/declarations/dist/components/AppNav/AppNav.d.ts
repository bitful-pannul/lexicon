import { FC } from 'react';
export declare type AppNavSubRoute = {
    icon: any;
    name: string;
    uri: string;
};
export declare type AppNavProps = {
    style?: any;
    appName?: string;
    appIcon?: any;
    appColor?: string;
    selectedRouteUri: string;
    subRoutes: AppNavSubRoute[];
    onRouteClick: (route: AppNavSubRoute) => any;
    onSettingsClick: (...args: any) => any;
};
export declare const AppNav: FC<AppNavProps>;
