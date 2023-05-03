import { Injectable } from '@nestjs/common';
import { BrandNotFound } from '../errors/brand-not-found';
import { Currency } from 'src/application/entities/currency';
import { CurrencyRepository } from 'src/application/repositories/currency-repository';

interface FindCurrencyRequest {
  currencyId: string;
}

interface FindCurrencyResponse {
  currency: Currency;
}

@Injectable()
export class FindCurrency {
  constructor(private currencyRpository: CurrencyRepository) {}

  async execute(request: FindCurrencyRequest): Promise<FindCurrencyResponse> {
    const { currencyId } = request;

    const currency = await this.currencyRpository.findById(currencyId);

    if (!currency) {
      throw new BrandNotFound();
    }

    return { currency };
  }
}
