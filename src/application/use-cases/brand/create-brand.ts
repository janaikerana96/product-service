import { Injectable } from '@nestjs/common';
import { Brand } from 'src/application/entities/brand';
import { BrandRepository } from 'src/application/repositories/brand-repository';

interface CreateBrandRequest {
  name: string;
  description: string;
}

interface CreateBrandResponse {
  brand: Brand;
}

@Injectable()
export class CreateBrand {
  constructor(private brandRpository: BrandRepository) {}

  async execute(request: CreateBrandRequest): Promise<CreateBrandResponse> {
    const { name, description } = request;

    const brand = new Brand({
      name,
      description,
    });

    await this.brandRpository.create(brand);

    return {
      brand,
    };
  }
}
