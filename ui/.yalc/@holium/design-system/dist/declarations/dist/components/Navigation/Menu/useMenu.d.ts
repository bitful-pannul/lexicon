/// <reference types="react" />
import { MenuOrientation } from './types';
export declare const calculateAnchorPoint: (event: any, orientation: MenuOrientation, padding?: number, menuWidth?: number) => {
    x: any;
    y: any;
};
export declare const useMenu: (ref: any, config: {
    orientation: MenuOrientation;
    padding: number;
    menuWidth?: any;
}) => {
    anchorPoint: {
        x: number;
        y: number;
    };
    show: boolean;
    setShow: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useMenu;
