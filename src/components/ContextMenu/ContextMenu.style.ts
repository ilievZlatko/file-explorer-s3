import styled from 'styled-components';

export const ContextMenuWrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 35px;
  left: 10px;
  z-index: 10;
  padding: 10px 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  width: max-content;
`;
