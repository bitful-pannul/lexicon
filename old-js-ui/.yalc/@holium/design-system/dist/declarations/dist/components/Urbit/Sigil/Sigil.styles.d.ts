import { BorderProps } from 'styled-system';
export declare type SigilStyleProps = BorderProps & {
    clickable?: boolean;
    active?: boolean;
    sigilColor?: string;
    sigilSize?: number;
    borderRadiusOverride?: string;
    theme: any;
};
export declare const AvatarWrapper: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & {
    clickable?: boolean;
    active?: boolean;
    sigilColor?: string;
    sigilSize?: number;
    borderRadiusOverride?: string;
    theme: any;
}, never>;
export declare const SigilStyle: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & {
    clickable?: boolean;
    active?: boolean;
    sigilColor?: string;
    sigilSize?: number;
    borderRadiusOverride?: string;
    theme: any;
}, never>;
