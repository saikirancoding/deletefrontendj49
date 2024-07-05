import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {

  title="Running property binding Angular";

  active:boolean=false;

  imagePath="https://picsum.photos/200/300";
}
