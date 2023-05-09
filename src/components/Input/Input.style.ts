/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { InputProps } from '.';

export const StyledInput = styled.input<InputProps & { hasIcon?: boolean }>`
  height: 48px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: flex;
  font-family: 'Poppins';
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 12px;
  border-radius: 8px;
  border: solid 1px ${(props) => (props.error ? '#d81e05' : '#d6d6d6')};
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryText};
  ${(props) => (props.hasIcon ? 'padding-left: 40px;' : '')};

  &:hover {
    outline: none;
    border: 1px solid;
    border: ${(props) => `solid 1px ${props.theme.colors.grayScaleGray4}`};
  }

  &:focus-within {
    outline: none;
    border: 1px solid;
    border: ${(props) => `solid 1px ${props.theme.colors.grayScaleGray4}`};
  }

  &::placeholder {
    font-family: 'Poppins';
    height: 20px;
    flex-grow: 0;
    font-size: 12px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.3px;
    text-align: left;
    color: ${(props) => props.theme.colors.grayScaleGray4};
  }

  &:disabled {
    pointer-events: none;
    background: ${(props) => props.theme.colors.grayScaleGray1};
    color: ${(props) => props.theme.colors.grayScaleGray3};
    border: ${(props) => props.theme.colors.grayScaleGray3};
  }
`;

export const InputContainer = styled.div<{
  fullWidth?: boolean;
}>`
  height: fit-content;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 8px;
  padding: 0;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
`;

export const InputLabelWrapper = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  height: 16px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayScaleGray5};
`;

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  left: 15px;
  width: 20px;
  top: calc(50% + 18px);
  transform: translateY(-50%);

  > svg {
    color: currentColor;
  }
`;
