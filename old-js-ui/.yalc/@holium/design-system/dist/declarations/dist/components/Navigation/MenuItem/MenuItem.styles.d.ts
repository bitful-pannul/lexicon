import { SpaceProps, ColorProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system';
import type { ThemeType } from '../../../theme';
import { IntentProps } from './MenuItem';
export declare type StyleProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps & IntentProps & {
    theme: ThemeType;
    highlightType?: 'neutral' | 'brand' | null;
    selected?: boolean;
    disabled?: boolean;
    interaction?: boolean;
};
export declare const MenuItemStyle: any;
export declare const ChildrenBox: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & IntentProps & {
    theme: ThemeType;
    highlightType?: 'neutral' | 'brand' | null;
    selected?: boolean;
    disabled?: boolean;
    interaction?: boolean;
}, never>;
export default MenuItemStyle;
