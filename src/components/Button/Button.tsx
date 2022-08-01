import styled from "styled-components"

// #region styled
const StyledButton = styled.button`
  font: inherit;
  letter-spacing: inherit;
  line-height: 1.5;

  border: 2px solid rgba(0 0 0 / 15%);
  border-radius: 0.5em;

  background: white;
  color: black;

  box-shadow: 0 0 0 0 rgba(0 0 0 / 10%);
  text-shadow: none;
  transition: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1ch;

  font-weight: 700;
  padding-block: 1rem;
  padding-inline: 1rem;

  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  &:not(:active):not(:disabled) {
    &:focus-visible {
      outline-offset: 5px;
    }
    &:hover {
      box-shadow: 0 0 0 0.5em rgba(0 0 0 / 10%);
    }
  }

  &:disabled {
    background-color: transparent;
    color: rgba(100 100 100 / 50%);
    cursor: not-allowed;
  }

  & > svg {
    flex-shrink: 0;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (prefers-color-scheme: dark) {
    background: #333;
    color: white;
    outline-color: white;
    box-shadow: 0 0 0 0 rgba(255 255 255 / 10%);

    &:not(:active):not(:disabled) {
      &:hover {
        box-shadow: 0 0 0 0.5em rgba(255 255 255 / 10%);
      }
    }

    &:disabled {
      background-color: transparent;
      color: rgba(200 200 200 / 50%);
      cursor: not-allowed;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 150ms ease, outline-offset 150ms ease;
  }
`

// #endregion

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
