import styled from 'styled-components';

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.colors.tertiaryText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
