import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  dark?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant, size, fullWidth, ...props }, ref) => {
  return (
    <StyledButton ref={ref} variant={variant} size={size} fullWidth={fullWidth} type="button" {...props}>
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
  dark: false
};

Button.displayName = 'Button';
