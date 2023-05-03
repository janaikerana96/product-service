import { Injectable } from '@nestjs/common';
import { Brand } from 'src/application/entities/brand';
import { BrandRepository } from 'src/application/repositories/brand-repository';
import { BrandNotFound } from '../errors/brand-not-found';

interface SearchBrandRequest {
  name: string;
}

interface SearchBrandResponse {
  brand: Brand;
}

@Injectable()
export class SeachBrand {
  constructor(private brandRpository: BrandRepository) {}

  async execute(request: SearchBrandRequest): Promise<SearchBrandResponse> {
    const { name } = request;

    const brand = await this.brandRpository.findById(name);

    if (!brand) {
      throw new BrandNotFound();
    }

    return { brand };
  }
}
