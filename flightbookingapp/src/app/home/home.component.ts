import { Component, OnInit } from '@angular/core';
import { AddFlight } from '../add-flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allflights:AddFlight[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
