import { Component } from '@angular/core';

@Component({
  selector: 'app-part-builder',
  templateUrl: './part-builder.component.html',
  styleUrl: './part-builder.component.css'
})
export class PartBuilderComponent {
  getImage(type:string){
    return `assets/rocket_nose_none.png`;
  }
}
