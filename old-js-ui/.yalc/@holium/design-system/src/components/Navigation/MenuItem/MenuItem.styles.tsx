import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import type { ThemeType } from '../../../theme';
import { selectableFocus } from '../../shared-styles';
import { IntentProps } from './MenuItem';

export type StyleProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  IntentProps & {
    theme: ThemeType;
    highlightType?: 'neutral' | 'brand' | null;
    selected?: boolean;
    disabled?: boolean;
    interaction?: boolean;
  };

// TODO make variants
export const MenuItemStyle: any = styled(styled.li`
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  background: inherit;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  font-size: ${(props) => props.theme.fontSizes[2]};
  padding: 8px 12px;
  margin: 0px 4px;
  border-radius: ${(props) => props.theme.containers.outerBorderRadius}px;
  color: ${(props: StyleProps) =>
    props.intent
      ? (props.intent === 'primary' && props.theme.colors.brand.primary) ||
        props.theme.colors.ui.intent[props.intent]
      : props.theme.colors.text.secondary};
  transition: ${(props: StyleProps) => props.theme.transition};
  svg {
    fill: ${(props: StyleProps) => (props.intent ? 'currentcolor' : 'inherit')};
  }
  cursor: pointer;
  pointer-events: auto;

  /* Not disabled */
  ${(props: StyleProps) =>
    !props.disabled &&
    css`
      &:hover {
        transition: ${props.theme.transition};
        background: ${props.highlightType === 'brand' &&
        props.theme.colors.brand.primary};
        color: ${props.intent
          ? (props.intent === 'primary' && props.theme.colors.brand.primary) ||
            props.theme.colors.ui.intent[props.intent]
          : props.theme.colors.text.secondary};
      }
    `}
            
       
  /* Neutral */
  ${(props: StyleProps) =>
    props.highlightType === 'neutral' &&
    !props.disabled &&
    css`
      &:not(disabled):hover {
        transition: ${props.theme.transition};
        background: ${props.theme.colors.highlights.bgHighlight};
        color: ${props.theme.colors.text.secondary};
      }
    `}}

  /* Selected */
  ${(props: StyleProps) =>
    props.selected &&
    css`
      -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
      color: ${(props) => props.theme.colors.brand.primary};
      cursor: default;
      background: transparent;
    `};
  ${selectableFocus}

   /* Disabled */
  ${(props: StyleProps) =>
    props.disabled &&
    css`
      -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
      color: ${(props) => props.theme.colors.text.disabled};
      border-color: ${(props) => props.theme.colors.ui.disabled};
      opacity: 0.7;
      cursor: default;
      &:focus {
        outline: none;
        border-color: transparent;
      }
      background: transparent;
    `};
`)<StyleProps>(compose(space, color, layout, flexbox, border, position));

export const ChildrenBox = styled(styled.div`
  width: 100%;
  user-select: ${(props: StyleProps) => (props.interaction ? 'auto' : 'none')};
  pointer-events: ${(props: StyleProps) =>
    props.interaction ? 'auto' : 'none'};
`)<StyleProps>(compose(space, color, layout, flexbox, border, position));

export default MenuItemStyle;

// &:disabled {
//   -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
//   opacity: 0.3; /* correct opacity on iOS */
//   color: ${(props) => props.theme.colors.text.disabled};
//   /* background-color: ${(props) => props.theme.colors.ui.disabled}; */
//   border-color: ${(props) => props.theme.colors.ui.disabled};
//   cursor: default;
//   pointer-events: auto;
// }
