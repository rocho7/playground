import { HttpErrorResponse } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { fakeAsync, TestBed } from "@angular/core/testing";
import { of, throwError } from "rxjs";
import { ObsService } from "./obs.service";

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
describe("ObsService", () => {
  let service: ObsService;
  let httpClientSpy: { post: jasmine.Spy; get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["post", "get"]);
    service = new ObsService(httpClientSpy as any);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  xit("Petición API", (done: DoneFn) => {
    const mockData = {
      email: "prueba@email.com",
      password: "123",
    };
    const dataResponse = {
      email: "prueba@email.com",
      password: "123",
    };

    httpClientSpy.post.and.returnValue(of(dataResponse));
    service.save(mockData).subscribe((res) => {
      expect(res).toEqual(dataResponse);
      done();
    });
  });

  xit("Petición API Erronea", (done: DoneFn) => {
    const mockData = {
      email: "prueba@email.com",
      password: "",
    };
    const dataResponseError = new HttpErrorResponse({
      error: "Invalid",
      status: 409,
      statusText: "Not Found",
    });

    httpClientSpy.post.and.returnValue(throwError(dataResponseError));
    service.save(mockData).subscribe(
      (res) => {},
      (err) => {
        expect(err.status).toEqual(409);
        done();
      }
    );
  });

  //!COURSE UDEMY
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ObsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ObsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    //No hay peticiones pendientes en cada test, no se lanza una petición si hay una pendiente
    httpMock.verify();
  });

  //!para que funcione este test hay que comentar el httpMock.verify() y quitar la x del test
  xit("getResult method WITH FAKEASYNC", fakeAsync(() => {
    httpClientSpy.get.and.returnValue(of(listPhotos));
    service.getResults().subscribe((res) => {
      expect(res).toEqual(listPhotos);
    });
  }));

  it("Should be created course UDEMY ", () => {
    expect(service).toBeTruthy();
  });

  it("getResults return a list of photos  ", () => {
    service.getResults().subscribe((photos) => {
      expect(photos).toEqual(listPhotos);
    });
    const req = httpMock.expectOne(
      "https://jsonplaceholder.typicode.com/photos"
    );
    expect(req.request.method).toBe("GET");
    req.flush(listPhotos);
  });
});
