import {
  decrementadorActionNgRx,
  incrementadorActionNgRx,
} from "../contador/contador.actions";
import { Action as ActionExample } from "../interfaces/ngrx.inteface";
import { Action } from "@ngrx/store";

export const contadorReducer = (
  state: any = 10,
  action: ActionExample
): any => {
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);
    case "DECREMENTAR":
      return (state -= 1);
    case "MULTIPLICAR":
      return state * action.payload;
    case "DIVIDIR":
      return state / action.payload;
    case "RESET":
      return (state = 0);

    default:
      return state;
  }
};

export const contadorReducerNgRx = (
  state: number = 10,
  action: Action
): any => {
  switch (action.type) {
    case incrementadorActionNgRx.type:
      return state + 1;
    case decrementadorActionNgRx.type:
      return state - 1;
    // case "MULTIPLICAR":
    //   return state * action.;
    // case "DIVIDIR":
    //   return state / action.payload;
    // case "RESET":
    //   return (state = 0);

    default:
      return state;
  }
};
