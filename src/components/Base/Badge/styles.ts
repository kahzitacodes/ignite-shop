import { styled } from '@/src/styles';

export const BadgeContainer = styled('div', {
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  color: '$white',
  justifyContent: 'center',

  fontSize: '$sm',

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary500',
        outline: '3px solid $gray900',
        fontWeight: 'bold',
      },
      neutral: {
        backgroundColor: '$gray900',
        color: '$gray200',
      }
    },

    size: {
      md: {
        height: '1.5rem',
        width: '1.5rem',
      },
      lg: {
        height: '2rem',
        width: '2rem',
        fontSize: '$xs',
      }
    }
  }
});