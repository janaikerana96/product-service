export interface CategoryProps {
  id: string;
  name: string;
  description: string;
  slug: string;
  subcategory: string;
}

export class Category {
  private _id: number;
  private props: CategoryProps;

  constructor(props: CategoryProps, id?: number) {
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
  public set slug(slug: string) {
    this.props.slug = slug;
  }

  public get slug(): string {
    return this.props.slug;
  }
  public set subcategory(subcategory: string) {
    this.props.subcategory = subcategory;
  }

  public get subcategory(): string {
    return this.props.subcategory;
  }
}
