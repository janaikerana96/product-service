import { Injectable } from '@nestjs/common';
import { Brand } from 'src/application/entities/brand';
import { BrandRepository } from 'src/application/repositories/brand-repository';
import { ProductNotFound } from '../errors/product-not-found';

interface GetBrandResponse {
  brands: Brand[];
}

@Injectable()
export class GetBrands {
  constructor(private brandRpository: BrandRepository) {}

  async execute(): Promise<GetBrandResponse> {
    const brands = await this.brandRpository.findAll();
    if (!brands) {
      throw new ProductNotFound();
    }
    return {
      brands,
    };
  }
}
