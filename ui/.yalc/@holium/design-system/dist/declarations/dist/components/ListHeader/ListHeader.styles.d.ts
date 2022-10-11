/// <reference types="react" />
import { SpaceProps, BorderProps, TypographyProps } from 'styled-system';
import type { ThemeType } from '../../theme';
export declare type ListHeaderStyleProps = BorderProps & SpaceProps & TypographyProps & {
    paneHeight?: number;
    centerVertical?: boolean;
    padding?: number;
    noBorder?: boolean;
    theme: ThemeType;
};
export declare type OptionProps = {
    selected?: boolean;
    disabled?: boolean;
    theme: ThemeType;
};
declare const _default: {
    HeaderButton: import("styled-components").StyledComponent<(props: any) => JSX.Element, any, {}, never>;
    ListHeaderStyle: import("styled-components").StyledComponent<"div", any, BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
        paneHeight?: number;
        centerVertical?: boolean;
        padding?: number;
        noBorder?: boolean;
        theme: {
            space: number[];
            sizes: number[];
            elevations: {
                none: string;
                one: string;
                two: string;
                three: string;
                lifted: string;
            };
            fonts: {
                body: string;
                heading: string;
                monospace: string;
            };
            fontByName: {
                Rubik: string;
                Oxanium: string;
                'Source Code Pro': string;
                Inter: string;
            };
            fontSizes: string[];
            fontWeights: {
                light: number;
                regular: number;
                medium: number;
                semiBold: number;
                bold: number;
                extraBold: number;
            };
            lineHeights: {
                solid: string;
                title: string;
                copy: string;
            };
            letterSpacings: {
                default: string;
                tracked: string;
            };
            breakpoints: string[];
            breakpointsPx: number[];
            transition: string;
            transitionFast: string;
            input: {
                borderWidth: string;
                borderStyle: string;
                borderRadius: number;
            };
            containers: {
                rounderBorderRadius: number;
                outerBorderRadius: number;
                innerBorderRadius: number;
            };
            colors: {
                brand: {
                    primary: string;
                    secondary: string;
                    neutral: string;
                    accent: string;
                    muted: string;
                };
                ui: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    quaternary: string;
                    disabled: string;
                    intent: {
                        info: string;
                        success: string;
                        caution: string;
                        alert: string;
                    };
                    borderColor: string;
                    input: {
                        background: string;
                        secondary: string;
                        borderColor: string;
                        borderHover: string;
                    };
                };
                os: {
                    tray: string;
                    base: string;
                };
                bg: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    inset: string;
                    toolbar: string;
                    divider: string;
                };
                icon: {
                    app: string;
                    bgButton: string;
                    toolbar: string;
                };
                text: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    disabled: string;
                    placeholder: string;
                    white: string;
                    inverse: string;
                    error: string;
                    success: string;
                };
                highlights: {
                    primaryHighlight: string;
                    primaryExtraHighlight: string;
                    bgHighlight: string;
                    bgSoftHighlight: string;
                };
            };
        };
    }, never>;
    OptionButton: import("styled-components").StyledComponent<"button", any, OptionProps, never>;
};
export default _default;
