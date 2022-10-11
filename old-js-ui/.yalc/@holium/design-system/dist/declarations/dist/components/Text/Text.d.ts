import type { ThemeType } from '../..';
import { TypographyFunctionsProps } from '../typography-functions';
export declare type TextProps = {
    fontByName?: 'Inter' | 'Oxanium' | 'Source Code Pro' | 'Rubik';
    fontByType?: 'body' | 'heading' | 'monospace';
    variant?: 'body' | 'caption' | 'hint' | 'label' | 'patp' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit';
    theme?: ThemeType;
} & TypographyFunctionsProps;
export declare const Text: import("styled-components").StyledComponent<"p", any, {
    fontByName?: 'Inter' | 'Oxanium' | 'Source Code Pro' | 'Rubik';
    fontByType?: 'body' | 'heading' | 'monospace';
    variant?: 'body' | 'caption' | 'hint' | 'label' | 'patp' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit';
    theme?: ThemeType;
} & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & import("styled-system").PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, never>;
