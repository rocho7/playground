import { inject, InjectionToken } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserService } from "src/app/components/dependency-injection/menu/injection-token/service/user.service";
import { IUser } from "./interface/user.interface";

function getUser() {
  return 'userService.getUsersRequest()';
}
export const USER_REQUEST = new InjectionToken<Promise<IUser[]>>('user.request',
{
  factory () {
    const service = inject(UserService);
    return service.getUsersRequest();
  }
});

export type ActiveThemeProvider = Observable<string>;
export const THEME_PROOF = new InjectionToken<ActiveThemeProvider>('active theme', {
  providedIn: 'root',
  factory () {
    return of('string');
  }
});
