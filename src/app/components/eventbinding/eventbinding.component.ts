import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

  n1=4;
  n2=5;
  total=0;
  sum():void{
    this.total=this.n1+this.n2;
    
  }
}
