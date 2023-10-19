import { IMeal, BreakFast, Lunch, Meal, Dinner } from "./decorator-board.class";

export interface IBoardStrategy {
  checkIn(board: IMeal): any;
}

export class BoardStrategyContext implements IBoardStrategy {
  private strategy: IBoardStrategy;
  // constructor(protected strategy: IBoardStrategy) {
  //   this.setStrategy(strategy);
  // }

  setStrategy(strategy: IBoardStrategy): void {
    this.strategy = strategy;
  }
  checkIn(board: IMeal): Meal {
    return this.strategy.checkIn(board);
  }
}

export class SchoolLunchBoardStrategy implements IBoardStrategy {
  checkIn(schoolLunchBoard: IMeal): any {
    const schoolLunchDecorator = new BreakFast(schoolLunchBoard);
    schoolLunchDecorator.getTypeOfBoard();
    console.log(
      "%cSchoolLunchBoardStrategy ",
      "color: red; display: block; width: 100%;"
    );
    return schoolLunchDecorator;
  }
}
export class HalfBoardStrategy implements IBoardStrategy {
  checkIn(board: IMeal): any {
    // const halfBoard = new Lunch(board);
    const breakFastDecorator = new BreakFast(board);
    const schoolLunchDecorator = new Dinner(breakFastDecorator.mealDecorator);

    // halfBoard.getTypeOfBoard();
    console.log(
      "%cHalfBoardStrategy ",
      "color: red; display: block; width: 100%;",
      schoolLunchDecorator.getPriceBoard()
    );
    return schoolLunchDecorator;
  }
}
export class FullBoardStrategy implements IBoardStrategy {
  checkIn(board: IMeal): any {
    const fullBoardDecorator = new Dinner(board);

    console.log(
      "%cFullBoardStrategy ",
      "color: red; display: block; width: 100%;",
      fullBoardDecorator.getTypeOfBoard(),
      fullBoardDecorator.getPriceBoard()
    );
    return fullBoardDecorator;
  }
}
