import styled from 'styled-components';

export const FileExplorerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 300px;
  right: 0;
  top: 0;
  bottom: 0;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const FileItem = styled.div`
  display: inline-flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(8rem, 1fr));
  grid-gap: 24px;

  &:before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;
