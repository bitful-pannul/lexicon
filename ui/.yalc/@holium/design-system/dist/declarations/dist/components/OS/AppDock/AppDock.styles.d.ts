import { BorderProps, SpaceProps } from 'styled-system';
import type { ThemeType } from '../../../';
export declare type AppDockStyleProps = BorderProps & SpaceProps & {
    theme: ThemeType;
    baseColor?: string;
};
export declare const AppDockStyle: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
    baseColor?: string;
}, never>;
export declare const DockDivider: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
    baseColor?: string;
}, never>;
