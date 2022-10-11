import * as React from 'react';
declare type Placement = 'bottom-right' | 'bottom-left' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'top';
export declare type TooltipProps = {
    delay?: number;
    style?: any;
    placement: Placement;
    content: React.ReactNode | string;
    children: React.ReactNode;
};
export declare const TooltipStyle: import("styled-components").StyledComponent<"div", any, Partial<TooltipProps>, never>;
export declare const TooltipWrapper: import("styled-components").StyledComponent<"div", any, Partial<TooltipProps>, never>;
export declare const Tooltip: {
    (props: TooltipProps): JSX.Element;
    defaultProps: {
        placement: string;
        delay: number;
    };
};
export {};
