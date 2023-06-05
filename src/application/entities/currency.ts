export interface CurrencyProps {
  name: string;
  currencyValue: string;
}

export class Currency {
  private _id: number;
  private props: CurrencyProps;

  constructor(props: CurrencyProps, id?: number) {
    this._id = id;
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
  public set currencyValue(currencyValue: string) {
    this.props.currencyValue = currencyValue;
  }

  public get currencyValue(): string {
    return this.props.currencyValue;
  }
}
