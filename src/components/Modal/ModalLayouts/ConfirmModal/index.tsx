import React from 'react';
import { Text, Button } from '../../../';
import {
  ConfirmModalLayoutWrapper,
  ConfirmModalHeader,
  ConfifmModalBody,
  ConfifmModalFooter,
} from './ConfirmModal.style';
import { useBreakpoints } from '../../../../hooks/useBreakpoints';
import { ConfirmModalProps } from '../../Modal.types';

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  message,
  primaryActionText = 'Confirm',
  secondaryActionText,
  onConfirm,
  onClose,
  ...props
}) => {
  const { isMobile } = useBreakpoints();

  return (
    <ConfirmModalLayoutWrapper {...props}>
      {title && (
        <ConfirmModalHeader>
          <Text variant="h3" tag="h3" wordWrap="break-word" textAlign="center">
            {title}
          </Text>
        </ConfirmModalHeader>
      )}
      {message && (
        <ConfifmModalBody>
          <Text variant="p1" tag="p" wordWrap="break-word">
            {message}
          </Text>
        </ConfifmModalBody>
      )}
      <ConfifmModalFooter>
        {secondaryActionText && (
          <Button appearance="secondary" onClick={onClose} fullWidth={Boolean(isMobile)}>
            {secondaryActionText}
          </Button>
        )}
        <Button fullWidth={!secondaryActionText || Boolean(isMobile)} appearance="primary" onClick={onConfirm}>
          {primaryActionText}
        </Button>
      </ConfifmModalFooter>
    </ConfirmModalLayoutWrapper>
  );
};
