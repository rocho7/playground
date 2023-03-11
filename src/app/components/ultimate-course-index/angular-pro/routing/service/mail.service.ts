import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, pluck } from "rxjs/operators";
import { Mail } from "../mail/components/models/mail.interface";

@Injectable({
  providedIn: "root",
})
export class MailService {
  url = "/assets/ultimate-course/angular-pro/routing-course/messages.json";
  constructor(private http: HttpClient) {}

  async getFolder(folder: string): Promise<any> {
    const response = await this.http
      .get(`${this.url}?folder=${folder}`)
      .pipe(
        pluck("messages"),
        map((res: any) => {
          return res.filter((message: Mail) => message.folder === folder);
        })
      )
      .toPromise();
    return response;
  }
}
