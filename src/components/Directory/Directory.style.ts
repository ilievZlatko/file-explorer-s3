import styled from 'styled-components';

export const Folder = styled.div`
  display: flex;
  position: relative;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-direction: column;
  padding-left: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

export const File = styled.div`
  position: relative;
  display: flex;
  padding-left: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;
