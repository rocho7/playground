import { createAction } from "@ngrx/store";
import { Action } from "../interfaces/ngrx.inteface";

export const incrementadorAction: Action = {
  type: "INCREMENTAR",
};
export const decrementadorAction: Action = {
  type: "DECREMENTAR",
};
export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};
export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2,
};
export const resetAction: Action = {
  type: "RESET",
};

//!Implentando NGRX
export const incrementadorActionNgRx = createAction("[Contador] Incrementar");
export const decrementadorActionNgRx = createAction("[Contador] Decrementar");
