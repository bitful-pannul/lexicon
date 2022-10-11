import React, { FC } from 'react';
export declare type HeaderProps = {
    title: string | React.ReactNode;
    subtitle?: {
        patp?: boolean;
        text: string;
    };
    rightContent?: React.ReactNode;
    children?: React.ReactNode;
    onBack?: () => void;
};
export declare const Header: FC<HeaderProps>;
