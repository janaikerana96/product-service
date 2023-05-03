import { Injectable } from '@nestjs/common';
import { Product } from 'src/application/entities/product';
import { ProductRepository } from 'src/application/repositories/product-repository';
import { ProductNotFound } from '../errors/product-not-found';

interface GetProductResponse {
  products: Product[];
}

@Injectable()
export class GetProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<GetProductResponse> {
    const products = await this.productRepository.findAll();
    if (!products) {
      throw new ProductNotFound();
    }
    return {
      products,
    };
  }
}
