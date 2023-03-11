import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverService } from 'src/app/services/resolvers/resolver.service';
import { PermissionsGuard } from './guards/permissions.guard';
import { WithoutSaveGuard } from './guards/without-save.guard';
import { ResolverGuardComponent } from './resolver-guard.component';

const routes: Routes = [
  {
    path: '',
    component: ResolverGuardComponent,
    resolve: { userParam: ResolverService },
    canActivate: [PermissionsGuard],
    canDeactivate: [WithoutSaveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverGuardRoutingModule { }
