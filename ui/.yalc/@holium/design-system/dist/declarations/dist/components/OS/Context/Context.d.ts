import React, { FC } from 'react';
import { MenuOrientation } from '../../Navigation';
export declare type ContextType = {
    type: 'ship';
    name: string;
    meta: {
        color: string;
        avatar?: string;
        nickname?: string;
    };
} | {
    type: 'group';
    name: string;
    meta: {
        color: string;
        picture?: string;
        title?: string;
    };
};
declare type ContextProps = {
    style?: any;
    loading?: boolean;
    menuOrientation: MenuOrientation;
    selectedContext?: ContextType;
    availableContexts: ContextType[];
    customMenu?: React.ReactNode;
    onContextClick?: (context: ContextType) => any;
};
export declare const Context: FC<ContextProps>;
export {};
