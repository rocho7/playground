import { IBaseCard, IPaymentCard, IResponse } from "../interfaces/baseCard";

export class VisaCard implements IPaymentCard {
  constructor( public cardNumber: string, public cvv: string ) {}
  execute( user: string, amoutn: number ): IResponse {
    return {
      isSuccess: true
    };
  }
}
