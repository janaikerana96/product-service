import { PrismaBrandRepository } from './prisma/repositories/prisma-brand-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ProductRepository } from 'src/application/repositories/product-repository';
import { PrismaProductRepository } from './prisma/repositories/prisma-product-repository';
import { BrandRepository } from 'src/application/repositories/brand-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
    {
      provide: BrandRepository,
      useClass: PrismaBrandRepository,
    },
  ],
  exports: [ProductRepository, BrandRepository],
})
export class DatabaseModule {}
