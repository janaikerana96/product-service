import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';
import { CreateProduct } from 'src/application/use-cases/product/create-product';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductView } from '../views/product-view';
import { GetProduct } from 'src/application/use-cases/product/get-products';
import { FindProduct } from 'src/application/use-cases/product/find-product';

@ApiTags('Product')
@Controller('product')
export class ProductsController {
  constructor(
    private createProduct: CreateProduct,
    private getProduct: GetProduct,
    private findProduct: FindProduct,
  ) {}

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

  @Get(':id')
  async getFromRecipient(@Param('id') productId: string) {
    const { product } = await this.findProduct.execute({
      productId,
    });
    return {
      product: ProductView.toHTTP(product),
    };
  }
}
