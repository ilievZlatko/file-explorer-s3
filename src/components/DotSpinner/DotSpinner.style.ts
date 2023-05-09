import styled, { keyframes } from 'styled-components';
import { DotSpinnerProps } from '.';

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

export const Bounce1 = styled.div``;
export const Bounce2 = styled.div``;
export const Bounce3 = styled.div``;

export const Loader = styled.div<DotSpinnerProps>`
  text-align: center;
  div {
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.color || '#fff'};

    border-radius: 100%;
    display: inline-block;
    animation: ${bounce} 1.4s infinite ease-in-out both;
  }

  ${Bounce1} {
    animation-delay: -0.32s;
  }

  ${Bounce2} {
    animation-delay: -0.16s;
  }
`;
