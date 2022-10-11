import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';
import { uuid } from './uuid';
export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;
const SvgComponent = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: any;
  }
>(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentcolor"
      stroke="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M20 2C20.552 2 21 2.448 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V3C3 2.448 3.448 2 4 2H20ZM21.778 8.808L23.192 10.222L15.414 18L13.998 17.998L14 16.586L21.778 8.808V8.808ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z" />
    </svg>
  );
});
const SvgEle = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default SvgEle;
