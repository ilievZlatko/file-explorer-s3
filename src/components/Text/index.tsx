import React, { PropsWithChildren } from 'react';
import { StyledText } from './Text.style';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'button' | 'message';

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement | HTMLLabelElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  variant?: Variant;
  wordWrap?: 'normal' | 'break-word' | 'initial' | 'inherit';
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit' | 'initial';
  color?: string;
}

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  tag = 'span',
  color,
  variant = 'p1',
  children,
  textAlign = 'left',
  wordWrap = 'normal',
  ...rest
}) => {
  return (
    <StyledText as={tag} color={color} variant={variant} wordWrap={wordWrap} textAlign={textAlign} {...rest}>
      {children}
    </StyledText>
  );
};
