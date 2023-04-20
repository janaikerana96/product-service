import { randomUUID } from 'crypto';

export interface CurrencyProps {
  name: string;
  currency: string;
}

export class Currency {
  private _id: string;
  private props: CurrencyProps;

  constructor(props: CurrencyProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }
  public set currency(currency: string) {
    this.props.currency = currency;
  }

  public get currency(): string {
    return this.props.currency;
  }
}
