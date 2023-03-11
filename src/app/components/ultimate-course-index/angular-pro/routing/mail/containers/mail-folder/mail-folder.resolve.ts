import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { MailService } from "../../../service/mail.service";
import { Mail } from "../../components/models/mail.interface";

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Mail[] | Observable<Mail[]> | Promise<Mail[]> {
    return this.mailService.getFolder(route.params.name);
  }
}
