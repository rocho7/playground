import { HttpClient } from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  combineLatest,
  concat,
  forkJoin,
  from,
  interval,
  Observable,
  of,
  Subject,
  timer,
  zip,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  filter,
  map,
  mergeAll,
  pluck,
  reduce,
  switchMap,
  take,
} from "rxjs/operators";

interface IForm {
  email: string;
  password: string;
}

interface IUserGithubInfo {
  repo: any;
  subscriptions: any;
  user: any;
}

@Component({
  selector: "app-operators-ymetodos-combinacion-observables",
  templateUrl: "./operators-ymetodos-combinacion-observables.component.html",
  styleUrls: ["./operators-ymetodos-combinacion-observables.component.css"],
})
export class OperatorsYMetodosCombinacionObservablesComponent
  implements OnInit, AfterViewInit
{
  @ViewChild("emailInput") emailInput: ElementRef<HTMLInputElement>;
  @ViewChild("passwordInput") passwordInput: ElementRef<HTMLInputElement>;

  form: FormGroup;
  urlGithub: string = "https://api.github.com/users";
  userGithub: string = "rocho7";
  userGithubInfo$: Observable<IUserGithubInfo>;

  constructor(private fb: FormBuilder, private readonly http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.exampleCombineLatest();
    this.exampleForkJoin();
    this.capitalizar();
    this.reduce();
    this.randoms();
    this.countDown();
    this.combinar();
    this.startWarCharacter();
  }

  ngAfterViewInit() {}

  exampleCombineLatest(): void {
    combineLatest<Observable<IForm>, Array<IForm>>(this.form.valueChanges)
      .pipe(map((res) => res[0]))
      .subscribe((res) => {
        console.log(
          "%c this.form.get ",
          "color: white; background-color: #007acc;",
          res
        );
      });
  }

  exampleForkJoin(): void {
    this.userGithubInfo$ = forkJoin({
      // generalInfo: {
      user: this.http.get(`${this.urlGithub}/${this.userGithub}`),
      repo: this.http.get(`${this.urlGithub}/${this.userGithub}/repos`),
      subscriptions: this.http.get(
        `${this.urlGithub}/${this.userGithub}/subscriptions`
      ),
      // }
    });
    // this.userGithubInfo$
    // .subscribe(res => {
    //   console.log('%cforkjoin res ', 'color: red; display: block; width: 100%;', res);
    // })
  }

  //* Ejercicios https://github.com/Klerith/rxjs-ejercicios

  capitalizar(): void {
    const nombres = [
      "batman",
      "joker",
      "doble cara",
      "pingüino",
      "hiedra venenosa",
      "cacatua",
    ];
    const capitalizar = (nombre: string) =>
      nombre.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    from(nombres).pipe(map(capitalizar)).subscribe(console.log);
  }

  reduce(): void {
    const datos = [1, 2, "foo", 3, 5, 6, "bar", 7, 8];

    from(datos)
      .pipe(
        map<string | number, number>((d) =>
          isNaN(d as number) ? 0 : (d as number)
        ),
        reduce((acc, curr) => acc + curr, 0)
      )
      .subscribe(console.log); // La salida debe de ser 32
  }

  randoms(): void {
    const subject$ = new Subject();
    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
      take(5),
      map((val) => Math.round(Math.random() * 100))
    );
    reloj$.subscribe(subject$);
    // No tocar la creación del observable
    // ============================================
    // Estos dos observables deben de emitir exactamente los mismos valores
    // subject$.subscribe( val => console.log('obs1', val) );
    // subject$.subscribe( val => console.log('obs2', val) );
  }

  countDown(): void {
    let inicio = 7;
    const countdown$ = interval(700).pipe(
      take(7),
      map((n) => inicio - n)
      // Usar los operadores necesarios
      // para realizar la cuenta regresiva
    );
    // No tocar esta línea ==================
    // countdown$.subscribe( console.log ); // =
    // ======================================
  }

  combinar(): void {
    const letras = ["a", "b", "c", "d", "e"];
    const numeros = [1, 2, 3, 4, 5];

    // Emite letras cada segundo
    const letras$ = interval(1000).pipe(
      map((i) => letras[i]),
      take(letras.length)
    );

    // Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial
    // de 500 milésimas
    const numeros$ = timer(500, 1000).pipe(
      map((i) => numeros[i]),
      take(numeros.length)
    );

    combineLatest(letras$, numeros$)
      .pipe(map(([a, b]) => `${a}${b}`))
      .subscribe((res) => {
        console.log(
          "%ccombina ",
          "color: red; display: block; width: 100%;",
          res
        );
      });

    // ========================================
    // Empezar a codificar aquí abajo
    // Nota, el subscribe debe de ser así
    // .subscribe( console.log )
    // Es decir, la salida en el subscribe debe
    // de estar procesada en su totalidad
    // ========================================
  }

  startWarCharacter(): void {
    // No tocar ========================================================
    const SW_API = "https://swapi.dev/api";
    const getRequest = (url: string) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    getRequest(`${SW_API}/people/2/`)
      .pipe(
        // Realizar los operadores respectivos aquí
        switchMap((res) => zip(of(res), getRequest(res.species[0]))),
        map(([personaje, especie]) => ({ personaje, especie }))
        // NO TOCAR el subscribe ni modificarlo ==
      )
      .subscribe(console.log); // ==
  }
}
