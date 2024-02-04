import { Component } from '@angular/core';

import { parts } from '../parts';
import { share } from 'rxjs';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent {
  part = [...parts];

  share() {
    window.alert('The part has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the part goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/