/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
import { TypographyFunctionsProps } from '../../typography-functions';
export declare type InputProps = StyledComponentProps<'input', any, {
    /** Icon or ‘Interactive Icon’ adornment to apply to the left of the content area */
    leftIcon?: JSX.Element;
    leftInteractive?: boolean;
    /** Icon or ‘Interactive Icon’ adornment to apply to the right of the content area */
    rightIcon?: JSX.Element;
    rightInteractive?: boolean;
    /** Does the input have a validation error */
    error?: boolean;
    variant: any;
    small?: boolean;
} & TypographyFunctionsProps, never>;
export declare const Input: any;
