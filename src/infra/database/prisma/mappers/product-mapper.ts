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
}
