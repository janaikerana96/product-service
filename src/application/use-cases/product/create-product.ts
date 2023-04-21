import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductRepository } from '../../repositories/product-repository';
import { randomUUID } from 'node:crypto';

interface CreateProductRequest {
  id: string;
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
      id: randomUUID(),
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
