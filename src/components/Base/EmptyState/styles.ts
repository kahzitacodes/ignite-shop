import { styled } from '@/src/styles';

export const EmptyStateContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  margin: '2rem auto',

  h6: {
    fontSize: '$md',
    color: '$gray300',
  },

  img: {
    objectFit: 'cover'
  }
});