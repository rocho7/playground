import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { ObsService } from "../services/obs.service";

import { PruebasTestingComponent } from "./pruebas-testing.component";
const listPhotos = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    price: 10,
    amount: 30,
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
    price: 10,
    amount: 20,
  },
];

const obsSerivceMock = {
  getResults: () => of(listPhotos),
  remove: () => null,
};

describe("PruebasTestingComponent", () => {
  let app: PruebasTestingComponent;
  let n: number = 0;
  let fixture: ComponentFixture<PruebasTestingComponent>;
  let service: ObsService;
  let photo: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PruebasTestingComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        // ObsService,
        {
          provide: ObsService,
          useValue: obsSerivceMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    // TestBed.configureTestingModule({})
  }));

  afterEach(async(() => {
    n++;
  }));
  it("la suma debe dar 2", async(() => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector("#num1").value = "0";
    compiled.querySelector("#num2").value = "2";
    compiled.querySelector("#calc").click();

    expect(compiled.querySelector("#result").value).toBe("2");
  }));

  it("la suma debe dar 3", async(() => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector("#num1").value = "1";
    compiled.querySelector("#num2").value = "2";
    compiled.querySelector("#calc").click();

    expect(compiled.querySelector("#result").value).toBe("3");
  }));

  it("el titulo contiente el texto SumApp ", async(() => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let des = compiled.querySelector("#title").innerHTML;
    expect(des).toContain("SumApp");
  }));

  it("descripción contine (app)", async(() => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let des = compiled.querySelector("#description").innerHTML;
    expect(des).toMatch("(app)");
  }));
  it("titulo está definido", async(() => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let des = compiled.querySelector("#title").innerHTML;
    expect(des).toBeDefined();
  }));

  it("la suma debe ser mayor a 2", async(() => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector("#num1").value = "1";
    compiled.querySelector("#num2").value = "2";
    compiled.querySelector("#calc").click();

    expect(compiled.querySelector("#result").value).toBeGreaterThan(2);
  }));

  it("solo un campo del formulario relleno. Formulario invalido", () => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const email = app.form.controls["email"];
    email.setValue("prueba@email.com");
    expect(app.form.invalid).toBeTrue;
  });

  it("Formulario valido. Ambos campos rellenos", () => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const email = form.controls["email"];
    email.setValue("prueba@email.com");
    const password = form.controls["password"];
    password.setValue("123");
    expect(form.invalid).toBeFalse();
  });

  it("Click sobre el botón del formulario", () => {
    const fixture = TestBed.createComponent(PruebasTestingComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const email = form.controls["email"];
    email.setValue("prueba@email.com");
    const password = form.controls["password"];
    password.setValue("123");
    const btnElement = fixture.debugElement.query(By.css(".btn"));
    btnElement.nativeElement.click();
    const testData = { user: 1 };
    expect(app.isCheck).toEqual(testData);
  });

  //!CURSO UDEMY

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasTestingComponent);
    app = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ObsService);
    fixture.detectChanges(); //Se instancia por el método ngOnInit
  });

  it("should create TEST UDEMY COURSE", () => {
    console.log(
      "%ccreate Test primero ",
      "color: white; background-color: #007acc;",
      photo
    );
    expect(app).toBeTruthy();
  });

  it("GetTotalPhotosPrice RETUNS TOTAL AMOUNT", () => {
    console.log(
      "%cRETUNS TOTAL AMOUNT segundo",
      "color: white; background-color: #007acc;",
      photo
    );
    // app.getPhotos();
    const totalPrice = app.getTotalPhotosPrice(listPhotos);
    // expect(totalPrice).not.toBe(0);
    expect(totalPrice).not.toBeNull();
  });

  it("onInputChange INCREMENT correctly", () => {
    photo = {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      price: 10,
      amount: 30,
    };
    console.log(
      "%conInputChange INCREMENT correctly tercero",
      "color: white; background-color: #007acc;",
      photo
    );
    const action = "plus";
    // const photo = listPhotos[0];

    const spy1 = spyOn(service, "getResults").and.callFake(() => {
      return of([]);
    });
    expect(photo.amount).toBe(30);
    const spy2 = spyOn(app, "getTotalPhotosPrice").and.callFake(() => 0);
    app.onInputChange(action, photo);
    expect(photo.amount).toBe(31);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("onInputChange DECREMENT correctly", () => {
    console.log(
      "%conInputChange DECREMENT correctly cuarto",
      "color: white; background-color: #007acc;",
      photo
    );
    photo = {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      price: 10,
      amount: 30,
    };
    const action = "minus";
    // const photo = listPhotos[0];

    const spy1 = spyOn(service, "getResults").and.callFake(() => {
      return of([]);
    });
    const spy2 = spyOn(app, "getTotalPhotosPrice").and.callFake(() => 0);
    app.onInputChange(action, photo);
    expect(photo.amount).toBe(29);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("clearListPhotos llama a un método publico que llama a un privado", () => {
    const spy1 = spyOn(app as any, "onClearPhotos").and.callThrough();
    // const spy2 = spyOn(service, "remove").and.callFake(() => null);
    app.photosAmount = listPhotos;
    app.onClearPhotos();
    expect(app.photosAmount.length).toBe(0);
    expect(spy1).toHaveBeenCalled();
    // expect(spy2).toHaveBeenCalled();
  });

  it("prueba SUBSCRIPTION", () => {
    //llama a un servicio que recibe una subscripción por eso el returnValue debe ser un Observable
    // const spy1 = spyOn(service, "getResults").and.returnValue(of(listPhotos));

    app.getPhotos();
    // expect(spy1).toHaveBeenCalled();
    expect(app.photosAmount.length).toBeGreaterThan(1);
  });
});
