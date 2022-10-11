/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
import { TypographyFunctionsProps } from '../../typography-functions';
declare type StyledLabelProps = {
    /** Apply the mandatory adornment */
    required?: boolean;
    /** A custom adornment to apply */
    adornment?: 'required' | string | JSX.Element;
    /** HTML element to render */
    as?: 'label' | 'legend';
} & TypographyFunctionsProps;
export declare type LabelProps = StyledComponentProps<'label', any, StyledLabelProps, never>;
export declare const Label: any;
export {};
