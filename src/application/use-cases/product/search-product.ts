import { Injectable } from '@nestjs/common';
import { Product } from 'src/application/entities/product';
import { ProductRepository } from 'src/application/repositories/product-repository';
import { ProductNotFound } from '../errors/product-not-found';

interface SearchProductRequest {
  name: string;
}

interface SearchProductResponse {
  product: Product;
}

@Injectable()
export class SeachProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: SearchProductRequest): Promise<SearchProductResponse> {
    const { name } = request;

    const product = await this.productRepository.findById(name);

    if (!product) {
      throw new ProductNotFound();
    }

    return { product };
  }
}
