import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { ButtonProps } from './Button';
import {
  BOX_SHADOW_DARK,
  BOX_SHADOW_LIGHT,
  DANGER_COLOR,
  DANGER_TEXT_COLOR,
  DISABLED_OPACITY,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  SUCCESS_COLOR,
  SUCCESS_TEXT_COLOR,
  WARNING_COLOR,
  WARNING_TEXT_COLOR
} from '../utils/styles';

const sizes = {
  small: 'padding: 0.5rem 1rem; font-size: 0.8rem;',
  medium: 'padding: 0.75rem 1.5rem; font-size: 1rem;',
  large: 'padding: 1rem 2rem; font-size: 1.25rem;'
};

const colors = {
  primary: [PRIMARY_COLOR, PRIMARY_TEXT_COLOR],
  secondary: [SECONDARY_COLOR, SECONDARY_TEXT_COLOR],
  danger: [DANGER_COLOR, DANGER_TEXT_COLOR],
  success: [SUCCESS_COLOR, SUCCESS_TEXT_COLOR],
  warning: [WARNING_COLOR, WARNING_TEXT_COLOR]
};

const colorStyles = (props: ButtonProps) => {
  if (!props.variant) return;

  const [background, color] = colors[props.variant];
  return css`
    background-color: ${background};
    color: ${color};
    box-shadow: 0 0 0 0 ${transparentize(0.5, background)};
    outline-color: ${background};

    &:not(:active):not(:disabled) {
      &:focus-visible {
        outline-offset: 5px;
        box-shadow: 0 0 0 0.5em ${transparentize(0.75, background)};
      }
      &:hover {
        box-shadow: 0 0 0 0.5em ${transparentize(0.75, background)};
      }
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1ch;
  letter-spacing: inherit;
  border: none;
  border-radius: 0.5em;
  font-weight: 700;
  text-shadow: none;
  transition: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  display: ${props => (props.fullWidth ? 'flex' : 'inline-flex')};
  width: ${props => props.fullWidth && '100%'};
  ${props => props.size && sizes[props.size]}
  ${colorStyles};

  &:not(:active):not(:disabled) {
    &:focus-visible {
      outline-offset: 5px;
    }
  }

  &:disabled {
    cursor: inherit;
    opacity: ${DISABLED_OPACITY};
  }

  & > svg {
    flex-shrink: 0;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 150ms ease, outline-offset 150ms ease;
  }
`;
