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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PartBuilderComponent } from './part-builder/part-builder.component';
import{ MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PartListComponent },
      { path: 'parts/:partId', component: PartDetailsComponent },
      { path: 'builder', component: PartBuilderComponent},
      { path: 'cart', component: CartComponent},
    ]),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
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