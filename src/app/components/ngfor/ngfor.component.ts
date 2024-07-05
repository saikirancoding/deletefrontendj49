import { Component } from '@angular/core';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

    city=["Pune","Delhi","Lko"];

    user=[
      {userId:101,userName:"ajay",userPayment:5000},
      {userId:102,userName:"jay",userPayment:6000},
      {userId:103,userName:"Vijay",userPayment:7000}
    ];

    movies:Movie[]=[
      new Movie("Animal","Ajay","Ranbeer","2-nov-23"),
      new Movie("Dar","Ajay","Sharukh","2-nov-23"),
      new Movie("12th Fail","Ajay","Ranbeer","2-nov-23"),
  ]

  movie={
    title:'Dar',
    director:'Ajay'
  }
}
