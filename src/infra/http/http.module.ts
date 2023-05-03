import { Module } from '@nestjs/common';
import { CreateProduct } from 'src/application/use-cases/product/create-product';
import { FindProduct } from 'src/application/use-cases/product/find-product';
import { GetProducts } from 'src/application/use-cases/product/get-products';
import { SeachProduct } from 'src/application/use-cases/product/search-product';
import { DatabaseModule } from '../database/database.module';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CreateBrand } from 'src/application/use-cases/brand/create-brand';
import { GetBrands } from 'src/application/use-cases/brand/get-brands';
import { FindBrand } from 'src/application/use-cases/brand/find-brand';
import { SeachBrand } from 'src/application/use-cases/brand/search-brand';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController, BrandsController],
  providers: [
    CreateProduct,
    FindProduct,
    GetProducts,
    SeachProduct,
    CreateBrand,
    GetBrands,
    FindBrand,
    SeachBrand,
  ],
})
export class HttpModule {}
