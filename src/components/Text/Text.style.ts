import styled, { css } from 'styled-components';
import { TextProps } from '.';
import { textVariants } from './Text.helpers';

export const StyledText = styled.div<TextProps>`
  ${({ theme, color, variant = 'p1', wordWrap = 'normal', textAlign = 'left' }) => css`
    display: inline-flex;
    gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;
    margin: 0;
    padding: 0;
    line-height: normal;
    color: ${color || theme.colors.primaryText};
    cursor: text;
    word-wrap: ${wordWrap};
    text-aligh: ${textAlign};
    user-select: none;
    width: fit-content;

    ${textVariants(variant)}
  `}
`;
