import { Brand as RawBrand } from '@prisma/client';
import { Brand } from 'src/application/entities/brand';

export class BrandMapper {
  static toPrisma(brand: Brand) {
    return {
      id: brand.id,
      name: brand.name,
      description: brand.description,
    };
  }

  static toDomain(raw: RawBrand): Brand {
    return new Brand(
      {
        id: raw.id,
        name: raw.name,
        description: raw.description,
      },
      raw.id,
    );
  }
}
