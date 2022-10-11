import { SpaceProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system';
export declare type SimpleAppButtonProps = SpaceProps & ColorProps & LayoutProps & TypographyProps & {
    disabled?: boolean;
    selected?: boolean;
};
export declare const AppButtonStyle: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const AppText: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    disabled?: boolean;
    selected?: boolean;
}, never>;
