import { styled } from '@/src/styles';
import { keyframes } from '@stitches/react';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
});

const slide = keyframes({
  '0%': { transform: 'translate3d(100%, 0, 0)' },
  '100%': { transform: 'translateZ(0)' }
});

export const CartContainer = styled('div', {
  width: 480,
  position: 'fixed',
  backgroundColor: '$gray500',
  paddingTop: '4.5rem',
  right: 0,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  zIndex: 100,
  justifyContent: 'space-between',
  overflow: 'hidden',
  top: 0,
  transition: 'all 0.24s cubic-bezier(0.4, 0.14, 1, 1)',

  '&.is-visible': {
    animation: `${slide} 300ms forwards, ${fadeIn} 200ms forwards`,
  },

  '.close-button': {
    position: 'absolute',
    right: '1rem',
    top: '1.5rem',
  },

  h2: {
    fontSize: '$lg',
    fontWeight: 'bold',
    padding: '0 3rem'
  }
});

export const CartProducts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,
  padding: '2rem 3rem',
  overflowY: 'auto',
});

export const CartFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  bottom: 0,
  width: '100%',
  backgroundColor: '$gray500',
  padding: '2.5rem',

  '.infos': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    '.infos-item': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  }
});

export const ProductContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem'
});

export const ProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  flex: 1,

  '.row': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  span: {
    color: '$gray200',
    display: 'block',
  },
  strong: {
    color: '$gray100',
    display: 'block',
  },

  a: {
    color: '$primary500',
    fontWeight: 'bold',
    fontSize: '$sm',

    '&:hover': {
      color: '$primary400',
    }
  }
});

export const ProductImage = styled('div', {
  borderRadius: 8,
  height: 93,
  width: 102,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
});