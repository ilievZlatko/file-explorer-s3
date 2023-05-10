import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import { ModalCard, ModalOverlay, ModalCloseSection } from './Modal.style';
import ModalPortal from './ModalPortal';
import { ModalLayout } from './ModalLayouts';
import { ModalProps } from './Modal.types';
import { useBreakpoints } from '../../hooks/useBreakpoints';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, bgcolor, ...props }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useBreakpoints();

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : null);

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, []);

  return (
    <ModalPortal>
      <CSSTransition in={isOpen} timeout={{ enter: 0, exit: 200 }} unmountOnExit classNames="modal" nodeRef={nodeRef}>
        <div ref={nodeRef}>
          {!isMobile && <ModalOverlay className="modal" />}
          <ModalCard className="modal" layout={props.layout}>
            <ModalCloseSection>
              <GrClose size="22px" color="#000" onClick={onClose} className="modal-close-btn" />
            </ModalCloseSection>
            <ModalLayout onClose={onClose} isOpen={isOpen} {...props} />
          </ModalCard>
        </div>
      </CSSTransition>
    </ModalPortal>
  );
};
