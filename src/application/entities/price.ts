import { randomUUID } from 'crypto';

export interface PriceProps {
  price: number;
  currencyId: string;
  cupomId: string;
}

export class Category {
  private _id: string;
  private props: PriceProps;

  constructor(props: PriceProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public get price(): number {
    return this.props.price;
  }
  public set currencyId(currencyId: string) {
    this.props.currencyId = currencyId;
  }

  public get currencyId(): string {
    return this.props.currencyId;
  }
  public set cupomId(cupomId: string) {
    this.props.cupomId = cupomId;
  }

  public get cupomId(): string {
    return this.props.cupomId;
  }
}
