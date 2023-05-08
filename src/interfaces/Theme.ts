export interface Colors {
  primary: string;
  primaryLight: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  footnoteText: string;
  background: string;
  red: string;
  green: string;
  purple: string;
  blue: string;
  yellow: string;
  lightRed: string;
  lightGreen: string;
  lightPurple: string;
  lightBlue: string;
  white: string;
  grayScaleGray1: string;
  grayScaleGray2: string;
  grayScaleGray3: string;
  grayScaleGray4: string;
  grayScaleGray5: string;
}

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
}

export interface Theme {
  colors: Colors;
  breakpoints: Breakpoints;
  spacing: Spacing;
}
