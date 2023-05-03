import { Injectable } from '@nestjs/common';
import { ProductNotFound } from '../errors/product-not-found';
import { CategoryRepository } from 'src/application/repositories/category-repository';
import { Category } from 'src/application/entities/category';

interface GetCategoryResponse {
  categories: Category[];
}

@Injectable()
export class GetCategories {
  constructor(private categoryRpository: CategoryRepository) {}

  async execute(): Promise<GetCategoryResponse> {
    const categories = await this.categoryRpository.findAll();
    if (!categories) {
      throw new ProductNotFound();
    }
    return {
      categories,
    };
  }
}
