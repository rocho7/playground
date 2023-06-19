import { isNgTemplate } from "@angular/compiler";
import { Component, Inject, Injector, OnInit } from "@angular/core";
import {
  Agrupacion,
  GrupoCompra,
  PrescipcionCompra,
  Item,
} from "./class/prescripcion-compra.class";
import { Parent } from "./parentClass/Parent";

interface Hero {
  name: string;
  realName: string;
  dangerLevel: number;
}
interface Villain {
  name: string;
  dangerLevel: number;
}

@Component({
  selector: "app-classes-course",
  templateUrl: "./classes-course.component.html",
  styleUrls: ["./classes-course.component.css"],
})
export class ClassesCourseComponent extends Parent implements OnInit {
  prescripcion = [
    {
      fecServicio: "2021-08-09",
      grupoCompra: [
        {
          codGrupoCompra: 1056,
          desGrupoCompra: "Ribarroja Ingeniería",
          codEstadoPrescripcion: "AJ",
          agrupacion: [
            {
              codAgrupacion: 12,
              desAgrupacion: "Pescado",
              item: [
                {
                  codItem: 123,
                  desItem: "Pescado pequeño",
                  mcaHay: "S",
                  pvp: "33.5",
                  ordenAgrupacion: 0,
                  codEstadoProductoPrescripcion: "AJ",
                  numTiendas: 100,
                },
                {
                  codItem: 123,
                  desItem: "Pescado mediano",
                  mcaHay: "S",
                  pvp: "55.5",
                  ordenAgrupacion: 1,
                  codEstadoProductoPrescripcion: "AJ",
                  numTiendas: 80,
                },
              ],
            },
          ],
        },
        {
          codGrupoCompra: 1042,
          desGrupoCompra: "Abrera Ingeniería",
          codEstadoPrescripcion: "AJ",
          agrupacion: [
            {
              codAgrupacion: 1,
              desAgrupacion: "Pescado",
              item: [
                {
                  codItem: 123,
                  desItem: "Pescado pequeño",
                  mcaHay: "S",
                  pvp: "33.5",
                  ordenAgrupacion: 0,
                  codEstadoProductoPrescripcion: "AJ",
                  numTiendas: 100,
                },
              ],
            },
            {
              codAgrupacion: 2,
              desAgrupacion: "Pescado de rio",
              item: [
                {
                  codItem: 123,
                  desItem: "Salmón",
                  mcaHay: "S",
                  pvp: "33.5",
                  ordenAgrupacion: 0,
                  codEstadoProductoPrescripcion: "AJ",
                  numTiendas: 100,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  instancePrescipcionCompra: any;
  items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  expandedIndex = 0;
  constructor(
    public injector: Injector // @Inject(String)
  ) // public name: string,
  // @Inject(Number)
  // public age: number
  {
    super(
      injector
      // name,
      // lastName,
      // age
    );
  }

  ngOnInit(): void {
    super.name = "Angel";
    super.lastName = "León";
    super.age = 42;
    super.getFullName();
    this.onHandleAbsParent();
    this.deleteRow("hola");
    this.onHandleAbsParent();

    this.instanceJson();
    this.instancePrescipcionCompra = new PrescipcionCompra();
  }

  metodoPropidoDeEsteComponente(): void {}

  instanceJson(): void {
    // let pc:PrescipcionCompra[];
    this.prescripcion.forEach((pres, index) => {
      this.instancePrescipcionCompra = Object.assign(
        new PrescipcionCompra(),
        pres
      );
      this.instancePrescipcionCompra.grupoCompra = pres.grupoCompra;
    });

    console.log(
      "%cPC2 ",
      "color: white; background-color: #007acc;",
      this.instancePrescipcionCompra
    );
    console.log(
      "%cgeneric function with a date",
      "color: white; background-color: #007acc;",
      this.genericFunction(new Date()).getTime()
    );
    console.log(
      "%cgeneric function with a string",
      "color: white; background-color: #007acc;",
      this.genericFunction("string").toLocaleUpperCase()
    );
    console.log(
      "%cgeneric function with a number",
      "color: white; background-color: #007acc;",
      this.genericFunction(3.141618).toFixed(2)
    );

    const deadpool = {
      name: "Deadpool",
      realName: "Wade Winston Wilson",
      dangerLevel: 130,
    };
    console.log(
      "%cpasando un tipo a la función genérica ",
      "background: green; color: white; display: block;",
      this.genericFunction<Hero>(deadpool).realName
    );
  }

  genericFunction<T>(argument: T): T {
    return argument;
  }
}
