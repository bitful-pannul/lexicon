import React from 'react';
import { SpaceProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system';
import { BoxProps } from '../';
export declare type SimpleSpinnerProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;
export interface SpinnerProps extends BoxProps {
    block?: boolean;
    title?: string;
    color?: string;
    size?: number;
}
export declare const Spinner: React.MemoExoticComponent<({ block, title, size, color, ...props }?: SpinnerProps) => JSX.Element>;
