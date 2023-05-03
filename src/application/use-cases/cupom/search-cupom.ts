import { Injectable } from '@nestjs/common';
import { Cupom } from 'src/application/entities/cupom';
import { CupomRepository } from 'src/application/repositories/cupom-repository';
import { BrandNotFound } from '../errors/brand-not-found';

interface SearchCupomRequest {
  name: string;
}

interface SearchCupomResponse {
  cupom: Cupom;
}

@Injectable()
export class SeachCupom {
  constructor(private cupomRpository: CupomRepository) {}

  async execute(request: SearchCupomRequest): Promise<SearchCupomResponse> {
    const { name } = request;

    const cupom = await this.cupomRpository.findById(name);

    if (!cupom) {
      throw new BrandNotFound();
    }

    return { cupom };
  }
}
