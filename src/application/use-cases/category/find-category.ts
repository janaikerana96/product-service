import { Injectable } from '@nestjs/common';
import { BrandNotFound } from '../errors/brand-not-found';
import { CategoryRepository } from 'src/application/repositories/category-repository';
import { Category } from 'src/application/entities/category';

interface FindCategoryRequest {
  categoryId: string;
}

interface FindCategoryResponse {
  category: Category;
}

@Injectable()
export class FindCategory {
  constructor(private categoryRpository: CategoryRepository) {}

  async execute(request: FindCategoryRequest): Promise<FindCategoryResponse> {
    const { categoryId } = request;

    const category = await this.categoryRpository.findById(categoryId);

    if (!category) {
      throw new BrandNotFound();
    }

    return { category };
  }
}
