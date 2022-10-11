import { SpaceProps, FlexboxProps, LayoutProps, PositionProps } from 'styled-system';
export declare type FlexProps = FlexboxProps & SpaceProps & LayoutProps & PositionProps & {
    fx?: number | string;
    gap?: number | string;
    itemsCenter?: boolean;
    justifyCenter: boolean;
};
export declare const Flex: any;
