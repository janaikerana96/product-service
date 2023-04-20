import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ProductRepository } from 'src/application/repositories/product-repository';
import { PrismaProductRepository } from './prisma/repositories/prisma-product-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [ProductRepository],
})
export class DatabaseModule {}
