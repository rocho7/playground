export interface IStragegy {
  login(user: string, password: string): boolean;
}

export class StrategyContext implements IStragegy {
  strategy: IStragegy;
  constructor(strategy: IStragegy) {
    this.setStrategy(strategy);
  }
  setStrategy(strategy: IStragegy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

export class FaceBookStragegy implements IStragegy {
  login(user: string, password: string): boolean {
    if (user === "face" && password === "123") {
      return true;
    }
    return false;
  }
}

export class InstagramStragegy implements IStragegy {
  login(user: string, password: string): boolean {
    if (user === "insta" && password === "456") {
      return true;
    }
    return false;
  }
}
