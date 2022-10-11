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
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11.9999 3C11.2043 3 10.4412 3.31607 9.87861 3.87868C9.316 4.44129 8.99993 5.20435 8.99993 6V10C8.99993 10.7956 9.316 11.5587 9.87861 12.1213C10.4412 12.6839 11.2043 13 11.9999 13C12.7956 13 13.5586 12.6839 14.1213 12.1213C14.6839 11.5587 14.9999 10.7956 14.9999 10V6C14.9999 5.20435 14.6839 4.44129 14.1213 3.87868C13.5586 3.31607 12.7956 3 11.9999 3ZM11.9999 1C12.6565 1 13.3067 1.12933 13.9133 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6193 4.08658C16.8706 4.69321 16.9999 5.34339 16.9999 6V10C16.9999 11.3261 16.4731 12.5979 15.5355 13.5355C14.5978 14.4732 13.326 15 11.9999 15C10.6738 15 9.40208 14.4732 8.4644 13.5355C7.52672 12.5979 6.99993 11.3261 6.99993 10V6C6.99993 4.67392 7.52672 3.40215 8.4644 2.46447C9.40208 1.52678 10.6738 1 11.9999 1V1ZM3.05493 11H5.06993C5.31222 12.6648 6.1458 14.1867 7.41816 15.2873C8.69053 16.3879 10.3166 16.9936 11.9989 16.9936C13.6813 16.9936 15.3073 16.3879 16.5797 15.2873C17.8521 14.1867 18.6856 12.6648 18.9279 11H20.9439C20.7166 13.0287 19.8066 14.9199 18.3631 16.3635C16.9197 17.8071 15.0286 18.7174 12.9999 18.945V23H10.9999V18.945C8.97107 18.7176 7.07972 17.8074 5.63611 16.3638C4.1925 14.9202 3.28234 13.0289 3.05493 11V11Z" />
    </svg>
  );
});
const SvgVisibilityOff = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default SvgVisibilityOff;
