import React from 'react';
import styled from 'styled-components';
import { base, light } from '../styles/themes';

// #region styled
const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1ch;
  font: inherit;
  letter-spacing: inherit;
  line-height: 1.5;
  border: none;
  border-radius: 0.5em;
  font-weight: 700;
  padding-block: 1rem;
  padding-inline: 1rem;
  text-shadow: none;
  transition: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  box-shadow: 0 0 0 2px ${props => props.theme.colors.boxShadow};

  &:not(:active):not(:disabled) {
    &:focus-visible {
      outline-offset: 5px;
    }
    &:hover {
      box-shadow: 0 0 0 0.5em ${props => props.theme.colors.boxShadow};
    }
  }

  &:disabled {
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
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
// #endregion

StyledButton.defaultProps = {
  theme: {
    ...base,
    colors: light
  }
};

const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(({ children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} type="button" {...props}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
