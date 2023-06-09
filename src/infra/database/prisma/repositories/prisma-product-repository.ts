import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from 'src/application/entities/product';
import { ProductMapper } from '../mappers/product-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaProductRepository implements PrismaProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    const raw = ProductMapper.toPrisma(product);
    await this.prisma.product.create({
      data: raw,
    });
  }

  async findById(productId: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      throw new ForbiddenException('Product not found!');
    }
    return ProductMapper.toDomain(product);
  }

  async findAll(): Promise<Product[]> {
    const product = await this.prisma.product.findMany({
      include: {
        brand: {},
      },
    });
    return product.map(ProductMapper.toDomain);
  }

  /* async update(product: Product): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(product);

    await this.prisma.product.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  } */
}
