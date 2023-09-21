import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HomeContainer, Product } from '../styles/pages';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import { Button } from '../components/Base/Button';
import { Handbag } from '@phosphor-icons/react';
import { Layout } from '../components/Layout';
import { formatPrice } from '../utils/format-price';
import { useShoppingCart } from 'use-shopping-cart';

interface HomeProducts {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProducts) {
  const { addItem } = useShoppingCart();

  async function handleBuyProduct(product: any) {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      image: product.imageUrl,
      currency: 'BRL',
      price_id: product.defaultPriceId
    }, { count: 1 }
    );
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    }
  });

  return (
    <Layout>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide" >
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} alt="" width={520} height={480} priority={true} />
              </Link>
              <footer>
                <div className="product-infos">
                  <Link href={`/product/${product.id}`} prefetch={false}>
                    <strong>{product.name}</strong>
                  </Link>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <Button size="lg" icon onClick={() => handleBuyProduct(product)}><Handbag /></Button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  };
};