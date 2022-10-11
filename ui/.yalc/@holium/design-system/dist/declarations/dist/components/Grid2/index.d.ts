/// <reference types="react" />
export declare const Grid2: {
    Row: import("styled-components").StyledComponent<"div", any, {
        fill?: boolean;
        reverse?: boolean | any[];
        align?: string | object;
        justify?: string | object;
        children?: import("react").ReactNode;
        debug?: boolean;
    }, never>;
    Column: import("styled-components").StyledComponent<"div", any, import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
        xs?: string | number;
        sm?: string | number;
        md?: string | number;
        lg?: string | number;
        xl?: string | number;
        align?: string | object;
        justify?: string | object;
        order?: number | object;
        gap?: number;
        offset?: number | object;
        reverse?: boolean | any[];
        noGutter?: boolean;
        children?: import("react").ReactNode;
        debug?: boolean;
    }, never>;
    Box: import("styled-components").StyledComponent<"div", any, import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
        fluid?: boolean;
        scroll?: boolean;
        offset?: number;
        children: import("react").ReactNode;
        debug?: boolean;
        theme?: {
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
};
export default Grid2;
