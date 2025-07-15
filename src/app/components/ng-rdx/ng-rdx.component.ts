import { Component, OnInit } from "@angular/core";
import { Action, Reducer } from "./interfaces/ngrx.inteface";
import * as actions from "./contador/contador.actions";
import { contadorReducer } from "./reducer/reducer";
import { Store } from "@ngrx/store";

interface AppStore {
  contador: number;
}

class StorePrueba<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

@Component({
  selector: "app-ng-rdx",
  templateUrl: "./ng-rdx.component.html",
  styleUrls: ["./ng-rdx.component.css"],
})
export class NgRdxComponent implements OnInit {
  // action: Action = multiplicarAction;
  state: any;
  reducer: any = contadorReducer;
  storePrueba = new StorePrueba(this.reducer, 10);
  currentState: any;

  constructor(private store: Store<AppStore>) {
    //?Implementando NGRX
    this.store.subscribe((stateStore) => {
      console.log(
        "%cstore - state ",
        "background: purple; color: white; display: block;",
        stateStore
      );
      this.state = stateStore.contador;
    });
  }

  ngOnInit(): void {
    // this.currentState = this.storePrueba?.getState();
    // this.storePrueba.dispatch(this.action);
    // this.state = this.storePrueba?.getState();
    // this.state = this.reducer(10, this.action);
  }

  incrementar() {
    this.store.dispatch(actions.incrementadorActionNgRx());
  }

  decrementar() {
    this.store.dispatch(actions.decrementadorActionNgRx());
  }
}
