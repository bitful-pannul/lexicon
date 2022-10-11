import { BorderProps, SpaceProps } from 'styled-system';
import type { ThemeType } from '../../';
export declare type KPIStyleProps = BorderProps & SpaceProps & {
    theme: ThemeType;
};
export declare const KPILabel: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
}, never>;
export declare const KPIValue: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
}, never>;
export declare const KPIIcon: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    theme: ThemeType;
}, never>;
