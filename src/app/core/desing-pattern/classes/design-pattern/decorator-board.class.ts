import { IBoardStrategy } from "./strategy-board.class";

export interface IMeal {
  infoBoard(): string;
  priceBoard(): number;
  // schoolLunch(): any;
  // halfBoard(): any;
  // fullBoard(): any;
}

export class Meal implements IMeal {
  constructor(
    public name: string,
    private price: number,
    public strategy: IBoardStrategy
  ) {}

  infoBoard(): string {
    return this.name;
  }
  priceBoard(): number {
    return this.price;
  }
}

export abstract class MealDecorator {
  constructor(public mealDecorator: IMeal) {}

  getTypeOfBoard(): string {
    return this.mealDecorator.infoBoard();
  }

  getPriceBoard(): number {
    return this.mealDecorator.priceBoard();
  }
}

export class BreakFast extends MealDecorator {
  private type: string = "School-lunch board";
  private meal: string = "Just breakfast";
  constructor(public mealDecorator: IMeal) {
    super(mealDecorator);
  }

  getTypeOfBoard(): string {
    console.log(
      "%cbreakFast ",
      "background: green; color: white; display: block;",
      `${this.type} ${
        this.meal
      } ${this.mealDecorator.priceBoard()} ${super.getTypeOfBoard()}`
    );
    return `${this.type} ${this.meal} ${super.getTypeOfBoard()}`;
  }
}

export class Lunch extends MealDecorator {
  private type: string = "Half board";
  private meal: string = "breakfast and dinner";
  constructor(public mealDecorator: IMeal) {
    super(mealDecorator);
  }

  getTypeOfBoard(): string {
    console.log(
      "%cLunch ",
      "background: green; color: white; display: block;",
      `${this.type} ${this.meal} ${super.getTypeOfBoard()}`
    );
    return `${this.type} ${
      this.meal
    } ${this.mealDecorator.priceBoard()} ${super.getTypeOfBoard()}`;
  }
}

export class Dinner extends MealDecorator {
  private type: string = "Full board";
  private meal: string = "breakfast, lunch and dinner";
  constructor(public mealDecorator: IMeal) {
    super(mealDecorator);
  }

  getTypeOfBoard(): string {
    console.log(
      "%cDinner ",
      "background: green; color: white; display: block;",
      `${this.type} ${
        this.meal
      } ${this.mealDecorator.priceBoard()} ${super.getTypeOfBoard()}`
    );
    return `${this.type} ${this.meal} ${super.getTypeOfBoard()}`;
  }
}
