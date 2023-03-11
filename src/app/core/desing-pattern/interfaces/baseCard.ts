export interface IResponse {
  isSuccess?: boolean;
  isFail?: boolean;
}

export interface IBaseClass {
  setStrategy( s: IBaseCard ): any;
  execute( u: string, a: number ): IResponse;
}

export interface IPaymentCard extends IBaseCard {
  cardNumber: string;
  cvv: string;
}


export interface IBaseCard {
  execute( userId: string, amount: number ): IResponse;
}

