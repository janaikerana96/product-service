import { Price } from 'src/application/entities/price';

export class PriceView {
  static toHTTP(price: Price) {
    return {
      id: price.id,
      priceValue: price.priceValue,
      currencyId: price.currencyId,
      cupomId: price.cupomId,
    };
  }
}
