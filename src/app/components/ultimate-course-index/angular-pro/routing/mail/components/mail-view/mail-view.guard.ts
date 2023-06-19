import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { MailViewComponent } from "./mail-view.component";

@Injectable()
export class MailViewGuard implements CanDeactivate<MailViewComponent> {
  constructor(private readonly component: MailViewComponent) {}
  canDeactivate(
    component: MailViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (component.hasUnsavedChanges) {
      return window.confirm("Are you sure you want to leave?");
    }
    return true;
  }
}
