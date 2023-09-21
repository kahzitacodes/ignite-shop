import Head from 'next/head';
import Image from 'next/image';
import Stripe from 'stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/router';
import { stripe } from '@/src/lib/stripe';
import { Button } from '@/src/components/Base/Button';
import { Layout } from '@/src/components/Layout';
import { formatPrice } from '@/src/utils/format-price';

export interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const { addItem, } = useShoppingCart();

  async function handleBuyProduct() {
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

  return (
    <Layout>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        {!isFallback
          ? <>
            <ImageContainer>
              <Image src={product?.imageUrl} alt={product?.name} height={480} width={520} />
            </ImageContainer>

            <ProductDetails>
              <h1>{product?.name}</h1>
              <span>{formatPrice(product?.price)}</span>

              <p>{product?.description}</p>

              <Button onClick={handleBuyProduct} >Comprar agora</Button>
            </ProductDetails>
          </> :
          <p>Loading...</p>}

      </ProductContainer>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_OXel98XfnismB7' } }
    ],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<any, { id: string; }> = async ({ params }) => {
  const paramsId = params?.id as string;

  const product = await stripe.products.retrieve(paramsId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

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