import { BorderProps, SpaceProps } from 'styled-system';
import type { ThemeType } from '../../';
export declare type TrayButtonStyleProps = BorderProps & SpaceProps & {
    theme: ThemeType;
    baseColor?: string;
    noRestingBg?: boolean;
    circular?: boolean;
    transparency?: number;
};
export declare const TrayButtonStyle: import("styled-components").StyledComponent<"button", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
    baseColor?: string;
    noRestingBg?: boolean;
    circular?: boolean;
    transparency?: number;
}, never>;
