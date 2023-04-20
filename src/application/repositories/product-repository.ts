import { Product } from '../entities/product';

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  /*   abstract findById(productId: string): Promise<Product | null>;
  abstract update(product: Product): Promise<void>;
  abstract countManyCategoryId(categoryId: string): Promise<number>;
  abstract findManyByCategoryId(categoryId: string): Promise<Product[]>; */
}
