import { Injectable } from '@nestjs/common';
import { Currency } from 'src/application/entities/currency';
import { CurrencyRepository } from 'src/application/repositories/currency-repository';

interface CreateCurrencyRequest {
  name: string;
  currencyValue: string;
}

interface CreateCurrencyResponse {
  currency: Currency;
}

@Injectable()
export class CreateCurrency {
  constructor(private currencyRpository: CurrencyRepository) {}

  async execute(
    request: CreateCurrencyRequest,
  ): Promise<CreateCurrencyResponse> {
    const { name, currencyValue } = request;

    const currency = new Currency({
      name,
      currencyValue,
    });

    await this.currencyRpository.create(currency);

    return {
      currency,
    };
  }
}
