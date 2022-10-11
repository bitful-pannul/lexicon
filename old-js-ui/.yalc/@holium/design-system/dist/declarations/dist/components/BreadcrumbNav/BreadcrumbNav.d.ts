import { FC } from 'react';
export declare const BreadcrumbNavStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type CrumbType = {
    onClick?: () => void;
    label: string;
    icon?: any;
};
declare type BreadcrumbNavProps = {
    crumbs: CrumbType[];
    onBack?: () => void;
};
export declare const BreadcrumbNav: FC<BreadcrumbNavProps>;
export {};
