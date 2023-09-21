import { createStitches } from '@stitches/react';

export const {
  css,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',

      primary400: '#00B37E',
      primary500: '#00875F',

      gray100: '#E1E1E6',
      gray200: '#C4C4CC',
      gray300: '#8D8D99',
      gray500: '#202024',
      gray900: '#121214',
    },

    fontSizes: {
      xs: '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
});

