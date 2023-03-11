import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'resolution-modifiers',
        loadChildren: () => import('./resolution-modifiers/resolution-modifiers.module').then( m => m.ResolutionModifiersModule )
      },
      {
        path: 'dependency-providers',
        loadChildren: () => import('./dependency-providers/dependency-providers.module').then( m => m.DependencyProvidersModule )
      },
      {
        path: 'injection-token',
        loadChildren: () => import('./injection-token/injection-token.module').then(m => m.InjectionTokenModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
