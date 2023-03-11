import { IPaymentCard, IResponse } from "../interfaces/baseCard";

export class MasterCard implements IPaymentCard {
  constructor( public cardNumber: string, public cvv: string ) {}

  execute( user: string, amount: number ): IResponse {

    return {
      isSuccess: true
    }
  }
}
