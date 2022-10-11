/// <reference types="react" />
export declare type VirtualizedListProps = {
    id?: string;
    style?: any;
    numItems: number;
    itemHeight?: number;
    renderItem: any;
};
export declare const VirtualizedList: (props: VirtualizedListProps) => JSX.Element;
