import { styled } from '@/src/styles';

export const ButtonContainer = styled('button', {
  marginTop: 'auto',
  border: 0,
  borderRadius: 8,
  fontWeight: 'bold',
  fontSize: '$md',
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&.icon': {
    aspectRatio: '1 / 1',
    padding: 0,
  },

  variants: {
    color: {

      primary: {
        background: '$primary500',
        color: '$gray100',

        '&:not(:disabled):hover': {
          background: '$primary400',
        },
      },

      secondary: {
        background: '$gray500',
        color: '$gray300',

        '&.active': {
          color: '$gray200',
        },

        '&:not(.active):hover': {
          color: '$gray200',
        },
      },

      ghost: {
        background: 'transparent',
        color: '$gray300',

        '&.active': {
          color: '$gray200',
        },

        '&:not(.active):hover': {
          color: '$gray200',
        },
      }
    },

    size: {
      xl: {
        height: '4.375rem',
        padding: '2rem',
      },
      lg: {
        height: '3.5rem',
        padding: '1.25rem',
      },
      md: {
        height: '3rem',
        padding: '1.25rem',
      },
    }
  },

  '&:sidabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },
});