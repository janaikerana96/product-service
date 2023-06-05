export interface CatalogProps {
  name: string;
  description: string;
}

export class Catalog {
  private _id: number;
  private props: CatalogProps;

  constructor(props: CatalogProps, id?: number) {
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
  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }
}
