import { Component } from '@angular/core';
import { parts } from '../parts';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent {
  parts = [...parts];

  share() {
    window.alert('The part has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the part goes on sale');
  }
}
