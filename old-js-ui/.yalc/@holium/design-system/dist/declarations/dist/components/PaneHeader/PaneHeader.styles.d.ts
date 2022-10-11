import { BorderProps, SpaceProps, TypographyProps } from 'styled-system';
export declare type PaneHeaderStyleProps = BorderProps & SpaceProps & TypographyProps & {
    paneHeight?: number;
    centerVertical?: boolean;
    padding?: number;
    noBorder?: boolean;
    theme: any;
};
export declare const PaneHeaderText: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    paneHeight?: number;
    centerVertical?: boolean;
    padding?: number;
    noBorder?: boolean;
    theme: any;
}, never>;
export declare const PaneHeaderStyle: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    paneHeight?: number;
    centerVertical?: boolean;
    padding?: number;
    noBorder?: boolean;
    theme: any;
}, never>;
