import { Product } from '../entities/products/Product';

export const calcTotalCart = (products: Product[]) => {
  const data = products.reduce(
    (acc, curr) => {
      return {
        totalItem: acc.totalItem + curr.quantity,
        totalPrice: acc.totalPrice + curr.price * curr.quantity,
      };
    },
    {
      totalItem: 0,
      totalPrice: 0,
    },
  );
};
