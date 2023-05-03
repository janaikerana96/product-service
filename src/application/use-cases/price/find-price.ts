import { Injectable } from '@nestjs/common';
import { BrandNotFound } from '../errors/brand-not-found';
import { Price } from 'src/application/entities/price';
import { PriceRepository } from 'src/application/repositories/price-repository';

interface FindPriceRequest {
  priceId: string;
}

interface FindPriceResponse {
  price: Price;
}

@Injectable()
export class FindPrice {
  constructor(private priceRpository: PriceRepository) {}

  async execute(request: FindPriceRequest): Promise<FindPriceResponse> {
    const { priceId } = request;

    const price = await this.priceRpository.findById(priceId);

    if (!price) {
      throw new BrandNotFound();
    }

    return { price };
  }
}
