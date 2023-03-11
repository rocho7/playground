import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Item } from "../components/classes-course/class/prescripcion-compra.class";
import { ObsService } from "../services/obs.service";

@Component({
  selector: "app-pruebas-testing",
  templateUrl: "./pruebas-testing.component.html",
  styleUrls: ["./pruebas-testing.component.css"],
})
export class PruebasTestingComponent implements OnInit {
  @ViewChild("result") result: any;
  title = "ng-jasmine";
  form: FormGroup;
  isCheck: any;
  response: any;
  photosAmount: any[] = [];
  totalPhotosPrice: number;

  constructor(
    private readonly fb: FormBuilder,
    private readonly obsService: ObsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control("prueba@email.com", [Validators.required]),
      password: this.fb.control("123", [Validators.required]),
    });
    this.totalPhotosPrice = 0;
    this.getPhotos();
  }

  add(num1: number, num2: number): number {
    return Number(num1) + Number(num2);
  }

  printAdd(num1: any, num2: any): void {
    this.result.nativeElement.value = this.add(num1, num2);
  }

  submit(form: FormGroup): void {
    this.isCheck = { user: 1 };
    this.obsService.save(form.value).subscribe((res) => {
      this.response = res;
    });
  }

  getPhotos(): void {
    const photos = this.obsService.getResults();
    photos.subscribe((items) => {
      items.forEach((it, index) => {
        if (index < 5) {
          this.photosAmount.push({
            ...it,
            price: 10,
            amount: index * 10,
          });
        }
      });
      this.getTotalPhotosPrice(this.photosAmount);
    });
  }

  getTotalPhotosPrice(photosAmount: any[]): number {
    let total = 0;
    photosAmount.forEach((it) => {
      total = it.amount;
    });
    return total;
  }

  onInputChange(action: string, photo: any): void {
    const amount = action === "plus" ? photo.amount + 1 : photo.amount - 1;
    photo.amount = Number(amount);
    // const photos = this.obsService.getResults();
    this.obsService.getResults();
    this.totalPhotosPrice = this.getTotalPhotosPrice(this.photosAmount);
  }

  public onClearPhotos(): void {
    if (this.photosAmount && this.photosAmount.length > 0) {
      this.clearListCartPhotos();
    }
  }

  private clearListCartPhotos(): void {
    console.log(
      "%cclearListCartPhotos llamadado desde el SPEC ",
      "color: red; display: block; width: 100%;"
    );
    this.photosAmount = [];
    this.obsService.remove();
  }
}
