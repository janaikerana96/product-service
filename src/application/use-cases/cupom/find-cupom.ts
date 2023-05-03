import { Injectable } from '@nestjs/common';
import { Cupom } from 'src/application/entities/cupom';
import { CupomRepository } from 'src/application/repositories/cupom-repository';
import { BrandNotFound } from '../errors/brand-not-found';

interface FindCupomRequest {
  cupomId: string;
}

interface FindCupomResponse {
  cupom: Cupom;
}

@Injectable()
export class FindCupom {
  constructor(private cupomRpository: CupomRepository) {}

  async execute(request: FindCupomRequest): Promise<FindCupomResponse> {
    const { cupomId } = request;

    const cupom = await this.cupomRpository.findById(cupomId);

    if (!cupom) {
      throw new BrandNotFound();
    }

    return { cupom };
  }
}
