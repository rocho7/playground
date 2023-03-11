import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MailItemComponent } from "./components/mail-item/mail-item.component";
import { MailFolderComponent } from "./containers/mail-folder/mail-folder.component";
import { RouterModule, Routes } from "@angular/router";
import { MailAppComponent } from "./components/mail-app/mail-app.component";
import { MailViewComponent } from "./components/mail-view/mail-view.component";

export const ROUTES: Routes = [
  {
    path: "**",
    redirectTo: "folder/:name",
    component: MailFolderComponent,
  },
  {
    path: "message/:id",
    component: MailViewComponent,
  },
];

@NgModule({
  declarations: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent,
    MailViewComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [MailAppComponent],
})
export class MailModule {}
