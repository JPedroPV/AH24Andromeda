import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PartListComponent } from './part-list/part-list.component';
import { PartAlertsComponent } from './part-list/part-alerts/part-alerts.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PartBuilderComponent } from './part-builder/part-builder.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogClose } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmSwitchComponent } from './part-details/confirm-switch/confirm-switch.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthorComponent } from './about-us/author/author.component';
import { ConfirmPurchaseComponent } from './part-builder/confirm-purchase/confirm-purchase.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AboutUsComponent },
      { path: 'parts', component: PartListComponent },
      { path: 'parts/:partId', component: PartDetailsComponent },
      { path: 'builder', component: PartBuilderComponent},
    ]),
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PartListComponent,
    PartAlertsComponent,
    PartDetailsComponent,
    ConfirmSwitchComponent,
    PartBuilderComponent,
    ConfirmPurchaseComponent,
    AboutUsComponent,
    AuthorComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }

