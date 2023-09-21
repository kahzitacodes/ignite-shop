import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  //gap: '3rem',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  width: '100%',
  minHeight: 656,
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
    cursor: 'pointer',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    borderRadius: 6,
    padding: '2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '.product-infos': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100',
      cursor: 'pointer',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$primary400',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
});