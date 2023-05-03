import { Injectable } from '@nestjs/common';
import { Cupom } from 'src/application/entities/cupom';
import { CupomRepository } from 'src/application/repositories/cupom-repository';

enum status_cupom {
  Active = 'Active',
  Inative = 'Inactive',
}

interface CreateCupomRequest {
  name: string;
  cod_cupom: string;
  discont_value: number;
  status: status_cupom;
  date_validation: Date;
}

interface CreateCupomResponse {
  cupom: Cupom;
}

@Injectable()
export class CreateCupom {
  constructor(private cupomRpository: CupomRepository) {}

  async execute(request: CreateCupomRequest): Promise<CreateCupomResponse> {
    const { name, cod_cupom, discont_value, status, date_validation } = request;

    const cupom = new Cupom({
      name,
      cod_cupom,
      discont_value,
      status,
      date_validation,
    });

    await this.cupomRpository.create(cupom);

    return {
      cupom,
    };
  }
}
