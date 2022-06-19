import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {
  flightNumber: number = 0;
  addFlight: AddFlight = new AddFlight();
  constructor(private addflightService: AddflightService, private route: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {
    this.flightNumber = this.route.snapshot.params['flightNumber']
    this.addflightService.getSearchFlightByflightNumber(this.flightNumber).subscribe(data => {
      this.addFlight = data;
    }, error => console.log(error));

  }

  onSubmit() {
    this.addflightService.updateFlight(this.flightNumber, this.addFlight).subscribe(data=>{
      console.log(data)
      this.goAllFlightData();
    }, error => console.log(error))


  }

  goAllFlightData() {
    this.router.navigate(['/allflights'])
  }

}
