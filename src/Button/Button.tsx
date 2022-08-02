import React from 'react';
import { StyledButton } from './Button.styles';

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(({ children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} type="button" {...props}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
