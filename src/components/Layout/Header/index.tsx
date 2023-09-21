import Link from 'next/link';
import { CartDrawer } from '../../CartDrawer';
import Image from 'next/image';
import { Badge } from '../../Base/Badge';
import { Button } from '../../Base/Button';
import { Handbag } from '@phosphor-icons/react';
import { HeaderContainer, HeaderShopCart } from './styles';
import { useDrawer } from '@/src/hooks/useDrawer';
import logo from '../../../assets/logo.svg';
import { useShoppingCart } from 'use-shopping-cart';

export function Header() {
  const { handleDrawer, isDrawerOpen } = useDrawer();
  const { cartCount } = useShoppingCart();

  return (
    <>
      <CartDrawer handleDrawer={handleDrawer} isDrawerOpen={isDrawerOpen} />

      <HeaderContainer>
        <Link href="/">
          <Image src={logo.src} alt="" width={140} height={52} />
        </Link>
        <HeaderShopCart>
          <Badge className="cart-count" label={cartCount ? cartCount : 0} />
          <Button onClick={handleDrawer} size="md" color="secondary" icon><Handbag /></Button>
        </HeaderShopCart>
      </HeaderContainer>
    </>
  );
}