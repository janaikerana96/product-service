import { Injectable } from '@nestjs/common';

import { Price } from 'src/application/entities/price';
import { PriceRepository } from 'src/application/repositories/price-repository';

interface CreatePriceRequest {
  id: number;
  priceValue: number;
  currencyId: string;
  cupomId: string;
}

interface CreatePriceResponse {
  price: Price;
}

@Injectable()
export class CreatePrice {
  constructor(private priceRpository: PriceRepository) {}

  async execute(request: CreatePriceRequest): Promise<CreatePriceResponse> {
    const { id, priceValue, currencyId, cupomId } = request;

    const price = new Price({
      id,
      priceValue,
      currencyId,
      cupomId,
    });

    await this.priceRpository.create(price);

    return {
      price,
    };
  }
}
