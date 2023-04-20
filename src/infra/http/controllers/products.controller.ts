import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';
import { CreateProduct } from 'src/application/use-cases/create-product';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductView } from '../views/product-view';

@ApiTags('Product')
@Controller('product')
export class ProductsController {
  constructor(private createProduct: CreateProduct) {}

  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    const {
      name,
      description,
      image,
      sku,
      inventory,
      priceId,
      categoryId,
      brandId,
    } = dto;

    const { product } = await this.createProduct.execute({
      id: randomUUID(),
      name,
      description,
      image,
      sku,
      inventory,
      priceId,
      categoryId,
      brandId,
    });

    return { product: ProductView.toHTTP(product) };
  }
}
