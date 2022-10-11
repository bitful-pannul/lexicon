import { ColorProps, SpaceProps } from 'styled-system';
import { ThemeType, IntentTypes } from '../../';
export declare type TagStyleProps = ColorProps & SpaceProps & {
    theme: ThemeType;
    intent?: IntentTypes;
    minimal?: boolean;
    custom?: string;
    rounded?: boolean;
};
export declare const TagStyle: import("styled-components").StyledComponent<"div", any, ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
    intent?: IntentTypes;
    minimal?: boolean;
    custom?: string;
    rounded?: boolean;
}, never>;
export declare const TagIcon: import("styled-components").StyledComponent<"div", any, ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
    intent?: IntentTypes;
    minimal?: boolean;
    custom?: string;
    rounded?: boolean;
}, never>;
