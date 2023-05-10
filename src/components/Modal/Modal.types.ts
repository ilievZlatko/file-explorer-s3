import { ReactNode, CSSProperties } from 'react';

export interface BaseModalProps {
  layout?: 'ConfirmModal' | 'WindowModal' | 'DefaultLayout';
  isOpen: boolean;
  onClose: () => void;
  bgcolor?: string;
}

export interface ConfirmModalProps extends BaseModalProps {
  title?: string;
  message?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  onConfirm?: () => void;
  bgcolor?: string;
}

export interface WindowModalProps extends BaseModalProps {
  title?: string;
  style?: CSSProperties;
  alignTitle?: 'center' | 'left' | 'right' | 'justify' | 'inherit' | 'initial' | undefined;
  subtitle?: string;
  children?: ReactNode;
  bgcolor?: string;
}

export type ModalProps = ConfirmModalProps | WindowModalProps;
