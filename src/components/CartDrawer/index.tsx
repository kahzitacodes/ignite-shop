import { X } from '@phosphor-icons/react';
import { Button } from '../Base/Button';
import { CartContainer, CartFooter, CartProducts, ProductContainer, ProductContent, ProductImage } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { DrawerProps } from './types';
import { createPortal } from 'react-dom';
import { useShoppingCart } from 'use-shopping-cart';
import { formatPrice } from '@/src/utils/format-price';
import { Badge } from '../Base/Badge';
import { EmptyState } from '../Base/EmptyState';
import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { GetStaticProps } from 'next';
import { stripe } from '@/src/lib/stripe';
import Stripe from 'stripe';

export function CartDrawer({ isDrawerOpen, handleDrawer }: DrawerProps) {
  const [checkoutStatus, setCheckoutStatus] = useState('idle');
  const { removeItem, cartCount, formattedTotalPrice, cartDetails } = useShoppingCart();

  const cartItems = Object.values(cartDetails!);

  async function handleCheckout() {
    try {
      setCheckoutStatus('is-creating');
      //const itemsToCheckout: any = cartItems.map((item) => { item.id, item.quantity; });

      const response: any = await axios.post("/api/checkout", {
        items: cartItems
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error(error);
      setCheckoutStatus('redirect-error');
    }
  }

  if (!isDrawerOpen) {
    return null;
  }

  return createPortal(
    <CartContainer className={`${isDrawerOpen ? 'is-visible' : null}`} tabIndex={-1} role="dialog">
      <Button onClick={handleDrawer} className="close-button" color="ghost" size="md">
        <X />
      </Button>
      <h2>Sacola de compras</h2>

      {cartItems.length !== 0
        ?
        <CartProducts>
          {cartItems.map((product) => {
            return (
              <ProductContainer key={product?.id}>
                <ProductImage>
                  <Image
                    src={product?.image!}
                    alt={product?.name}
                    width={94}
                    height={94}
                  />
                </ProductImage>
                <ProductContent>
                  <span>{product?.name}</span>
                  <div className="row">
                    <strong>{formatPrice(product?.value)}</strong>
                    <Badge size="lg" color="neutral" label={`x${product.quantity}`} />
                  </div>
                  <Link href="#" onClick={() => { removeItem(product?.id); }}>Remover</Link>
                </ProductContent>
              </ProductContainer>
            );
          })}
        </CartProducts>
        :
        <EmptyState />
      }

      <CartFooter>
        <div className="infos">

          <div className="infos-item">
            <span>Quantidade</span>
            <span>{cartCount} {cartCount === 1 ? 'item' : 'itens'}</span>
          </div>

          <div className="infos-item">
            <span className="fw-bold fs-md">Valor total</span>
            <strong className="fs-xl">{formattedTotalPrice}</strong>
          </div>
        </div>

        <Button color="primary" size="xl" onClick={handleCheckout} disabled={checkoutStatus === 'is-creating'}>Finalizar compra</Button>
      </CartFooter>
    </CartContainer>, document.body
  );
}

export const getStaticProps: GetStaticProps<any, { id: string; }> = async ({ params }) => {
  const paramsId = params?.id as string;

  const product = await stripe.products.retrieve(paramsId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;
  console.log(price);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      },
      revalidate: 60 * 60 * 1 //1hour, 
    }
  };
};