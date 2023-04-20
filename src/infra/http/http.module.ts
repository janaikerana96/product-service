import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductsController } from './controllers/products.controller';
import { CreateProduct } from 'src/application/use-cases/create-product';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [CreateProduct],
})
export class HttpModule {}
