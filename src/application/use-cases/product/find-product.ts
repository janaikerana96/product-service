import { Injectable } from '@nestjs/common';
import { Product } from 'src/application/entities/product';
import { ProductRepository } from 'src/application/repositories/product-repository';
import { ProductNotFound } from '../errors/product-not-found';

interface FindProductRequest {
  productId: string;
}

interface FindProductResponse {
  product: Product;
}

@Injectable()
export class FindProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: FindProductRequest): Promise<FindProductResponse> {
    const { productId } = request;

    const product = await this.productRepository.findById(productId);

    if (!product) {
      throw new ProductNotFound();
    }

    return { product };
  }
}
