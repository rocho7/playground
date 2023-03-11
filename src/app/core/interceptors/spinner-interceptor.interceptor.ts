import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner/service/spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptorInterceptor implements HttpInterceptor {

  constructor(private readonly spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.showLoading();
    return next.handle(request).pipe(
      finalize(()=> this.spinnerService.hideLoading())
    );
  }
}
