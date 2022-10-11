import * as React from 'react';
declare type PageType = 'full' | 'sidebar' | 'centered';
export declare type PageProps = {
    type: PageType;
    bordered: boolean;
    noCard: boolean;
    sidebar?: React.ReactNode;
    rightPane?: React.ReactNode;
    spacing?: number;
    children?: React.ReactNode;
};
export declare const Page: any;
declare const FullPage: (props: Partial<PageProps>) => JSX.Element;
declare const Sidebar: (props: Partial<PageProps>) => JSX.Element;
declare const CenteredPane: {
    (props: Partial<PageProps> & {
        width?: number | string;
        style?: any;
    }): JSX.Element;
    defaultProps: {
        bordered: boolean;
        onSurface: boolean;
        spacing: number;
    };
};
declare const PageTop: (props: any) => JSX.Element;
declare const PageViewPort: (props: any) => JSX.Element;
export { CenteredPane, Sidebar, FullPage, PageTop, PageViewPort };
