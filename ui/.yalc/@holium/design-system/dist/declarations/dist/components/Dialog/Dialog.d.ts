import React, { FC } from 'react';
declare type DialogProps = {
    title?: string;
    icon?: React.ReactNode;
    variant: 'simple' | 'bordered';
    hasCloseButton: boolean;
    primaryButton?: React.ReactNode;
    secondaryButton?: React.ReactNode;
    backdropOpacity: number;
    closeOnBackdropClick: boolean;
    isShowing: boolean;
    onHide: (...args: any) => any;
};
export declare const Dialog: FC<DialogProps>;
export default Dialog;
