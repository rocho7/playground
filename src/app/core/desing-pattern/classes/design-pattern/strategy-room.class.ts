export interface IRoom {
  select(room: any): any;
}

export class RoomStrategyContext implements IRoom {
  protected strategy: IRoom;
  // constructor(protected strategy: IRoom) {}

  setStrategy(strategy: IRoom) {
    this.strategy = strategy;
  }

  select(room: any): any {
    return this.strategy.select(room);
  }
}

export class SingleRoomStrategy implements IRoom {
  select(room: any): any {
    console.log("%csingle ", "color: white; background-color: #007acc;", room);
    return room;
  }
}

export class SuiteRoomStrategy implements IRoom {
  select(room: any) {
    console.log("%csuit ", "color: white; background-color: #007acc;", room);
    return room;
  }
}

export class Room {
  constructor(
    private name: string,
    private price: number,
    public instance: IRoom
  ) {}
}
