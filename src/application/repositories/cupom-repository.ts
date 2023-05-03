import { Cupom } from '../entities/cupom';

export abstract class CupomRepository {
  abstract create(cupom: Cupom): Promise<void>;
  abstract findById(cupomId: string): Promise<Cupom | null>;
  abstract update(cupom: Cupom): Promise<void>;
  abstract findAll(): Promise<Cupom[] | null>;
  /* abstract countManyCategoryId(categoryId: string): Promise<number>;
    abstract findManyByCategoryId(categoryId: string): Promise<Brand[]>; */
}
