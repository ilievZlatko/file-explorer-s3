import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
`;
