import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  z-index: 900;
`;

export const ModalCloseSection = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: flex-end;
  margin-bottom: 24px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const ModalCard = styled.div<{
  layout?: 'ConfirmModal' | 'WindowModal' | 'DefaultLayout';
}>`
  display: ${(props) => (props.layout === 'WindowModal' ? 'block' : 'flex')};
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 901;
  padding: 34px 24px;
  background-color: ${(props) => props.theme.colors.white};

  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.sm}px) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: max-content;
      min-width: 450px;
      min-height: 300px;
      max-width: 80%;
      max-height: 80%;
      height: max-content;
      border-radius: 15px;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.07);
    }
  `}

  .modal-close-btn {
    cursor: pointer;
  }
`;
