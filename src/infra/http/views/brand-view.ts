import { Brand } from '@prisma/client';

export class BrandView {
  static toHTTP(brand: Brand) {
    return {
      id: brand.id,
      name: brand.name,
      description: brand.description,
    };
  }
}
