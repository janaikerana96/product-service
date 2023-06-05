export interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  sku: string;
  inventory: number;
  priceId?: string;
  categoryId?: string;
  brandId?: string;
}

export class Product {
  private _id: number;
  private props: ProductProps;

  constructor(props: ProductProps, id?: number) {
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

  public set image(image: string) {
    this.props.image = image;
  }

  public get image(): string {
    return this.props.image;
  }
  public set sku(sku: string) {
    this.props.sku = sku;
  }

  public get sku(): string {
    return this.props.sku;
  }
  public set inventory(inventory: number) {
    this.props.inventory = inventory;
  }
  public get inventory(): number {
    return this.props.inventory;
  }
  public set priceId(priceId: string) {
    this.props.priceId = priceId;
  }
  public get priceId(): string {
    return this.props.priceId;
  }
  public set categoryId(categoryId: string) {
    this.props.categoryId = categoryId;
  }
  public get categoryId(): string {
    return this.props.categoryId;
  }
  public set brandId(brandId: string) {
    this.props.brandId = brandId;
  }
  public get brandId(): string {
    return this.props.brandId;
  }
}
