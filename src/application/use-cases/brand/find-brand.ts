import { Injectable } from '@nestjs/common';
import { BrandRepository } from 'src/application/repositories/brand-repository';
import { Brand } from 'src/application/entities/brand';
import { BrandNotFound } from '../errors/brand-not-found';

interface FindBrandRequest {
  brandId: string;
}

interface FindBrandResponse {
  brand: Brand;
}

@Injectable()
export class FindBrand {
  constructor(private brandRpository: BrandRepository) {}

  async execute(request: FindBrandRequest): Promise<FindBrandResponse> {
    const { brandId } = request;

    const brand = await this.brandRpository.findById(brandId);

    if (!brand) {
      throw new BrandNotFound();
    }

    return { brand };
  }
}
