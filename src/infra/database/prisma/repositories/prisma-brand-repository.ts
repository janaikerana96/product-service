import { ForbiddenException, Injectable } from '@nestjs/common';
import { Brand } from 'src/application/entities/brand';
import { BrandMapper } from '../mappers/brand-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaBrandRepository implements PrismaBrandRepository {
  constructor(private prisma: PrismaService) {}

  async create(brand: Brand): Promise<void> {
    const raw = BrandMapper.toPrisma(brand);
    await this.prisma.brand.create({
      data: raw,
    });
  }

  async findById(brandId: number): Promise<Brand | null> {
    const brand = await this.prisma.brand.findUnique({
      where: {
        id: brandId,
      },
    });
    if (!brand) {
      throw new ForbiddenException('Brand not found!');
    }
    return BrandMapper.toDomain(brand);
  }

  async findAll(): Promise<Brand[]> {
    const brand = await this.prisma.brand.findMany();
    return brand.map(BrandMapper.toDomain);
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
