import { Variant } from '.';

export const textVariants = (variant: Variant = 'p1') =>
  ({
    h1: `
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  `,
    h2: `
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  `,
    h3: `
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
  `,
    h4: `
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  `,
    h5: `
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  `,
    h6: `
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  `,
    p1: `
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
    p2: `
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  `,
    button: `
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  `,
    message: `
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  `,
  }[variant]);
