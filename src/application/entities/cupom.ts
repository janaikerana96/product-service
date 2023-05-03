import { randomUUID } from 'crypto';
enum status_cupom {
  Active = 'Active',
  Inative = 'Inactive',
}
export interface CupomProps {
  name: string;
  cod_cupom: string;
  discont_value: number;
  status: status_cupom;
  date_validation: Date;
}

export class Cupom {
  private _id: string;
  private props: CupomProps;

  constructor(props: CupomProps, id?: string) {
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
  public set cod_cupom(cod_cupom: string) {
    this.props.cod_cupom = cod_cupom;
  }

  public get cod_cupom(): string {
    return this.props.cod_cupom;
  }
  public set status(status: status_cupom) {
    this.props.status = status;
  }

  public get status(): status_cupom {
    return this.props.status;
  }
  public set discont_value(discont_value: number) {
    this.props.discont_value = discont_value;
  }

  public get discont_value(): number {
    return this.props.discont_value;
  }
  public set date_validation(date_validation: Date) {
    this.props.date_validation = date_validation;
  }

  public get date_validation(): Date {
    return this.props.date_validation;
  }
}
