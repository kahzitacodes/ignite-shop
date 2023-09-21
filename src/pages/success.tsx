import Link from 'next/link';
import { ImageWrapper, ImagesContainer, SuccessContainer } from '../styles/pages/success';
import { GetServerSideProps } from 'next';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { ImageContainer } from '../styles/pages/product';

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  console.log(products);
  return (
    <Layout>
      <Head>
        <title>Compra Efetuada| Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {products.map((product) => {
            return (
              <ImageWrapper key={product.id}>
                <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
              </ImageWrapper>
            );
          })}
        </ImagesContainer>

        <h1>Compra realizada com sucesso!</h1>

        <p>Uhuul <strong>{customerName}</strong>, sua compra de {products.length} <strong>{products.length === 1 ? 'camiseta' : 'camisetas'}</strong> já está a caminho da sua casa.</p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data;

  const formatedProducts = products?.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return {
      id: product.id,
      name: product.description,
      imageUrl: product.images[0],
      quantity: item.quantity
    };
  });

  const quantity = formatedProducts?.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0), 0);

  return {
    props: {
      customerName,
      products: formatedProducts,
      quantity
    }
  };
};
