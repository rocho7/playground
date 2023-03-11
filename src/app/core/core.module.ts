import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { SpinnerComponent } from './spinner/spinner/spinner.component';


@NgModule({
  declarations: [HeaderComponent, DialogConfirmationComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [HeaderComponent, SpinnerComponent]
})
export class CoreModule { }
