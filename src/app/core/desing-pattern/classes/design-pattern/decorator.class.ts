interface IComponent {
  getDetail(): string;
  getInitialPrice(): number;
}
export class ProductComponent implements IComponent {
  constructor(protected name: string, protected initialPrice: number) {}

  getDetail() {
    return this.name;
  }

  getInitialPrice(): number {
    return this.initialPrice;
  }
}

export abstract class ProductDecorator {
  constructor(protected productComponent: IComponent) {}

  getDetail() {
    return this.productComponent.getDetail();
  }

  getInitialPrice(): number {
    return this.productComponent.getInitialPrice();
  }
}

export class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(
    protected productComponent: IComponent,
    protected tradename: string,
    protected brand: string
  ) {
    super(productComponent);
  }

  getDetail() {
    return `${this.tradename} - ${this.brand} - ${super.getDetail()}`;
  }
}

export class StoreProductDecorator extends ProductDecorator {
  constructor(protected productComponent: IComponent, protected price: number) {
    super(productComponent);
  }

  getDetail() {
    return `${this.price} - ${super.getDetail()}`;
  }
}

export class BasicNecessityProductDecorator extends ProductDecorator {
  private tax: number = 4;
  constructor(protected productComponent: IComponent) {
    super(productComponent);
  }

  getFinalPricePlus4Taxes(): number {
    const result =
      (super.getInitialPrice() * this.tax) / 100 + super.getInitialPrice();
    console.log(
      "%cgetFinalPricePlus4Taxes ",
      "color: white; background-color: #007acc;",
      result
    );
    return result;
  }
}

export class HighRangeProductDecorator extends ProductDecorator {
  private tax: number = 21;
  constructor(protected productComponent: IComponent) {
    super(productComponent);
  }

  getFinalPricePlus21Taxes(): number {
    const result =
      (super.getInitialPrice() * this.tax) / 100 + super.getInitialPrice();
    return result;
  }

  getDetail() {
    console.log(
      "%cgetFinalPricePlus21Taxes getDetail ",
      "color: white; background-color: #007acc;",
      super.getDetail() + this.getFinalPricePlus21Taxes()
    );
    return "";
  }
}
