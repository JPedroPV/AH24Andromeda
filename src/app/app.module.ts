import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PartListComponent } from './part-list/part-list.component';
import { PartAlertsComponent } from './part-list/part-alerts/part-alerts.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PartListComponent },
      { path: 'parts/:partId', component: PartDetailsComponent },
      { path: 'cart', component: CartComponent},
    ])
  
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PartListComponent,
    PartAlertsComponent,
    PartDetailsComponent,
    CartComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/