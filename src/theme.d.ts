import { Breakpoints, Colors, Spacing } from './interfaces/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    spacing: Spacing;
  }
}
