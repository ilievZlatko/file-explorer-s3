import styled, { css } from 'styled-components';
import { appearanceVariants, sizeVariants } from './Button.helpers';
import { ButtonProps } from '.';

const StyledButton = styled.button<ButtonProps>`
  ${(props) => {
    const { theme, appearance = 'primary', size = 'medium', fullWidth = false } = props;

    return css`
      display: inline-flex;
      opacity: 1;
      font-weight: 500;
      text-align: center;
      border-radius: 6px;
      vertical-align: middle;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      user-select: none;
      border: 2px solid transparent;
      cursor: pointer;
      pointer-events: ${props.loading ? 'none' : 'all'};
      font-size: 0.813rem;
      line-height: 1.25;
      letter-spacing: normal;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
      width: ${fullWidth ? '100%' : 'auto'};

      &:focus {
        outline: 0;
      }

      &:disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
      }

      ${appearanceVariants(theme, appearance)}
      ${sizeVariants(theme, size)}
    `;
  }}
`;

export default StyledButton;
