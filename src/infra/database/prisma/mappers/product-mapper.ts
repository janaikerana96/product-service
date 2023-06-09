import { Product as RawProduct } from '@prisma/client';
import { Product } from 'src/application/entities/product';

export class ProductMapper {
  static toPrisma(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      sku: product.sku,
      inventory: product.inventory,
      priceId: product.priceId,
      categoryId: product.categoryId,
      brandId: product.brandId,
    };
  }

  static toDomain(raw: RawProduct): Product {
    return new Product({
      name: raw.name,
      description: raw.description,
      image: raw.image,
      sku: raw.sku,
      inventory: raw.inventory,
      priceId: raw.priceId,
      categoryId: raw.categoryId,
      brandId: raw.brandId,
    });
  }
}
