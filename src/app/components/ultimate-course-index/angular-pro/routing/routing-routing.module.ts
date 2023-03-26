import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { MailViewComponent } from "./mail/components/mail-view/mail-view.component";
import { MailFolderComponent } from "./mail/containers/mail-folder/mail-folder.component";
import { MailFolderResolve } from "./mail/containers/mail-folder/mail-folder.resolve";
import { RoutingComponent } from "./routing.component";

const routes: Routes = [
  {
    path: "",
    component: RoutingComponent,
    canActivate: [AuthGuard],
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
      {
        path: "dashboard",
        canLoad: [AuthGuard],
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
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
