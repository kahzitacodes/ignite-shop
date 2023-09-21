import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { CartProvider } from 'use-shopping-cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      cartMode='checkout-session'
      currency='BRL'
      shouldPersist
    >
      <Component {...pageProps} />
    </CartProvider>
  );
}
