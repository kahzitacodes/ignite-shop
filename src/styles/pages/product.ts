import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4.5rem',

  maxWidth: 1180,
  margin: '0 auto'
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray200'
  },

  span: {
    fontSize: '$2xl',
    color: '$primary400',
    marginTop: '1rem',
  },

  p: {
    fontSize: '$md',
    color: '$gray200',
    marginTop: '2.5rem',
    lineHeight: '1.6',
  },

  button: {
    marginTop: 'auto',
    color: '$gray100',
    background: '$primary500',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',

    '&:sidabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      background: '$primary400',
    }
  }
});
