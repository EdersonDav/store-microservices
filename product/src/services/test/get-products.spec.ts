import { makeProduct } from '../../../test/factories/products-factory';
import { InMemoryProductRepository } from '../../repositories/repositories-tests/in-memory-product-repository';
import { GetProducts } from '../getProducts';

describe('Get Products', () => {
  it('shold be able to get products list', async () => {
    const productRepository = new InMemoryProductRepository();
    const getProducts = new GetProducts(productRepository);
    const length = 3;

    productRepository.create(makeProduct());
    productRepository.create(makeProduct());
    productRepository.create(makeProduct());

    const products = await getProducts.execute();

    expect(products).toHaveLength(length);
  });
});

// import { HttpException, HttpStatus } from '@nestjs/common';

// export class ProductNotFound extends HttpException {
//   constructor() {
//     super('Products not found', HttpStatus.NOT_FOUND);
//   }
// }
