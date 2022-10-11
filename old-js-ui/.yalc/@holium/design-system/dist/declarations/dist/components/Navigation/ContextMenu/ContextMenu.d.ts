/// <reference types="react" />
export declare type ContextMenuProps = {
    containerId: string;
    parentRef: any;
    menuItemtype?: 'neutral' | 'brand';
    menu: any[];
};
export declare const ContextMenu: {
    (props: ContextMenuProps): JSX.Element;
    defaultProps: {
        menuItemtype: string;
    };
};
export default ContextMenu;
