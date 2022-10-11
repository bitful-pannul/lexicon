import { FC } from 'react';
import { SpaceProps, ColorProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system';
import type { ThemeType } from '../../../theme';
export declare type SubRouteStyleProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps & {
    color: string;
    isSelected?: boolean;
    theme: ThemeType;
};
export declare const SubRouteStyle: import("styled-components").StyledComponent<"button", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    color: string;
    isSelected?: boolean;
    theme: ThemeType;
}, never>;
export declare type SubRouteNavProps = {
    name: string;
    path: string;
    selected: boolean;
    color: string;
    onClick?: any;
};
export declare const SubRouteNav: FC<SubRouteNavProps>;
export declare type SubRouteWrapperProps = {
    isMobile: boolean;
    children?: any;
};
export declare type SubRouteWrapperStyleProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps & SubRouteWrapperProps & {
    theme: ThemeType;
};
export declare const SubRouteWrapperStyle: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & SubRouteWrapperProps & {
    theme: ThemeType;
}, never>;
export declare const SubRouteWrapper: FC<SubRouteWrapperProps>;
