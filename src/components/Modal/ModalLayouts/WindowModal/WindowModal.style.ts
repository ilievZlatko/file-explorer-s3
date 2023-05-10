import styled, { css } from 'styled-components';

export const WindowModalLayoutWrapper = styled.div<{ isDesktop: boolean }>`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      justify-content: space-between;
    }
  `}
`;

export const WindowModalHeader = styled.div<{ isMobile: boolean; alignTitle: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${({ alignTitle }) => alignTitle};
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-top: 16px;

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      flex: 1;
    }
  `}
`;

export const SubtitleGap = styled.div`
  height: ${(props) => props.theme.spacing.md};
`;
