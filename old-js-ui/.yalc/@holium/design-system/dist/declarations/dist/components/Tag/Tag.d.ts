import { IntentTypes } from '../';
export declare type TagProps = {
    label: string;
    minimal?: boolean;
    custom?: string;
    intent: IntentTypes;
    icon?: any;
    rounded?: boolean;
    removable?: boolean;
    onRemove?: (evt: any) => any;
};
export declare const Tag: any;
