import { Injectable } from '@nestjs/common';
import { BrandNotFound } from '../errors/brand-not-found';
import { Price } from 'src/application/entities/price';
import { PriceRepository } from 'src/application/repositories/price-repository';

interface SearchPriceRequest {
  priceValue: string;
}

interface SearchPriceResponse {
  price: Price;
}

@Injectable()
export class SeachPrice {
  constructor(private priceRpository: PriceRepository) {}

  async execute(request: SearchPriceRequest): Promise<SearchPriceResponse> {
    const { priceValue } = request;

    const price = await this.priceRpository.findById(priceValue);

    if (!price) {
      throw new BrandNotFound();
    }

    return { price };
  }
}
