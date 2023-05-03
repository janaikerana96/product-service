import { Injectable } from '@nestjs/common';
import { ProductNotFound } from '../errors/product-not-found';
import { Cupom } from 'src/application/entities/cupom';
import { CupomRepository } from 'src/application/repositories/cupom-repository';

interface GetCupomResponse {
  cupoms: Cupom[];
}

@Injectable()
export class GetCupoms {
  constructor(private cupomRpository: CupomRepository) {}

  async execute(): Promise<GetCupomResponse> {
    const cupoms = await this.cupomRpository.findAll();
    if (!cupoms) {
      throw new ProductNotFound();
    }
    return {
      cupoms,
    };
  }
}
