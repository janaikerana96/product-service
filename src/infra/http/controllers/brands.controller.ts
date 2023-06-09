import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBrand } from 'src/application/use-cases/brand/create-brand';
import { FindBrand } from 'src/application/use-cases/brand/find-brand';
import { GetBrands } from 'src/application/use-cases/brand/get-brands';
import { CreateBrandDto } from '../dtos/create-brand.dto';
import { BrandView } from '../views/brand-view';

@ApiTags('Brand')
@Controller('brand')
export class BrandsController {
  constructor(
    private createBrand: CreateBrand,
    private getBrands: GetBrands,
    private findBrand: FindBrand,
  ) {}

  @Post('create')
  async create(@Body() dto: CreateBrandDto) {
    const { name, description } = dto;

    const { brand } = await this.createBrand.execute({
      name,
      description,
    });

    return { brand: BrandView.toHTTP(brand) };
  }

  @Get()
  async getAllProducts() {
    const { brands } = await this.getBrands.execute();
    return {
      brand: brands.map(BrandView.toHTTP),
    };
  }

  @Get(':id')
  async getFromRecipient(@Param('id') brandId: string) {
    const { brand } = await this.findBrand.execute({
      brandId,
    });
    return {
      brand: BrandView.toHTTP(brand),
    };
  }
}
