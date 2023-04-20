import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID, Length } from 'class-validator';

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
  @IsUUID()
  priceId: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  categoryId: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  brandId: string;
}
