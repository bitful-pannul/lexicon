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
      <path d="M20 20.3331V22.0001H18V20.6671L10.582 21.9031C10.5104 21.915 10.4371 21.9112 10.3671 21.8919C10.2971 21.8726 10.2322 21.8383 10.1768 21.7914C10.1214 21.7445 10.0769 21.6861 10.0464 21.6202C10.0159 21.5544 10 21.4827 10 21.4101V20.0001H6V22.0001H4V20.0001H3C2.73478 20.0001 2.48043 19.8947 2.29289 19.7072C2.10536 19.5197 2 19.2653 2 19.0001V4.0001C2 3.73489 2.10536 3.48053 2.29289 3.29299C2.48043 3.10546 2.73478 3.0001 3 3.0001H10V1.5901C10 1.51752 10.0159 1.44582 10.0464 1.37998C10.0769 1.31413 10.1214 1.25573 10.1768 1.20881C10.2322 1.1619 10.2971 1.12761 10.3671 1.10832C10.4371 1.08903 10.5104 1.0852 10.582 1.0971L21.164 2.8611C21.3975 2.89992 21.6097 3.02031 21.7627 3.20086C21.9158 3.3814 21.9999 3.6104 22 3.8471V6.0001H23V8.0001H22V15.0001H23V17.0001H22V19.1531C21.9999 19.3898 21.9158 19.6188 21.7627 19.7993C21.6097 19.9799 21.3975 20.1003 21.164 20.1391L20 20.3331ZM4 5.0001V18.0001H10V5.0001H4ZM12 19.6401L20 18.3061V4.6941L12 3.3611V19.6391V19.6401ZM16.5 14.0001C15.672 14.0001 15 12.8801 15 11.5001C15 10.1201 15.672 9.0001 16.5 9.0001C17.328 9.0001 18 10.1201 18 11.5001C18 12.8801 17.328 14.0001 16.5 14.0001Z" />
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
