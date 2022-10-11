export declare const fonts: {
    body: string;
    heading: string;
    monospace: string;
};
export declare const fontByName: {
    Rubik: string;
    Oxanium: string;
    'Source Code Pro': string;
    Inter: string;
};
export declare const fontSizes: string[];
export declare const fontWeights: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
};
export declare const lineHeights: {
    solid: string;
    title: string;
    copy: string;
};
export declare const letterSpacings: {
    default: string;
    tracked: string;
};
export declare const space: number[];
export declare const sizes: number[];
export declare const breakpoints: string[];
export declare const breakpointsPx: number[];
export declare const transition = "0.2s ease";
export declare const transitionFast = "0.05s ease";
export declare const input: {
    borderWidth: string;
    borderStyle: string;
    borderRadius: number;
};
export declare const elevations: {
    none: string;
    one: string;
    two: string;
    three: string;
    lifted: string;
};
export declare const containers: {
    rounderBorderRadius: number;
    outerBorderRadius: number;
    innerBorderRadius: number;
};
export declare const theme: {
    light: {
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
    dark: {
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
                toolbar: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                disabled: string;
                placeholder: string;
                inverse: string;
                white: string;
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
};
export declare type ThemeType = typeof theme.light;
export default theme;
