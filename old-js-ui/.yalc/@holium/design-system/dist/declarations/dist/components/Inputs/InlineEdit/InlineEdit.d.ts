/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
import { TypographyFunctionsProps } from '../../typography-functions';
import type { ThemeType } from '../../../theme';
export declare type InlineEditProps = StyledComponentProps<'input', any, {
    /** Icon or ‘Interactive Icon’ adornment to apply to the left of the content area */
    leftIcon?: JSX.Element;
    /** Icon or ‘Interactive Icon’ adornment to apply to the right of the content area */
    rightIcon?: JSX.Element;
    /** Does the input have a validation error */
    error?: boolean;
} & TypographyFunctionsProps, never> & {
    theme: ThemeType;
};
export declare const InlineEdit: any;
