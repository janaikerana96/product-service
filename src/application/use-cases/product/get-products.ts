import { Injectable } from '@nestjs/common';
import { Product } from 'src/application/entities/product';
import { ProductRepository } from 'src/application/repositories/product-repository';
import { ProductNotFound } from '../errors/product-not-found';

interface GetProductResponse {
  product: Product[];
}

@Injectable()
export class GetProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<GetProductResponse> {
    const product = await this.productRepository.findMany();
    if (!product) {
      throw new ProductNotFound();
    }
    return {
      product,
    };
  }
}
