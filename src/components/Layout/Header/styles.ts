import { styled } from '@stitches/react';

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1180,
  margin: '2.5rem auto 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
});

export const HeaderShopCart = styled('div', {
  position: 'relative',
  display: 'flex',

  '.cart-count': {
    position: 'absolute',
    right: '-.75rem',
    top: '-.25rem',
  }
});