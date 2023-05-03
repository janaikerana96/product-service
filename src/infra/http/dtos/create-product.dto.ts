import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  @Length(5, 248)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  sku: string;

  @ApiProperty()
  @IsNotEmpty()
  inventory: number;

  @ApiProperty()
  @IsOptional()
  priceId: string;

  @ApiProperty()
  @IsOptional()
  categoryId: string;

  @ApiProperty()
  @IsOptional()
  brandId: string;
}
