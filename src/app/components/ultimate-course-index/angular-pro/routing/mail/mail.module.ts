import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MailItemComponent } from "./components/mail-item/mail-item.component";
import { MailFolderComponent } from "./containers/mail-folder/mail-folder.component";
import { RouterModule, Routes } from "@angular/router";
import { MailAppComponent } from "./components/mail-app/mail-app.component";
import { MailViewComponent } from "./components/mail-view/mail-view.component";
import { MailViewGuard } from "./components/mail-view/mail-view.guard";

export const ROUTES: Routes = [
  {
    path: "**",
    redirectTo: "folder/:name",
    component: MailFolderComponent,
  },
  {
    path: "message/:id",
    component: MailViewComponent,
    canDeactivate: [MailViewGuard],
  },
];

@NgModule({
  declarations: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent,
    MailViewComponent,
  ],
  providers: [MailViewGuard],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [MailAppComponent],
})
export class MailModule {}
