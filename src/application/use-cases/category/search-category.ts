import { Injectable } from '@nestjs/common';
import { BrandNotFound } from '../errors/brand-not-found';
import { CategoryRepository } from 'src/application/repositories/category-repository';
import { Category } from 'src/application/entities/category';

interface SearchCategoryRequest {
  name: string;
}

interface SearchCategoryResponse {
  category: Category;
}

@Injectable()
export class SeachCategory {
  constructor(private categoryRpository: CategoryRepository) {}

  async execute(
    request: SearchCategoryRequest,
  ): Promise<SearchCategoryResponse> {
    const { name } = request;

    const category = await this.categoryRpository.findById(name);

    if (!category) {
      throw new BrandNotFound();
    }

    return { category };
  }
}
