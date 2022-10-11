import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system';
import type { ThemeType } from '../..';
export declare const ColorLine: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CardInner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Card: import("styled-components").StyledComponent<"div", any, {
    selectable?: boolean;
} & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    ref?: any;
    selectable?: boolean;
    borderThickness?: number;
    elevation?: 'none' | 'one' | 'two' | 'three' | 'lifted';
    theme?: ThemeType;
}, never>;
