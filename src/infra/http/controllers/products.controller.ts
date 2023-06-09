import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProduct } from 'src/application/use-cases/product/create-product';
import { FindProduct } from 'src/application/use-cases/product/find-product';
import { GetProducts } from 'src/application/use-cases/product/get-products';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductView } from '../views/product-view';

@ApiTags('Product')
@Controller('product')
export class ProductsController {
  constructor(
    private createProduct: CreateProduct,
    private getProducts: GetProducts,
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

  @Get()
  async getAllProducts() {
    const { products } = await this.getProducts.execute();
    return {
      product: products.map(ProductView.toHTTP),
    };
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
