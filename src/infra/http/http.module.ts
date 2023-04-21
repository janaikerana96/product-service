import { Module } from '@nestjs/common';
import { CreateProduct } from 'src/application/use-cases/product/create-product';
import { FindProduct } from 'src/application/use-cases/product/find-product';
import { GetProduct } from 'src/application/use-cases/product/get-products';
import { SeachProduct } from 'src/application/use-cases/product/search-product';
import { DatabaseModule } from '../database/database.module';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [CreateProduct, FindProduct, GetProduct, SeachProduct],
})
export class HttpModule {}
