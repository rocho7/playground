import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { StockService } from "./stock.service";
import { HttpClient, HttpResponse } from "@angular/common/http";

function createResponse(body: any) {
  return of(new HttpResponse({ body: body }));
}
class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 20 },
];
const productItems = [
  { id: 1, price: 110, name: "test 12" },
  { id: 2, price: 120, name: "test 1" },
];

fdescribe("StockService", () => {
  let service: StockService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [StockService, { provide: HttpClient, useClass: MockHttp }],
    });
    http = bed.inject(HttpClient);
    service = bed.inject(StockService);
  });

  it("should get cart Items", () => {
    spyOn(http, "get").and.returnValue(createResponse(cartItems));
    service.get().then((res: any) => {
      console.log(
        "%cres  ",
        "color: red; display: block; width: 100%;",
        res["body"]
      );
      console.log(
        "%ccart  ",
        "color: red; display: block; width: 100%;",
        cartItems
      );
      console.log(
        "%cres  ",
        "color: red; display: block; width: 100%;",
        res["body"][0] === cartItems[0]
      );

      expect(res["body"].length).toBe(2);
      expect(res["body"]).toEqual(cartItems);
    });
  });

  it("should get product Items", () => {
    spyOn(http, "get").and.returnValue(createResponse([...productItems]));
    service.get().then((res: any) => {
      console.log(
        "%cres ",
        "color: red; display: block; width: 100%;",
        res["body"]
      );
      expect(res["body"].length).toBe(2);
      expect(res["body"]).toEqual(productItems);
    });
  });
});
