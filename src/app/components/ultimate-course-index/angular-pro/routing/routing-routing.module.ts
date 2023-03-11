import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MailViewComponent } from "./mail/components/mail-view/mail-view.component";
import { MailFolderComponent } from "./mail/containers/mail-folder/mail-folder.component";
import { MailFolderResolve } from "./mail/containers/mail-folder/mail-folder.resolve";
import { RoutingComponent } from "./routing.component";

const routes: Routes = [
  {
    path: "",
    component: RoutingComponent,
    children: [
      {
        path: "folder/:name",
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve,
        },
      },
      {
        path: "message/:id",
        component: MailViewComponent,
        outlet: "pane",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [MailFolderResolve],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
