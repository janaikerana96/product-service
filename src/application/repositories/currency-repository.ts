import { Currency } from '../entities/currency';

export abstract class CurrencyRepository {
  abstract create(currency: Currency): Promise<void>;
  abstract findById(currencyId: string): Promise<Currency | null>;
  abstract update(currency: Currency): Promise<void>;
  abstract findAll(): Promise<Currency[] | null>;
  /* abstract countManyCategoryId(categoryId: string): Promise<number>;
    abstract findManyByCategoryId(categoryId: string): Promise<Currency[]>; */
}
