import { ReactNode } from 'react';

export interface DrawerProps {
  isDrawerOpen: boolean;
  handleDrawer: () => void;

  // quantity: number;
  // total: number;
  // productList: ProductProps[];
}

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string;
    defaultPriceId: string;
  };
}