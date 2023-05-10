import React, { FC } from 'react';
import { ConfirmModal } from './ConfirmModal';
import { WindowModal } from './WindowModal';
import { ConfirmModalProps, ModalProps, WindowModalProps } from '../Modal.types';

type Props = {
  [key: string]: FC<ConfirmModalProps | WindowModalProps>;
};

const LAYOUTS: Props = {
  DefaultLayout: ConfirmModal,
  ConfirmModal,
  WindowModal,
};

export const ModalLayout: React.FC<ModalProps> = ({ layout = 'DefaultLayout', ...props }) => {
  const ModalLayoutComponent = LAYOUTS[layout];

  return <ModalLayoutComponent {...props} />;
};
