import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joyride';

  constructor(private readonly joyrideService: JoyrideService) {}

  public onTourStart() {
		this.joyrideService.startTour(
			{ steps: ['firstStep', 'secondStep', 'thirdStep', 'fourthStep'], startWith: 'firstStep' } // Your steps order
		);
		console.log('after start', this.joyrideService);
	}
}
