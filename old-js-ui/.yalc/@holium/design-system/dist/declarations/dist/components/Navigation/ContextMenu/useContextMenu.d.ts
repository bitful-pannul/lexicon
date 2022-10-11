/// <reference types="react" />
declare const useContextMenu: (containerId: string, ref: any, menuRef: any) => {
    anchorPoint: {
        x: number;
        y: number;
    };
    show: boolean;
    setShow: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useContextMenu;
