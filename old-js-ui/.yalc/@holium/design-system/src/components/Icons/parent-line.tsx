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

      <path d="M7 9C7.66304 9 8.29893 8.73661 8.76777 8.26777C9.23661 7.79893 9.5 7.16304 9.5 6.5C9.5 5.83696 9.23661 5.20107 8.76777 4.73223C8.29893 4.26339 7.66304 4 7 4C6.33696 4 5.70107 4.26339 5.23223 4.73223C4.76339 5.20107 4.5 5.83696 4.5 6.5C4.5 7.16304 4.76339 7.79893 5.23223 8.26777C5.70107 8.73661 6.33696 9 7 9ZM7 11C6.40905 11 5.82389 10.8836 5.27792 10.6575C4.73196 10.4313 4.23588 10.0998 3.81802 9.68198C3.40016 9.26412 3.06869 8.76804 2.84254 8.22208C2.6164 7.67611 2.5 7.09095 2.5 6.5C2.5 5.90905 2.6164 5.32389 2.84254 4.77792C3.06869 4.23196 3.40016 3.73588 3.81802 3.31802C4.23588 2.90016 4.73196 2.56869 5.27792 2.34254C5.82389 2.1164 6.40905 2 7 2C8.19347 2 9.33807 2.47411 10.182 3.31802C11.0259 4.16193 11.5 5.30653 11.5 6.5C11.5 7.69347 11.0259 8.83807 10.182 9.68198C9.33807 10.5259 8.19347 11 7 11V11ZM17.5 13C18.0304 13 18.5391 12.7893 18.9142 12.4142C19.2893 12.0391 19.5 11.5304 19.5 11C19.5 10.4696 19.2893 9.96086 18.9142 9.58579C18.5391 9.21071 18.0304 9 17.5 9C16.9696 9 16.4609 9.21071 16.0858 9.58579C15.7107 9.96086 15.5 10.4696 15.5 11C15.5 11.5304 15.7107 12.0391 16.0858 12.4142C16.4609 12.7893 16.9696 13 17.5 13V13ZM17.5 15C16.4391 15 15.4217 14.5786 14.6716 13.8284C13.9214 13.0783 13.5 12.0609 13.5 11C13.5 9.93913 13.9214 8.92172 14.6716 8.17157C15.4217 7.42143 16.4391 7 17.5 7C18.5609 7 19.5783 7.42143 20.3284 8.17157C21.0786 8.92172 21.5 9.93913 21.5 11C21.5 12.0609 21.0786 13.0783 20.3284 13.8284C19.5783 14.5786 18.5609 15 17.5 15ZM20 21V20.5C20 19.837 19.7366 19.2011 19.2678 18.7322C18.7989 18.2634 18.163 18 17.5 18C16.837 18 16.2011 18.2634 15.7322 18.7322C15.2634 19.2011 15 19.837 15 20.5V21H13V20.5C13 19.9091 13.1164 19.3239 13.3425 18.7779C13.5687 18.232 13.9002 17.7359 14.318 17.318C14.7359 16.9002 15.232 16.5687 15.7779 16.3425C16.3239 16.1164 16.9091 16 17.5 16C18.0909 16 18.6761 16.1164 19.2221 16.3425C19.768 16.5687 20.2641 16.9002 20.682 17.318C21.0998 17.7359 21.4313 18.232 21.6575 18.7779C21.8836 19.3239 22 19.9091 22 20.5V21H20ZM10 21V17C10 16.2044 9.68393 15.4413 9.12132 14.8787C8.55871 14.3161 7.79565 14 7 14C6.20435 14 5.44129 14.3161 4.87868 14.8787C4.31607 15.4413 4 16.2044 4 17V21H2V17C2 15.6739 2.52678 14.4021 3.46447 13.4645C4.40215 12.5268 5.67392 12 7 12C8.32608 12 9.59785 12.5268 10.5355 13.4645C11.4732 14.4021 12 15.6739 12 17V21H10Z" />
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