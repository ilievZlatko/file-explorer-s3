import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../../../';
import { WindowModalLayoutWrapper, WindowModalHeader, SubtitleGap } from './WindowModal.style';
import { useBreakpoints } from '../../../../hooks/useBreakpoints';
import { WindowModalProps } from '../../Modal.types';

export const WindowModal: React.FC<WindowModalProps> = ({
  title,
  onClose,
  children,
  subtitle,
  alignTitle = 'flex-start',
  style,
  ...props
}) => {
  const { isMobile, isDesktop } = useBreakpoints();

  const theme = useTheme();

  return (
    <WindowModalLayoutWrapper isDesktop={Boolean(isDesktop)} {...props} style={style}>
      {title && (
        <WindowModalHeader isMobile={Boolean(isMobile)} alignTitle={alignTitle}>
          <Text variant="h3" tag="h3" wordWrap="break-word">
            {title}
          </Text>
          {subtitle && (
            <>
              <SubtitleGap />
              <Text variant="p1" tag="h4" wordWrap="break-word" color={theme.colors.grayScaleGray4}>
                {subtitle}
              </Text>
            </>
          )}
        </WindowModalHeader>
      )}
      {children}
    </WindowModalLayoutWrapper>
  );
};
