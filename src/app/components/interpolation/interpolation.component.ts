import { Component } from '@angular/core';
import { Customer } from '../../models/customer';


@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {

     userName:string="ajay";
     userEmail:string="a@gmail.com";

     num1=5;
     num2=6;

     student={
      id:101,
      name:"Ajay"
     }

     cust=new Customer(101,"Vijay",5000);
     
}
