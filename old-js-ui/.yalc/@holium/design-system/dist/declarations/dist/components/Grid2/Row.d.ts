/// <reference types="react" />
declare type RowType = {
    fill?: boolean;
    reverse?: boolean | Array<any>;
    align?: string | object;
    justify?: string | object;
    children?: React.ReactNode;
    debug?: boolean;
};
declare const Row: import("styled-components").StyledComponent<"div", any, RowType, never>;
export default Row;
