import React from 'react';
import { InputContainer, InputLabelWrapper, StyledInput, StyledLabel, IconContainer } from './Input.style';
import { Text } from '../Text';
import { useTheme } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode | null;
  label?: string | React.ReactNode | undefined | null;
  fullWidth?: boolean;
  hookFormProps?: unknown;
  isClearable?: boolean;
  onClear?: () => void;
  error?: string | null;
}

export const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label = null,
    fullWidth = false,
    error = null,
    hookFormProps,
    onClear,
    icon = null,
    isClearable = false,
    ...inputProps
  } = props;

  const theme = useTheme();

  return (
    <InputContainer fullWidth={fullWidth}>
      <InputLabelWrapper>
        {label && <StyledLabel>{label}</StyledLabel>}
        {inputProps.required && (
          <Text variant="message" color="#d81e05">
            *
          </Text>
        )}
      </InputLabelWrapper>

      {icon && <IconContainer>{icon}</IconContainer>}

      <StyledInput
        fullWidth={fullWidth}
        isClearable={isClearable}
        error={error}
        icon={icon}
        label={label}
        ref={ref}
        hasIcon={Boolean(icon)}
        {...inputProps}
        {...(hookFormProps ?? {})}
      />
      {error && (
        <Text variant="message" color={theme.colors.red}>
          {error}
        </Text>
      )}
    </InputContainer>
  );
});
