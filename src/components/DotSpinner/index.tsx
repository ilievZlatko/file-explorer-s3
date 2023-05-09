import React from 'react';
import { Loader, Bounce1, Bounce2, Bounce3 } from './DotSpinner.style';

export interface DotSpinnerProps {
  color?: string;
}

export const DotSpinner: React.FC<DotSpinnerProps> = ({ color = '#fff' }) => {
  return (
    <Loader color={color}>
      <Bounce1 />
      <Bounce2 />
      <Bounce3 />
    </Loader>
  );
};
