import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Category } from 'src/application/entities/category';
import { CategoryRepository } from 'src/application/repositories/category-repository';

interface CreateCategoryRequest {
  id: string;
  name: string;
  description: string;
  slug: string;
  subcategory: string;
}

interface CreateCategoryResponse {
  category: Category;
}

@Injectable()
export class CreateCategory {
  constructor(private categoryRpository: CategoryRepository) {}

  async execute(
    request: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> {
    const { name, description, slug, subcategory } = request;

    const category = new Category({
      id: randomUUID(),
      name,
      description,
      slug,
      subcategory,
    });

    await this.categoryRpository.create(category);

    return {
      category,
    };
  }
}
