import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },

  '.w100': {
    width: '100%',
  },

  '.fw-bold': {
    fontWeight: 'bold'
  },

  '.fs-sm': {
    fontSize: '$sm'
  },

  '.fs-md': {
    fontSize: '$md'
  },

  '.fs-lg': {
    fontSize: '$lg'
  },

  '.fs-xl': {
    fontSize: '$xl'
  },

  '.fs-sxl': {
    fontSize: '$2xl'
  },
});