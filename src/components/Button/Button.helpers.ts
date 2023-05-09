import { Appearance, Size } from '.';
import { Theme } from '../../interfaces/Theme';

/**
 * Generates button variants
 * @param {DefaultTheme} theme
 * @param {string} appearance
 * @returns {CSSProperties} generated css
 */
export const appearanceVariants = (theme: Theme, appearance: Appearance = 'primary') =>
  ({
    primary: `
			color: ${theme.colors.white};
			background-color: ${theme.colors.primary};
			border-color: ${theme.colors.primary};

			&:hover,
			&.hover {
				color: ${theme.colors.white};
				background-color: ${theme.colors.blue};
				border-color: ${theme.colors.blue};
			}

			&:disabled {
				color: ${theme.colors.grayScaleGray1};
				background-color: ${theme.colors.grayScaleGray3};
				border-color: ${theme.colors.grayScaleGray3};
				opacity: 1;
			}
		`,
    secondary: `
			color: ${theme.colors.primaryText};
			background-color: transparent;
			border-color: ${theme.colors.primary};

			&:hover,
			&.hover {
				color: ${theme.colors.primary};
				background-color: transparent;
				border-color: ${theme.colors.primary};
			}

      &:disabled {
        border-color: ${theme.colors.grayScaleGray3};
				color: ${theme.colors.grayScaleGray4};
      }
		`,
  }[appearance]);

/**
 * Generate styles based on size
 * @param {DefaultTheme} theme
 * @param {string} size
 * @returns {CSSProperties} generated styles
 */
export const sizeVariants = (theme: Theme, size: Size = 'large') =>
  ({
    small: `
			gap: ${theme.spacing.xs};
			height: ${theme.spacing.xl};
			padding-inline: ${theme.spacing.md};
			font-size: 14px;
			font-weight: 500;
		`,
    medium: `
			gap: ${theme.spacing.sm};
			height: ${theme.spacing.xxxl};
			padding-inline: ${theme.spacing.xl};
			font-size: 16px;
			font-weight: 500;
		`,
    large: `
			gap: ${theme.spacing.md};
			height: ${theme.spacing.xxxxl};
			padding-inline: ${theme.spacing.xxl};
			font-size: 20px;
			font-weight: 600;
		`,
  }[size]);
