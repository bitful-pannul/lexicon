import { SpaceProps, LayoutProps } from 'styled-system';
import type { ThemeType } from '..';
declare const Container: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    fluid?: boolean;
    scroll?: boolean;
    offset?: number;
    children: React.ReactNode;
    debug?: boolean;
    theme?: ThemeType;
}, never>;
export default Container;
