import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductRepository } from '../../repositories/product-repository';

interface CreateProductRequest {
  name: string;
  description: string;
  image: string;
  sku: string;
  inventory: number;
  priceId?: string;
  categoryId?: string;
  brandId?: string;
}

interface CreateProductResponse {
  product: Product;
}

@Injectable()
export class CreateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: CreateProductRequest): Promise<CreateProductResponse> {
    const { name, description, image, sku, inventory } = request;

    const product = new Product({
      name,
      description,
      image,
      sku,
      inventory,
    });

    await this.productRepository.create(product);

    return {
      product,
    };
  }
}
