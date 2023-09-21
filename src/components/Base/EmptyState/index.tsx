import { EmptyStateContainer } from './styles';
import emptyCart from '../../../assets/empty-cart.svg';
import Image from 'next/image';

export function EmptyState() {
  return (
    <EmptyStateContainer>
      <Image src={emptyCart} alt="Carrinho vazio" width={196} height={196} />
      <h6>Seu carrinho está vazio</h6>
    </EmptyStateContainer>
  );
}