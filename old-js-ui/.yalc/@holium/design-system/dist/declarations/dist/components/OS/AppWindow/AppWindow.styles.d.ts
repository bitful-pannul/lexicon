import { SpaceProps, ColorProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system';
import type { ThemeType } from '../../../';
export declare type AppWindowProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps & {
    theme: ThemeType;
    isStandalone?: boolean;
    clickable?: boolean;
};
export declare const AppWindowStyle: import("styled-components").StyledComponent<any, any, object & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    theme: ThemeType;
}, string | number | symbol>;
export declare const AppWindowTitleStyle: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    theme: ThemeType;
    isStandalone?: boolean;
    clickable?: boolean;
}, never>;
export declare const AppWindowIconStyle: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    theme: ThemeType;
    isStandalone?: boolean;
    clickable?: boolean;
}, never>;
export declare const AppWindowTitleBar: import("styled-components").StyledComponent<"div", any, {}, never>;
