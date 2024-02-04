import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Part } from '../../parts';

@Component({
  selector: 'app-part-alerts',
  templateUrl: './part-alerts.component.html',
  styleUrl: './part-alerts.component.css'
})
export class PartAlertsComponent {

  @Input() part: Part | undefined;
  @Output() notify = new EventEmitter();

}
