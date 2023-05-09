import React from 'react';
import StyledButton from './Button.style';
import { DotSpinner } from '../DotSpinner';

export type Appearance = 'primary' | 'secondary';
export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  label?: React.ReactNode | string;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    label,
    loading,
    size = 'medium',
    appearance = 'primary',
    fullWidth = false,
    children,
    style,
    ...attributes
  } = props;

  return (
    <StyledButton
      ref={ref}
      appearance={appearance}
      className={className}
      style={style}
      label={label}
      fullWidth={fullWidth}
      size={size}
      {...attributes}
    >
      {!loading && children}
      {!loading && label}
      {loading && <DotSpinner color="currentColor" />}
    </StyledButton>
  );
});
