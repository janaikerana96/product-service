import { Brand } from '../entities/brand';

export abstract class BrandRepository {
  abstract create(brand: Brand): Promise<void>;
  abstract findById(brandId: string): Promise<Brand | null>;
  abstract update(brand: Brand): Promise<void>;
  abstract findAll(): Promise<Brand[] | null>;
  /* abstract countManyCategoryId(categoryId: string): Promise<number>;
    abstract findManyByCategoryId(categoryId: string): Promise<Brand[]>; */
}
