import { randomUUID } from 'crypto';

export interface PriceProps {
  id: string;
  priceValue: number;
  currencyId: string;
  cupomId: string;
}

export class Price {
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

  public set priceValue(priceValue: number) {
    this.props.priceValue = priceValue;
  }

  public get priceValue(): number {
    return this.props.priceValue;
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
