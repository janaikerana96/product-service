import { Price } from '../entities/price';

export abstract class PriceRepository {
  abstract create(price: Price): Promise<void>;
  abstract findById(priceId: string): Promise<Price | null>;
  abstract update(price: Price): Promise<void>;
  abstract findAll(): Promise<Price[] | null>;
  /* abstract countManyCategoryId(categoryId: string): Promise<number>;
    abstract findManyByCategoryId(categoryId: string): Promise<Brand[]>; */
}
