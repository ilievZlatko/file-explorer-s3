import React from 'react';
import { IoFileTrayOutline } from 'react-icons/io5';
import { useTheme } from 'styled-components';
import { Button, Text } from '../../components';
import { EmptyStateContainer } from './Empty.style';

interface EmptyProps {
  message: string;
  actionText: string;
  onActionClick: () => void;
}

export const Empty: React.FC<EmptyProps> = ({ message, actionText, onActionClick }) => {
  const theme = useTheme();

  return (
    <EmptyStateContainer>
      <IoFileTrayOutline size={60} color={theme.colors.grayScaleGray1} />
      <Text variant="p2" color={theme.colors.grayScaleGray3}>
        {message}
      </Text>
      <Button size="small" onClick={onActionClick} style={{ marginTop: '14px' }}>
        {actionText}
      </Button>
    </EmptyStateContainer>
  );
};
