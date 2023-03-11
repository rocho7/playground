import { IBaseCard, IBaseClass, IResponse } from "../interfaces/baseCard";

export class BaseClass implements IBaseClass {
  constructor() {}
  strategy: IBaseCard;
  setStrategy( strategy: IBaseCard )  {
    this.strategy = strategy;
  }
  execute( userId: string, amount: number ): IResponse {
    const newLocal = this.strategy.execute(userId, amount);
    return newLocal;
  }
}
