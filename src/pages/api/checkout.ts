import { stripe } from '@/src/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import { CartEntry } from 'use-shopping-cart/core';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const { items } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  if (!items) {
    return res.status(400).json({ error: 'Carrinho não encontrado' });
  }
  const itemsFull = await stripe.products.list({
    expand: ['data.default_price']
  });

  console.log(itemsFull);
  const formatedCartItems = items.map((item: CartEntry) => ({
    price: item.price_id,
    quantity: item.quantity
  }));

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: formatedCartItems
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
}