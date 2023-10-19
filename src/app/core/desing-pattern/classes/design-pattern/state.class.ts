export interface IState {
  next(ticket: Ticket): number | null;
  add(ticket: Ticket, quantity: number): void;
}

export class Ticket {
  public limit: number;
  private state: IState;
  quantity: number;
  private number: number;

  constructor() {
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyState();
  }

  set setLimit(limit: number) {
    this.limit = limit;
  }

  get getNumber(): number {
    return this.number++;
  }

  set setState(state: IState) {
    this.state = state;
  }

  get getState() {
    return this.state;
  }

  next(): number | null {
    return this.state.next(this);
  }

  add(quantity: number): void {
    this.state.add(this, quantity);
  }
}

export class EmptyState implements IState {
  next(ticket: Ticket): number | null {
    return null;
  }
  add(ticket: Ticket, quantity: number): void {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.limit) {
      ticket.setState = new FullState();
    }
  }
}

export class WithDataState implements IState {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }
    return ticket.getNumber;
  }
  add(ticket: Ticket, quantity: number): void {
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}

export class FullState implements IState {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }
    return ticket.getNumber;
  }
  add(ticket: Ticket, quantity: number): void {
    console.log("%cTicket lleno ", "color: red; display: block; width: 100%;");
  }
}
