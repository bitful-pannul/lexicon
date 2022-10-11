export declare type IntentProps = {
    intent?: 'primary' | 'alert' | 'caution' | 'success' | 'info';
};
export declare type MenuItemProps = {
    icon?: any;
    style?: any;
    tabIndex?: number;
    label: string;
    disabled?: boolean;
    selected?: boolean;
    children?: any;
    section?: number;
    type?: 'neutral' | 'brand';
    onClick: (...args: any) => void;
    subMenu?: any[];
} & IntentProps;
export declare const MenuItem: any;
