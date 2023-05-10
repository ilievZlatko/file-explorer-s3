import { useState, useEffect, PropsWithChildren, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createPortal } from 'react-dom';

interface PortalProps {
  wrapperId?: string;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ModalPortal: React.FC<PropsWithChildren<PortalProps>> = ({ children }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);
  const wrapperId = useRef<string>(`modal-portal-${uuidv4()}`);

  useEffect(() => {
    let element = document.getElementById(wrapperId.current);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId.current);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (element && systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on very first render.
  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ModalPortal;
