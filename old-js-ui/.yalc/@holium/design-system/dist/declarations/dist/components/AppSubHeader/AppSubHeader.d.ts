import { FC } from 'react';
declare type BreadcrumbType = {
    name: string;
    uri?: string;
    icon?: any;
};
declare type AppNameProps = {
    style?: any;
    appName: string;
    appColor?: string;
    breadcrumbs?: BreadcrumbType[];
    onCrumbClick?: (uri: string) => any;
};
export declare const AppSubHeader: FC<AppNameProps>;
export declare const CrumbContainer: import("styled-components").StyledComponent<"div", any, {
    isLink?: any;
    theme?: any;
}, never>;
export {};
