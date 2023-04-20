import { randomUUID } from 'crypto';

export interface BrandProps {
  name: string;
  description: string;
}

export class Brand {
  private _id: string;
  private props: BrandProps;

  constructor(props: BrandProps, id?: string) {
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
  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }
}
