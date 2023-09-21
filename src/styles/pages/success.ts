import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  flex: 1,
  maxWidth: 590,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    lineHeight: '140%',
  },

  p: {
    textAlign: 'center',
    fontSize: '$xl',
    color: '$gray200',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '4rem',
    display: 'block',
    color: '$primary500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',

    '&:hover': {
      color: '$primary400',
    }
  }
});

export const ImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '3.25rem',

  img: {
    objectFit: 'cover'
  },
});

export const ImageWrapper = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
  marginRight: -40,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
});