import styled, { css } from 'styled-components';

export const ConfirmModalLayoutWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  margin-inline: auto;
  margin-top: 50%;

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      justify-content: space-between;
      margin-inline: auto;
      margin-top: 0;
    }
  `}
`;

export const ConfirmModalHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-top: 16px;

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      flex: 1;
    }
  `}
`;

export const ConfifmModalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      flex: 1;
    }
  `}
`;

export const ConfifmModalFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      flex-direction: row;
    }
  `}
`;
