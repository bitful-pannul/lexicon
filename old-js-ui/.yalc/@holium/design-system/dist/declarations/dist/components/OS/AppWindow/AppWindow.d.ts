import React, { FC } from 'react';
import { ContextType } from '../Context';
declare type SubRouteType = {
    icon?: any;
    name: string;
    nav: string;
    uri: string;
};
declare type AppWindowProps = {
    isMobile?: boolean;
    style?: any;
    app: {
        icon: any;
        name: string;
        color: string;
        contextMenu?: React.ReactNode;
    };
    ship: {
        patp: string;
        avatar?: string;
        nickname?: string;
        color: string;
        contextMenu?: React.ReactNode;
    };
    loadingContext: boolean;
    isStandalone?: boolean;
    selectedContext: any;
    contexts?: any[];
    selectedRouteUri: string;
    subRoutes: SubRouteType[];
    onHomeClick?: () => any;
    onContextClick?: (context: ContextType) => any;
    onRouteClick: (route: SubRouteType) => any;
    children?: any;
};
export declare const AppWindow: FC<AppWindowProps>;
export {};
