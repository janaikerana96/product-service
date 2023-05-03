import { Category } from '../entities/category';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract findById(brandId: string): Promise<Category | null>;
  abstract update(category: Category): Promise<void>;
  abstract findAll(): Promise<Category[] | null>;
  /* abstract countManyCategoryId(categoryId: string): Promise<number>;
    abstract findManyByCategoryId(categoryId: string): Promise<Category[]>; */
}
