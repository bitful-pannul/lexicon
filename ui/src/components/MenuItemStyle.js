import React from 'react';
import { Box, Menu } from '@holium/design-system';
import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
} from 'styled-system';

// <MenuItem /> component from @holium/design-system, but with e.stopPropagation() commented out to access onClick method in other places
// also .tsx -> .js 

export const focusRing = css`
  transition: 0.2s ease;
  outline: 1px solid ${(props) => props.theme.colors.brand.primary};
  /* outline: none; */
`;

const selectableFocus = css`
  &:focus {
    ${focusRing}
  }
  &:active {
    outline: none !important;
  }
`;

// TODO make variants
export const MenuItemStyle = styled(styled.li`
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
  color: ${(props) =>
    props.intent
      ? (props.intent === 'primary' && props.theme.colors.brand.primary) ||
        props.theme.colors.ui.intent[props.intent]
      : props.theme.colors.text.secondary};
  transition: ${(props) => props.theme.transition};
  svg {
    fill: ${(props) => (props.intent ? 'currentcolor' : 'inherit')};
  }
  cursor: pointer;
  pointer-events: auto;

  /* Not disabled */
  ${(props) =>
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
  ${(props) =>
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
  ${(props) =>
    props.selected &&
    css`
      -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
      color: ${(props) => props.theme.colors.brand.primary};
      cursor: default;
      background: transparent;
    `};
  ${selectableFocus}

   /* Disabled */
  ${(props) =>
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
`)(compose(space, color, layout, flexbox, border, position));

const ChildrenBox = styled(styled.div`
  width: 100%;
  user-select: ${(props) => (props.interaction ? 'auto' : 'none')};
  pointer-events: ${(props) =>
    props.interaction ? 'auto' : 'none'};
`)(compose(space, color, layout, flexbox, border, position));


// &:disabled {
//   -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
//   opacity: 0.3; /* correct opacity on iOS */
//   color: ${(props) => props.theme.colors.text.disabled};
//   /* background-color: ${(props) => props.theme.colors.ui.disabled}; */
//   border-color: ${(props) => props.theme.colors.ui.disabled};
//   cursor: default;
//   pointer-events: auto;
// }


export const MenuItemCustom = (props) => {
  const {
    icon,
    label,
    style,
    intent,
    disabled,
    onClick,
    selected,
    // subMenu
    type,
    children,
    tabIndex,
  } = props;

  return (
    <MenuItemStyle
      tabIndex={tabIndex}
      style={style}
      flex={1}
      highlightType={type}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      intent={intent}
      data-prevent-context-close={disabled}
      disabled={disabled}
      selected={selected}
      onKeyPress={(evt) => {
        const key = evt.keyCode || evt.which;
        if (key === 13) {
          evt.preventDefault(); // Ensure it is only this code that runs
          onClick(evt);
        }
      }}
      onClick={(evt) => {
        if (!disabled) {
          onClick(evt);
        } else {
          evt.preventDefault();
          // evt.stopPropagation();
        }
      }}
      value={label}
    >
      {icon && (
        <Box color="inherit" mr={2}>
          {icon}
        </Box>
      )}
      {label}
      {children && <ChildrenBox >{children}</ChildrenBox>}
    </MenuItemStyle>
  );
};


