import { ColorProps, SpaceProps } from 'styled-system';
import type { ThemeType } from '../../';
export declare type NotificationStyleProps = ColorProps & SpaceProps & {
    theme: ThemeType;
    customColor?: string;
    hasBorder?: boolean;
};
export declare const NotificationStyle: import("styled-components").StyledComponent<"div", any, ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
    customColor?: string;
    hasBorder?: boolean;
}, never>;
