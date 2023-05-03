import { Injectable } from '@nestjs/common';
import { ProductNotFound } from '../errors/product-not-found';
import { Price } from 'src/application/entities/price';
import { PriceRepository } from 'src/application/repositories/price-repository';

interface GetPriceResponse {
  prices: Price[];
}

@Injectable()
export class GetPrices {
  constructor(private priceRpository: PriceRepository) {}

  async execute(): Promise<GetPriceResponse> {
    const prices = await this.priceRpository.findAll();
    if (!prices) {
      throw new ProductNotFound();
    }
    return {
      prices,
    };
  }
}
