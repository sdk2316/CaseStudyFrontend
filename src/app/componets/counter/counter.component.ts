import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  product={
    name:"samsung galaxy A23",
    color:"Black",
    price:450000,
    launchDate:Date.now()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
